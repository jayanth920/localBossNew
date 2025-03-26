export const products = [
    {
        id: 1,
        name: "Organic Almond Milk",
        description: "A healthy and delicious dairy-free almond milk, perfect for vegans.",
        price: 5.99,
        image: "almond-milk.jpg",
        category: "Groceries",
        stock: 50,
        rating: 4.3,
        reviews_count: 3,
        discount: 15,
        featured: false,
        brand: "Healthy Farms",
        best_before: "2025-06-15",
        nutrition_facts: "nutrition-almond-milk.jpg",
        reviews: [
            {
                username: "SarahL",
                review_text: "Great taste, and perfect for my morning coffee!",
                date: "2024-02-10"
            },
            {
                username: "Mike22",
                review_text: "Healthy alternative to dairy, but a bit pricey.",
                date: "2024-01-25"
            },
            {
                username: "JennyC",
                review_text: "Loved it! Will definitely buy again.",
                date: "2024-02-05"
            }
        ]
    },
    {
        id: 2,
        name: "Wireless Noise-Canceling Headphones",
        description: "High-quality wireless headphones with active noise cancellation and deep bass.",
        price: 129.99,
        image: "headphones.jpg",
        category: "Electronics",
        stock: 20,
        rating: 4.7,
        reviews_count: 2,
        discount: 10,
        featured: true,
        brand: "SoundWave",
        best_before: null,  // Not applicable for electronics
        nutrition_facts: null,  // Not applicable
        reviews: [
            {
                username: "TechGeek",
                review_text: "Amazing sound quality! Battery lasts forever.",
                date: "2024-02-01"
            },
            {
                username: "MeganR",
                review_text: "Very comfortable and great noise cancellation.",
                date: "2024-01-20"
            }
        ]
    },
    {
        id: 3,
        name: "Dark Roast Coffee Beans",
        description: "100% Arabica dark roast coffee beans with rich flavor and aroma.",
        price: 15.49,
        image: "coffee-beans.jpg",
        category: "Groceries",
        stock: 35,
        rating: 4.6,
        reviews_count: 4,
        discount: 5,
        featured: true,
        brand: "Morning Brew",
        best_before: "2026-03-10",
        nutrition_facts: "nutrition-coffee.jpg",
        reviews: [
            {
                username: "CoffeeLover",
                review_text: "Bold and smooth, just the way I like it!",
                date: "2024-01-15"
            },
            {
                username: "SamB",
                review_text: "The aroma is fantastic, but a bit too strong for me.",
                date: "2024-02-08"
            },
            {
                username: "AnnaP",
                review_text: "Perfect for espresso. Highly recommend!",
                date: "2024-01-30"
            },
            {
                username: "DavidG",
                review_text: "Best coffee I've tried in a while.",
                date: "2024-02-12"
            }
        ]
    }
];
