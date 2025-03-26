'use client';
import { products } from "@/app/components/products/poducts";
import { notFound } from "next/navigation";
import { use, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === parseInt(id));

  const [isItemInCart, setIsItemInCart] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState<any>(product?.reviews || []);



  // Handle Add to Cart
  const handleAddToCart = async () => {
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

    const item = {
      id: product?.id,
      name: product?.name,
      price: product?.price,
      quantity: 1, // Default quantity when adding an item to cart
      image: product?.image,
    };

    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, item }), // Sending userId and item to API
      });

      if (!response.ok) throw new Error("Failed to add item to cart");

      // Optionally, you can show a success message or update the UI
      alert("Item added to cart!");
      setIsItemInCart(true)
    } catch (error: any) {
      alert(error.message);
    }
  };

  const checkIfItemInCart = async () => {
    const userString = localStorage.getItem("user");

    if (!userString) {
      return;
    }

    const user = JSON.parse(userString);

    if (!user || !user._id) {
      return;
    }

    const response = await fetch("/api/cart/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: user._id, itemId: product?.id }), // Sending userId and itemId to API
    });

    const data = await response.json();
    console.log(data);
    setIsItemInCart(data.isItemInCart); // Update state based on the API response
  };


  // Check if the item is already in the cart
  useEffect(() => {

    checkIfItemInCart();
  }, [handleAddToCart]);
  

  const handleAddReview = () => {
    if (!reviewText.trim()) return;

    const newReview = {
      username: "GuestUser", // Placeholder until login is implemented
      review_text: reviewText,
      date: new Date().toISOString().split("T")[0], // Format date as YYYY-MM-DD
    };

    setReviews([newReview, ...reviews]);
    setReviewText(""); // Clear input after submission
  };

  if (!product) return notFound(); // Handle 404 if product doesn't exist

  return (
    <div className="flex flex-col items-center min-h-screen mx-auto w-[80%] mt-[10vh]">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow-md"
        />

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold mt-4">${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500 mt-1">Rating: {product.rating} ★</p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Button className="bg-blue-500 text-white px-4 py-2 rounded-md">Buy Now</Button>
            <Button
              className={`bg-green-500 text-white px-4 py-2 rounded-md ${isItemInCart ? 'bg-gray-500 cursor-not-allowed' : ''}`} // Apply styles when item is in cart
              onClick={handleAddToCart}
              disabled={isItemInCart} // Disable button if item is in cart
            >
              {isItemInCart ? "Item in Cart" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="w-full mt-10">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>

        {/* Add Review */}
        <div className="mb-6">
          <Textarea
            placeholder="Write a review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <Button
            onClick={handleAddReview}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit Review
          </Button>
        </div>

        {/* Display Reviews */}
        <div className="space-y-4">
          {reviews.length > 0 ? (
            reviews.map((review: any, index: any) => (
              <div key={index} className="border p-4 rounded-lg shadow-md bg-gray-100">
                <p className="text-sm text-gray-500">{review.date}</p>
                <p className="text-gray-700">{review.review_text}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
