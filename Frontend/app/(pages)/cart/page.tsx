'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"; // Import Dialog components
import { useUser } from "@/app/components/context/userContext";

export default function CartPage() {
  const { user } = useUser(); // Get user info from context
  const [cart, setCart] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<any>(null); // To hold the item to be removed
  const router = useRouter();

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
        if (!userId) return; // Handle edge case where userId doesn't exist
  
        const response = await fetch(`/api/cart/${userId}`);
        if (!response.ok) throw new Error("Failed to fetch cart data");
  
        const data = await response.json();
  
        // Ensure that cart is an array before setting it
        if (data.cart.length > 0) {
          setCart(data.cart);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart:", error);
        setLoading(false);
      }
    };
  
    fetchCart();
  }, []);

  const handleCheckout = () => {
    router.push("/checkout"); // Redirect to checkout page
  };

  const handleIncreaseQuantity = async (itemId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity < 20
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (itemId: number, quantity: number) => {
    if (quantity === 1) {
      setItemToRemove(cart.find(item => item.id === itemId));
      setShowDialog(true); // Show the confirmation dialog
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === itemId && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleRemoveItem = async () => {
    if (!itemToRemove) return;

    // Remove item from cart
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);

    // Perform API call to remove item from server-side cart
    const userString = localStorage.getItem("user");

    if (!userString) {
      alert("Please log in first.");
      return;
    }
    const user = JSON.parse(userString);
    const userId = user._id;

    await fetch(`/api/cart/remove`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, itemId: itemToRemove.id }), // Send userId and itemId to API for removal
    });

    setShowDialog(false); // Close dialog after item is removed
  };

  const handleCancelRemove = () => {
    setShowDialog(false); // Close dialog without removing the item
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Checkout Button */}
      {cart.length > 0 && (
        <div className="flex items-center justify-end mb-4 space-x-4">
          <span>Checkout right away!</span>
          <Button onClick={handleCheckout} className="w-auto">
            Checkout
          </Button>
        </div>

      )}

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
            {/* Price */}
            <p>Price: ${item.price}</p>

            {/* Quantity Section */}
            <div className="flex items-center justify-between gap-4">
              {/* Decrease Quantity Button */}
              <Button
                onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                disabled={item.quantity === 0}
                className="w-12"
              >
                -1
              </Button>
              
              {/* Quantity Display */}
              <p className="text-lg font-semibold">{item.quantity}</p>
              
              {/* Increase Quantity Button */}
              <Button
                onClick={() => handleIncreaseQuantity(item.id)}
                disabled={item.quantity === 20}
                className="w-12"
              >
                +1
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          {/* You can add more action buttons here (remove from cart, etc.) */}
        </CardFooter>
      </Card>
    ))
  )}
</div>

      {/* Confirmation Dialog for Removing Item */}
      {showDialog && (
        <Dialog open={showDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Remove Item</DialogTitle>
            </DialogHeader>
            <p>Are you sure you want to remove this item from your cart?</p>
            <DialogFooter>
              <Button variant="outline" onClick={handleCancelRemove}>Cancel</Button>
              <Button onClick={handleRemoveItem}>Remove</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
