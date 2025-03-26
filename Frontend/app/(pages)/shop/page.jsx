"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { products } from "@/app/components/products/poducts";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");  // Default to 'All' instead of an empty string
  const [price, setPrice] = useState([0, 150]);
  const [rating, setRating] = useState(0);

  // Filter Products
  const filteredProducts = products.filter((product) => {
    return (
      (product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())) &&
      (category === "All" || product.category === category) &&  // Adjust this line to check for "All"
      product.price >= price[0] &&
      product.price <= price[1] &&
      product.rating >= rating
    );
  });

  return (
    <div className="flex flex-col items-center justify-start min-h-screen mx-auto w-[90%] mt-[10vh]">
      {/* Search & Filters */}
      <div className="flex items-center justify-center gap-4 w-full mb-8 min-w-[800px]">
        <Input
          type="text"
          placeholder="Search products..."
          className="w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select onValueChange={(value) => setCategory(value)} value={category}>
          <SelectTrigger className="w-44">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            <SelectItem value="Groceries">Groceries</SelectItem>
            <SelectItem value="Electronics">Electronics</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex flex-col items-center">
          <span className="text-sm">Price: ${price[0]} - ${price[1]}</span>
          <Slider
            value={price}
            onValueChange={(val) => setPrice(val)}
            min={0}
            max={150}
            step={1}
            className="w-40"
          />
        </div>

        <div className="flex flex-col items-center">
          <span className="text-sm">Min Rating: {rating}★</span>
          <Slider
            value={[rating]}
            onValueChange={(val) => setRating(val[0])}
            min={0}
            max={5}
            step={0.5}
            className="w-40"
          />
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link key={product.id} href={`/shop/${product.id}`} className="cursor-pointer">
              <div className="border p-4 rounded-lg shadow-md bg-white hover:shadow-xl transition-all">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-3" />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-500">{product.rating} ★</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="flex items-center justify-center w-full text-gray-500 text-lg min-h-[200px]">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
}
