"use client";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Router } from "next/router";

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
        router.push("/home");
        return;
      }

      const user = JSON.parse(userString);

      if (!user || !user._id) {
        alert("Please log in first.");
        router.push("/home");
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

  const handleDecreaseQuantity = async (
    myItem: any,
    remove: boolean = false
  ) => {
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

  if (loading)
    return (
      <div className="bg-amber-50 mt-[20vh] md:mt-[5vh] p-5 rounded-lg">
        Loading...
      </div>
    );

  return (
    <main
      className="max-w-4xl mx-auto p-4 bg-amber-50 mt-[20vh] md:mt-[5vh] mb-[5vh] rounded-lg"
      aria-label="Shopping Cart"
    >
      {/* Checkout Section */}
      {cart.length > 0 && (
        <section
          className="flex items-center justify-end mb-4 space-x-4"
          aria-label="Checkout options"
        >
          <span id="checkout-hint">Checkout right away!</span>
          <Button
            onClick={handleCheckout}
            className="w-auto"
            aria-labelledby="checkout-hint"
          >
            Checkout
          </Button>
        </section>
      )}

      {/* Cart Items */}
      <section aria-label="Cart Items">
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
                <CardTitle tabIndex={0}>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>Price: ${item.price}</p>

                  {/* Quantity Controls */}
                  <div
                    className="flex items-center justify-between gap-4"
                    aria-label={`Quantity controls for ${item.name}`}
                  >
                    <Button
                      onClick={() => handleDecreaseQuantity(item)}
                      disabled={item.quantity === 0}
                      aria-disabled={item.quantity === 0}
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="w-12"
                    >
                      -1
                    </Button>

                    <p className="text-lg font-semibold" aria-live="polite">
                      {item.quantity}
                    </p>

                    <Button
                      onClick={() => handleIncreaseQuantity(item)}
                      disabled={item.quantity === 20}
                      aria-disabled={item.quantity === 20}
                      aria-label={`Increase quantity of ${item.name}`}
                      className="w-12"
                    >
                      +1
                    </Button>
                  </div>

                  {/* Remove Item Button */}
                  <div className="flex justify-center mt-2">
                    <Button
                      variant="destructive"
                      onClick={() => handleDecreaseQuantity(item, true)}
                      className="flex items-center gap-2"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <X size={16} /> Remove
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </section>

      {/* Confirmation Dialog */}
      {showDialog && (
        <Dialog
          open={showDialog}
          aria-labelledby="remove-dialog-title"
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle id="remove-dialog-title">Remove Item</DialogTitle>
            </DialogHeader>
            <p>Are you sure you want to remove this item from your cart?</p>
            <DialogFooter>
              <Button variant="outline" onClick={handleCancelRemove}>
                Cancel
              </Button>
              <Button onClick={handleRemoveItem}>Remove</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </main>
  );
}
