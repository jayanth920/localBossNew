'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { useUser } from '@/app/components/context/userContext';

export default function CheckoutPage() {
//   const { user } = useUser();
  const [cart, setCart] = useState<any[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch cart items from local storage or API
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userString = localStorage.getItem('user');

        if (!userString) {
          alert('Please log in first.');
          return;
        }

        const user = JSON.parse(userString);

        if (!user || !user._id) {
          alert('Please log in first.');
          return;
        }

        const userId = user._id;
        const response = await fetch(`/api/cart/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch cart data');

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
        console.error('Error fetching cart:', error);
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  // Calculate total price
  const calculateTotal = (cartItems: any[]) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalPrice);
  };

  // Handle the place order action
  const handlePlaceOrder = async () => {
    try {
      const userString = localStorage.getItem('user');
      if (!userString) {
        alert('Please log in first.');
        return;
      }

      const user = JSON.parse(userString);
      const userId = user._id;

      // Perform checkout by calling the /checkout API
      const response = await fetch('/api/cart/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }), // Send userId for order processing
      });

      const data = await response.json();
      // console.log(data)

      if (!response.ok) {
        throw new Error(data.message || 'Failed to place order');
      }

      // After placing the order, clear the cart and show a success message
      setCart([]);
      setTotal(0);

      alert('Order placed successfully!');
      router.push('/shop'); // Redirect to order confirmation page or homepage
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred while placing the order.');
    }
  };

  // Handle payment method selection
  const handlePaymentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-[5vw] md:mx-auto p-4 bg-amber-50 mt-[20vh] md:mt-[5vh] mb-[5vh] md:mb-0 rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

      {/* Payment Method Selection */}
      <div className="mb-6">
        <label htmlFor="payment-method" className="block text-lg font-medium">
          Select Payment Method:
        </label>
        <select
          id="payment-method"
          className="mt-2 p-2 border rounded-md"
          value={paymentMethod}
          onChange={handlePaymentChange}
        >
          <option value="">Select a payment method</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="apple-pay">Apple Pay</option>
        </select>
      </div>

      {/* Cart Items */}
      <div>
        {cart.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          cart.map((item, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>
                    {item.name} x {item.quantity} = ${item.price * item.quantity}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Total Calculation */}
      {cart.length > 0 && (
        <div className="mt-4 flex justify-between items-center">
          <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
        </div>
      )}

      {/* Place Order Button */}
      <div className="mt-6 flex justify-end">
        <Button onClick={handlePlaceOrder} className="w-auto bg-blue-500 text-white">
          Place Order
        </Button>
      </div>
    </div>
  );
}
