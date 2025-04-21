'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { useUser } from '@/app/components/context/userContext';

export default function CheckoutPage() {
  //   const { user } = useUser();
  const [cart, setCart] = useState<any[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  // Payment field values
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [appleFullName, setAppleFullName] = useState('');
  const [appleEmail, setAppleEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateRegion, setStateRegion] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [taxRate, setTaxRate] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);


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
      alert('Please choose a payment method');
      return;
    }

    if (paymentMethod === 'credit-card' && (!cardNumber || !expiryDate || !cvv)) {
      alert('Please fill in all credit card details.');
      return;
    }
    if (paymentMethod === 'paypal' && !paypalEmail) {
      alert('Please enter your PayPal email.');
      return;
    }
    if (paymentMethod === 'apple-pay' && (!appleFullName || !appleEmail)) {
      alert('Please fill in your Apple Pay details.');
      return;
    }


    if (cart.length === 0) {
      alert('Your cart is empty. Please add items before placing an order.');
      return;
    }

    if (!address || !city || !stateRegion || !zipCode) {
      alert('Please enter your full delivery address.');
      return;
    }

    try {
      const userString = localStorage.getItem('user');
      if (!userString) {
        alert('Please log in first.');
        return;
      }

      const user = JSON.parse(userString);
      const userId = user._id;

      const response = await fetch('/api/cart/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to place order');
      }

      setCart([]);
      setTotal(0);
      const deliveryDays = Math.floor(Math.random() * 4) + 1;
      alert(`Order placed successfully! Your order will be delivered in approximately ${deliveryDays} day${deliveryDays > 1 ? 's' : ''}.`);

      router.push('/shop');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred while placing the order.');
    }
  };

  // Render input fields based on payment method
  const renderPaymentFields = () => {
    switch (paymentMethod) {
      case 'credit-card':
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
              />            </div>
            <div>
              <label className="block font-medium mb-1">Expiry Date</label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="MM/YY"
              />            </div>
            <div>
              <label className="block font-medium mb-1">CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="123"
              />            </div>
          </div>
        );

      case 'paypal':
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
              />            </div>
          </div>
        );
      case 'apple-pay':
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
              />            </div>
            <div>
              <label className="block font-medium mb-1">Apple Pay Email</label>
              <input
                type="email"
                value={appleEmail}
                onChange={(e) => setAppleEmail(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="john@icloud.com"
              />            </div>
          </div>
        );
      default:
        return null;
    }
  };


  const handlePaymentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value);
    // Reset all fields
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setPaypalEmail('');
    setAppleFullName('');
    setAppleEmail('');
  };


  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-[5vw] md:mx-auto p-4 bg-amber-50 mt-[20vh] md:mt-[5vh] mb-[5vh] md:mb-[5vh] rounded-lg">
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
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="apple-pay">Apple Pay</option>
        </select>
      </div>

      {/* Dynamic Payment Method Fields */}
      {renderPaymentFields()}

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Delivery Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Street Address"
            className="p-2 border rounded-md"
          />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            className="p-2 border rounded-md"
          />
          <select
            value={stateRegion}
            onChange={(e) => setStateRegion(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="">Select a State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Zip Code"
            className="p-2 border rounded-md"
          />
        </div>
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
        <div className="mt-4 space-y-2 text-right">
          <p className="text-md">Subtotal: ${(total - taxAmount).toFixed(2)}</p>
          <p className="text-md">Tax ({(taxRate * 100).toFixed(1)}%): ${taxAmount.toFixed(2)}</p>
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
