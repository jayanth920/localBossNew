"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useUser } from '@/app/components/context/userContext';

export default function CheckoutPage() {
  //   const { user } = useUser();
  const [cart, setCart] = useState<any[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  // Payment field values
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [appleFullName, setAppleFullName] = useState("");
  const [appleEmail, setAppleEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateRegion, setStateRegion] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [taxRate, setTaxRate] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);

  const router = useRouter();

  // Fetch cart items from local storage or API
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userString = localStorage.getItem("user");

        if (!userString) {
          alert("Please log in first.");
          return;
        }

        const user = JSON.parse(userString);

        if (!user || !user._id) {
          alert("Please log in first.");
          return;
        }

        const userId = user._id;
        const response = await fetch(`/api/cart/${userId}`);
        if (!response.ok) throw new Error("Failed to fetch cart data");

        const data = await response.json();

        // Ensure that cart is an array before setting it
        if (data) {
          setCart(data.cart);
          calculateTotal(data.cart);
        } else {
          setCart([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart:", error);
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  // Calculate total price
  const calculateTotal = (cartItems: any[]) => {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    // Random tax between 5% and 10%
    const randomTaxRate = parseFloat((Math.random() * 0.05 + 0.05).toFixed(2)); // e.g. 0.07 for 7%
    const tax = totalPrice * randomTaxRate;

    setTaxRate(randomTaxRate);
    setTaxAmount(tax);
    setTotal(totalPrice + tax);
  };

  // Handle the place order action
  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      alert("Please choose a payment method");
      return;
    }

    if (
      paymentMethod === "credit-card" &&
      (!cardNumber || !expiryDate || !cvv)
    ) {
      alert("Please fill in all credit card details.");
      return;
    }
    if (paymentMethod === "paypal" && !paypalEmail) {
      alert("Please enter your PayPal email.");
      return;
    }
    if (paymentMethod === "apple-pay" && (!appleFullName || !appleEmail)) {
      alert("Please fill in your Apple Pay details.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }

    if (!address || !city || !stateRegion || !zipCode) {
      alert("Please enter your full delivery address.");
      return;
    }

    try {
      const userString = localStorage.getItem("user");
      if (!userString) {
        alert("Please log in first.");
        return;
      }

      const user = JSON.parse(userString);
      const userId = user._id;

      const response = await fetch("/api/cart/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to place order");
      }

      setCart([]);
      setTotal(0);
      const deliveryDays = Math.floor(Math.random() * 4) + 1;
      alert(
        `Order placed successfully! Your order will be delivered in approximately ${deliveryDays} day${
          deliveryDays > 1 ? "s" : ""
        }.`
      );

      router.push("/shop");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred while placing the order.");
    }
  };

  // Render input fields based on payment method
  const renderPaymentFields = () => {
    switch (paymentMethod) {
      case "credit-card":
        return (
          <div className="space-y-4 mb-6">
            <div>
              <label className="block font-medium mb-1">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="1234 5678 9012 3456"
              />{" "}
            </div>
            <div>
              <label className="block font-medium mb-1">Expiry Date</label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="MM/YY"
              />{" "}
            </div>
            <div>
              <label className="block font-medium mb-1">CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="123"
              />{" "}
            </div>
          </div>
        );

      case "paypal":
        return (
          <div className="space-y-4 mb-6">
            <div>
              <label className="block font-medium mb-1">PayPal Email</label>
              <input
                type="email"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="you@example.com"
              />{" "}
            </div>
          </div>
        );
      case "apple-pay":
        return (
          <div className="space-y-4 mb-6">
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                value={appleFullName}
                onChange={(e) => setAppleFullName(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="John Appleseed"
              />{" "}
            </div>
            <div>
              <label className="block font-medium mb-1">Apple Pay Email</label>
              <input
                type="email"
                value={appleEmail}
                onChange={(e) => setAppleEmail(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="john@icloud.com"
              />{" "}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value);
    // Reset all fields
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    setPaypalEmail("");
    setAppleFullName("");
    setAppleEmail("");
  };

  if (loading)
    return (
      <div className="bg-amber-50 mt-[20vh] md:mt-[5vh] p-5 rounded-lg">
        Loading...
      </div>
    );

  return (
    <form
      aria-label="Checkout form"
      className="max-w-4xl mx-[5vw] md:mx-auto p-4 bg-amber-50 mt-[20vh] md:mt-[5vh] mb-[5vh] md:mb-[5vh] rounded-lg"
    >
      <h1 className="text-2xl font-semibold mb-4" id="checkout-heading">
        Checkout
      </h1>

      {/* Payment Method */}
      <section className="mb-6" aria-labelledby="payment-heading">
        <label
          id="payment-heading"
          htmlFor="payment-method"
          className="block text-lg font-medium"
        >
          Select Payment Method:
        </label>
        <select
          id="payment-method"
          className="mt-2 p-2 border rounded-md"
          value={paymentMethod}
          onChange={handlePaymentChange}
          aria-describedby="payment-heading"
        >
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="apple-pay">Apple Pay</option>
        </select>
      </section>

      {/* Dynamic Fields */}
      {renderPaymentFields()}

      {/* Address Section */}
      <section className="mb-6" aria-labelledby="delivery-heading">
        <h2 id="delivery-heading" className="text-lg font-semibold mb-2">
          Delivery Address
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            aria-label="Street Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Street Address"
            className="p-2 border rounded-md"
          />
          <input
            aria-label="City"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            className="p-2 border rounded-md"
          />
          <select
            aria-label="State"
            value={stateRegion}
            onChange={(e) => setStateRegion(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="">Select a State</option>
            {/* [state options stay unchanged] */}
            <option value="CA">California</option>
            <option value="TX">Texas</option>
            {/* ... */}
          </select>
          <input
            aria-label="Zip Code"
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Zip Code"
            className="p-2 border rounded-md"
          />
        </div>
      </section>

      {/* Cart Items */}
      <section aria-labelledby="cart-heading">
        <h2 id="cart-heading" className="sr-only">
          Cart Items
        </h2>
        {cart.length === 0 ? (
          <p role="status">Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <Card
              key={index}
              className="mb-4"
              aria-label={`Cart item: ${item.name}`}
            >
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>
                    {item.name} x {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </section>

      {/* Total Section */}
      {cart.length > 0 && (
        <section
          className="mt-4 space-y-2 text-right"
          aria-label="Order Summary"
        >
          <p className="text-md">Subtotal: ${(total - taxAmount).toFixed(2)}</p>
          <p className="text-md">
            Tax ({(taxRate * 100).toFixed(1)}%): ${taxAmount.toFixed(2)}
          </p>
          <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
        </section>
      )}

      {/* Submit Button */}
      <div className="mt-6 flex justify-end">
        <Button
          onClick={handlePlaceOrder}
          className="w-auto bg-blue-500 text-white"
          aria-label="Place your order now"
        >
          Place Order
        </Button>
      </div>
    </form>
  );
}
