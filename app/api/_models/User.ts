import mongoose, { Schema, Document } from "mongoose";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Review {
  productId: number;
  review_text: string;
  rating: number;
  date: string;
}

interface PastOrder {
  date: string;
  totalAmount: number;
  items: CartItem[];
}

interface PaymentInfo {
  cardName: string;
  cardNumber: string;
  expiry: string;
  zipCode: string;
}

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  phone?: string;
  profilePic?: string;
  cart: CartItem[];
  paymentInfo?: PaymentInfo;
  reviews: Review[];
  pastOrders: PastOrder[];
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  profilePic: { type: String },
  cart: [
    {
      id: Number,
      name: String,
      price: Number,
      quantity: Number,
      image: String,
    },
  ],
  paymentInfo: {
    cardName: String,
    cardNumber: String,
    expiry: String,
    zipCode: String,
  },
  reviews: [
    {
      productId: Number,
      review_text: String,
      rating: Number,
      date: String,
    },
  ],
  pastOrders: [
    {
      date: String,
      totalAmount: Number,
      items: [
        {
          id: Number,
          name: String,
          price: Number,
          quantity: Number,
          image: String,
        },
      ],
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
