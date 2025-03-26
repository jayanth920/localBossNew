require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use((err, req, res, next) => {
    console.error("Unexpected Error:", err);
    res.status(500).json({ message: "Something went wrong, please try again later." });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err));

// User Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    phone: String,
    profilePic: String,
    cart: [{
        id: Number,
        name: String,
        price: Number,
        quantity: Number,
        image: String
    }],
    paymentInfo: {
        cardName: String,
        cardNumber: String,
        expiry: String,
        zipCode: String
    },
    reviews: [{
        productId: Number,
        review_text: String,
        rating: Number,
        date: String
    }],
    pastOrders: [{
        date: String,
        totalAmount: Number,
        items: [{
            id: Number,
            name: String,
            price: Number,
            quantity: Number,
            image: String
        }]
    }],
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);
// Register User with Error Handling
app.post("/register", async (req, res) => {
    try {
        const { username, email, password, phone } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "Email already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword, phone, cart: [], pastOrders: [] });
        await newUser.save();

        res.json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error in /register:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Login User with Error Handling
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: "7d" });
        res.json({ token, user });
    } catch (error) {
        console.error("Error in /login:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// Get User Data
app.get("/user/:id", async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        next(error); // Pass error to global error handler
    }
});

// Get Cart for a User
app.get("/cart/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);  // Find the user by ID from the database

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Return the user's cart data
        res.json(user.cart);
    } catch (error) {
        console.error("Error in /cart/:userId:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// Add Item to Cart
app.post("/cart/add", async (req, res) => {
    const { userId, item } = req.body;
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    let existingItem = user.cart.find(i => i.id === item.id);
    if (existingItem) existingItem.quantity += item.quantity;
    else user.cart.push(item);

    await user.save();
    res.json(user.cart);
});

// Remove Item from Cart
app.post("/cart/remove", async (req, res) => {
    const { userId, itemId } = req.body;
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    user.cart = user.cart.filter(i => i.id !== itemId);
    await user.save();
    res.json(user.cart);
});

// Checkout and Clear Cart
app.post("/checkout", async (req, res) => {
    const { userId } = req.body;
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });
    if (!user.paymentInfo) return res.status(400).json({ message: "Payment info missing" });

    const order = {
        date: new Date().toISOString(),
        totalAmount: user.cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        items: [...user.cart]
    };

    user.pastOrders.push(order);
    user.cart = [];

    await user.save();
    res.json({ message: "Order placed successfully", order });
});

// Update Payment Info
app.post("/profile/payment", async (req, res) => {
    const { userId, paymentInfo } = req.body;
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    user.paymentInfo = paymentInfo;
    await user.save();
    res.json({ message: "Payment info updated successfully" });
});

// Update Profile
app.post("/profile/update", async (req, res) => {
    const { userId, username, email, phone, profilePic } = req.body;
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    user.username = username;
    user.email = email;
    user.phone = phone;
    user.profilePic = profilePic;

    await user.save();
    res.json({ message: "Profile updated successfully" });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
