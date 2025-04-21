"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { products } from "@/app/components/products/poducts";
import Image from "next/image";
import { shimmer, toBase64 } from "@/components/shimmer";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState([0, 150]);
  const [rating, setRating] = useState(0);
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState("lowToHigh");

  const filteredProducts = products.filter((product) => {
    return (
      (product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())) &&
      (category === "All" || product.category === category) &&
      product.price >= price[0] &&
      product.price <= price[1] &&
      product.rating >= rating
    );
  });
  
  if (sortOrder === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen mx-auto w-[80vw] md:w-[90%] mt-[20vh] md:mt-[15vh] mb-[10vh] md:mb-[5vh]">
      {/* Filters */}
      <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-center md:min-w-[600px]">
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Input
            type="text"
            placeholder="Search products..."
            className="w-full sm:w-64 bg-amber-50 text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select onValueChange={(value) => setCategory(value)} value={category}>
            <SelectTrigger className="w-full sm:w-44 bg-amber-50 text-black">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All" className="bg-amber-50">All Categories</SelectItem>
              <SelectItem value="Groceries" className="bg-amber-50">Groceries</SelectItem>
              <SelectItem value="Electronics" className="bg-amber-50">Electronics</SelectItem>
              <SelectItem value="Home & Kitchen" className="bg-amber-50">Home & Kitchen</SelectItem>
              <SelectItem value="Beauty" className="bg-amber-50">Beauty</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortOrder} onValueChange={(value) => setSortOrder(value)}>
              <SelectTrigger className="w-full sm:w-44 bg-amber-50 text-black">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lowToHigh" className="bg-amber-50">Price: Low to High</SelectItem>
                <SelectItem value="highToLow" className="bg-amber-50">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-black mb-1 bg-amber-50 min-w-[120px] text-center rounded-md">
              Price: ${price[0]} - ${price[1]}
            </span>
            <Slider
              value={price}
              onValueChange={(val) => setPrice(val)}
              min={0}
              max={150}
              step={1}
              className="w-full sm:w-40 bg-black rounded-2xl"
            />
          </div>

          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-black mb-1 bg-amber-50 min-w-[120px] text-center rounded-md">
              Min Rating: {rating}★
            </span>
            <Slider
              value={[rating]}
              onValueChange={(val) => setRating(val[0])}
              min={0}
              max={5}
              step={0.5}
              className="w-full sm:w-40 bg-black rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="cursor-pointer"
              onClick={() => setLoadingId(product.id)}
            >
              <Link href={`/shop/${product.id}`} className="block">
                <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-all bg-amber-50 h-96 max-w-xs mx-auto flex flex-col">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={220}
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                    placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(400, 200))}`} // Shimmer placeholder
                  />
                  <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
                  <p className="text-sm text-gray-600 flex-grow">{product.description}</p>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center">
                      <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                      {loadingId === product.id && <Spinner />}
                    </div>
                    <span className="text-sm text-gray-500">{product.rating} ★</span>
                  </div>
                </div>
              </Link>
            </div>
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


function ShimmerImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-48 rounded-md overflow-hidden mb-3 shimmer-wrapper">
      {!loaded && <div className="shimmer" />}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100%"
        className={`object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

const Spinner = () => (
  <div className="ml-2 w-4 h-4 border-2 border-t-transparent border-black rounded-full animate-spin" />
);