'use client';
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<any>(null);
  const router = useRouter();

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

  const handleCheckout = () => {
    router.push("/checkout"); // Redirect to checkout page
  };

  const handleIncreaseQuantity = async (myItem: any) => {

    const userString = localStorage.getItem("user");

    if (!userString) {
      alert("Please log in first.");
      return;
    }

    const user = JSON.parse(userString); // Now safely parse the user object

    if (!user || !user._id) {
      alert("Please log in first.");
      return;
    }

    const userId = user._id;
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, item: myItem }), // Sending userId and item to API
      });

      if (!response.ok) throw new Error("Failed to add item to cart");

      // Optionally, you can show a success message or update the UI
      console.log("Item Quantity Increased");
      await fetchCart();
    } catch (error: any) {
      alert(error.message);
    }

  };

  const handleDecreaseQuantity = async (myItem: any, remove: boolean = false) => {
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

    // If quantity is 1 and `complete` is false, show confirmation
    if (myItem.quantity === 1 || remove) {
      setItemToRemove(myItem);
      setShowDialog(true);
      return;
    }

    try {
      const response = await fetch("/api/cart/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, itemId: myItem.id }), // Pass `complete: true` if needed
      });

      if (!response.ok) throw new Error("Failed to decrease item quantity");

      await fetchCart();

    } catch (error: any) {
      alert(error.message);
    }
  };



  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemoveItem = async () => {
    if (!itemToRemove) return;
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
    const userString = localStorage.getItem("user");

    if (!userString) {
      alert("Please log in first.");
      return;
    }
    const user = JSON.parse(userString);
    const userId = user._id;

    await fetch(`/api/cart/remove-complete`, {
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
                      onClick={() => handleDecreaseQuantity(item)}
                      disabled={item.quantity === 0}
                      className="w-12"
                    >
                      -1
                    </Button>

                    {/* Quantity Display */}
                    <p className="text-lg font-semibold">{item.quantity}</p>

                    {/* Increase Quantity Button */}
                    <Button
                      onClick={() => handleIncreaseQuantity(item)}
                      disabled={item.quantity === 20}
                      className="w-12"
                    >
                      +1
                    </Button>
                  </div>

                  {/* Remove Item Button */}
                  <div className="flex justify-center mt-2">
                    <Button
                      variant="destructive"
                      onClick={() => {
                        console.log("Remove Item");
                        handleDecreaseQuantity(item, true)
                      }} // Pass `complete: true`
                      className="flex items-center gap-2"
                    >
                      <X size={16} /> Remove
                    </Button>
                  </div>
                </div>
              </CardContent>
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
