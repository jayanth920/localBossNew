export const products = [
    {
        id: 1,
        name: "Organic Almond Milk",
        description: "A healthy and delicious dairy-free almond milk, perfect for vegans.",
        price: 5.99,
        image: "https://i.imgur.com/YBLsH0y.jpeg",
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
        image: "https://i.imgur.com/KkNetqY.jpeg",
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
        image: "https://i.imgur.com/rVSIE5T.jpeg",
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
    },
    {
        id: 4,
        name: "Portable Bluetooth Speaker",
        description: "Compact Bluetooth speaker with powerful sound and waterproof design.",
        price: 49.99,
        image: "https://i.imgur.com/rd3AKmp.jpeg",
        category: "Electronics",
        stock: 40,
        rating: 4.5,
        reviews_count: 3,
        discount: 20,
        featured: true,
        brand: "BeatBox",
        best_before: null,
        nutrition_facts: null,
        reviews: [
            {
                username: "PartyKing",
                review_text: "Small but mighty. Fills up the whole room!",
                date: "2024-03-01"
            },
            {
                username: "Nina",
                review_text: "Love the waterproof feature. Great for pool days.",
                date: "2024-02-18"
            },
            {
                username: "LeoC",
                review_text: "Battery life could be better, but sound is amazing.",
                date: "2024-02-22"
            }
        ]
    },
    {
        id: 5,
        name: "Whole Wheat Pasta",
        description: "Nutritious whole wheat pasta made from 100% durum wheat.",
        price: 2.99,
        image: "https://i.imgur.com/LCzgp5b.jpeg",
        category: "Groceries",
        stock: 75,
        rating: 4.2,
        reviews_count: 2,
        discount: 0,
        featured: false,
        brand: "GreenHarvest",
        best_before: "2025-11-30",
        nutrition_facts: "nutrition-pasta.jpg",
        reviews: [
            {
                username: "FitMama",
                review_text: "Great for meal prep and healthy dinners.",
                date: "2024-03-12"
            },
            {
                username: "TommyV",
                review_text: "Tastes great with pesto sauce!",
                date: "2024-03-08"
            }
        ]
    },
    {
        id: 6,
        name: "Smart LED Light Bulb",
        description: "Color-changing LED bulb with WiFi control and voice assistant support.",
        price: 19.99,
        image: "https://i.imgur.com/SzdY5uh.jpeg",
        category: "Electronics",
        stock: 60,
        rating: 4.4,
        reviews_count: 3,
        discount: 12,
        featured: false,
        brand: "GlowTech",
        best_before: null,
        nutrition_facts: null,
        reviews: [
            {
                username: "AlexZ",
                review_text: "Super cool! Love changing colors with my phone.",
                date: "2024-02-28"
            },
            {
                username: "SandraT",
                review_text: "Easy to set up and works well with Alexa.",
                date: "2024-03-03"
            },
            {
                username: "GizmoGuy",
                review_text: "Wish it was a bit brighter, but overall solid buy.",
                date: "2024-03-06"
            }
        ]
    },{
        id: 7,
        name: "Natural Peanut Butter",
        description: "Creamy, all-natural peanut butter with no added sugar or preservatives.",
        price: 4.49,
        image: "https://i.imgur.com/9zY8fOf.jpeg",
        category: "Groceries",
        stock: 60,
        rating: 4.5,
        reviews_count: 3,
        discount: 8,
        featured: true,
        brand: "Nutty Naturals",
        best_before: "2025-09-01",
        nutrition_facts: "nutrition-peanut-butter.jpg",
        reviews: [
            {
                username: "HealthBites",
                review_text: "So creamy and flavorful! Great for smoothies.",
                date: "2024-03-25"
            },
            {
                username: "Kyle88",
                review_text: "Love the texture and no added sugar is a plus.",
                date: "2024-04-02"
            },
            {
                username: "MomOfTwo",
                review_text: "My kids devour this with apples. Healthy and yummy!",
                date: "2024-03-30"
            }
        ]
    },
    {
        id: 8,
        name: "Smart Fitness Band",
        description: "Track your fitness, heart rate, sleep, and more with this water-resistant smart band.",
        price: 39.99,
        image: "https://i.imgur.com/x75zMaH.jpeg",
        category: "Electronics",
        stock: 45,
        rating: 4.1,
        reviews_count: 2,
        discount: 5,
        featured: false,
        brand: "FitPulse",
        best_before: null,
        nutrition_facts: null,
        reviews: [
            {
                username: "RunnerZac",
                review_text: "Accurate tracking and battery lasts a week. Love it.",
                date: "2024-02-19"
            },
            {
                username: "LisaFit",
                review_text: "Good features for the price. App could be better though.",
                date: "2024-03-01"
            }
        ]
    },
    {
        id: 9,
        name: "Herbal Green Tea Bags",
        description: "Organic herbal green tea with calming properties and a refreshing taste.",
        price: 6.29,
        image: "https://i.imgur.com/nNh182g.jpeg",
        category: "Groceries",
        stock: 100,
        rating: 4.6,
        reviews_count: 4,
        discount: 10,
        featured: true,
        brand: "ZenLeaf",
        best_before: "2026-01-15",
        nutrition_facts: "nutrition-green-tea.jpg",
        reviews: [
            {
                username: "TeaTime",
                review_text: "Best green tea I've ever had. Subtle and relaxing.",
                date: "2024-04-01"
            },
            {
                username: "WellnessMama",
                review_text: "Tastes great and helps me sleep better!",
                date: "2024-03-28"
            },
            {
                username: "ChaiGuy",
                review_text: "Love the aroma and packaging is eco-friendly.",
                date: "2024-04-03"
            },
            {
                username: "AnnaL",
                review_text: "Refreshing! I drink it daily.",
                date: "2024-03-31"
            }
        ]
    },{
        id: 10,
        name: "Aloe Vera Skin Gel",
        description: "Soothing aloe vera gel for skin hydration, sunburn relief, and everyday care.",
        price: 7.99,
        image: "https://i.imgur.com/KgJ3jO1.jpeg",
        category: "Beauty",
        stock: 75,
        rating: 4.4,
        reviews_count: 3,
        discount: 12,
        featured: false,
        brand: "NatureGlow",
        best_before: "2025-12-20",
        nutrition_facts: null,
        reviews: [
            {
                username: "SkincareQueen",
                review_text: "Super soothing and lightweight. I use it daily after shower.",
                date: "2024-03-18"
            },
            {
                username: "BenjiT",
                review_text: "Helped reduce my acne redness. Highly recommend.",
                date: "2024-03-22"
            },
            {
                username: "LexiSkin",
                review_text: "Feels great on sunburn. Instant relief!",
                date: "2024-03-25"
            }
        ]
    },
    {
        id: 11,
        name: "Bluetooth Mini Speaker",
        description: "Compact and portable Bluetooth speaker with powerful sound and 10-hour battery.",
        price: 24.99,
        image: "https://i.imgur.com/7z0KeVZ.jpeg",
        category: "Electronics",
        stock: 30,
        rating: 4.2,
        reviews_count: 2,
        discount: 10,
        featured: true,
        brand: "BoomBox",
        best_before: null,
        nutrition_facts: null,
        reviews: [
            {
                username: "JakeVibes",
                review_text: "This tiny thing is loud! Great for travel.",
                date: "2024-02-11"
            },
            {
                username: "PartyModeOn",
                review_text: "Battery life is solid and connects fast.",
                date: "2024-02-15"
            }
        ]
    },
    {
        id: 12,
        name: "Whole Grain Oat Cereal",
        description: "Nutritious breakfast cereal made from 100% whole grain oats and lightly sweetened.",
        price: 3.99,
        image: "https://i.imgur.com/uRreFYT.jpeg",
        category: "Groceries",
        stock: 80,
        rating: 4.5,
        reviews_count: 4,
        discount: 6,
        featured: false,
        brand: "Morning Harvest",
        best_before: "2025-10-10",
        nutrition_facts: "nutrition-oat-cereal.jpg",
        reviews: [
            {
                username: "HealthyEater",
                review_text: "Great way to start the day. Not too sweet.",
                date: "2024-01-29"
            },
            {
                username: "KidApproved",
                review_text: "My kids love it with some banana slices!",
                date: "2024-02-03"
            },
            {
                username: "AlexW",
                review_text: "Very filling and has a nice crunch.",
                date: "2024-02-08"
            },
            {
                username: "GreenKitchen",
                review_text: "Affordable and healthy, will buy again.",
                date: "2024-01-25"
            }
        ]
    },{
        id: 13,
        name: "Reusable Water Bottle - 1L",
        description: "Eco-friendly BPA-free water bottle with time markers to track hydration.",
        price: 12.49,
        image: "https://i.imgur.com/lEGcCxd.jpeg",
        category: "Home & Kitchen",
        stock: 60,
        rating: 4.6,
        reviews_count: 3,
        discount: 8,
        featured: true,
        brand: "HydrateMate",
        best_before: null,
        nutrition_facts: null,
        reviews: [
            {
                username: "WaterWarrior",
                review_text: "Love the time markers—keeps me on track all day.",
                date: "2024-03-05"
            },
            {
                username: "EcoConscious",
                review_text: "No leaks and looks stylish. Great for the gym!",
                date: "2024-03-10"
            },
            {
                username: "AliFit",
                review_text: "Solid quality. Would get another in a different color.",
                date: "2024-03-13"
            }
        ]
    },
    {
        id: 14,
        name: "Sweet Potato Chips",
        description: "Crunchy, oven-baked sweet potato chips with sea salt. Gluten-free and vegan.",
        price: 2.99,
        image: "https://i.imgur.com/3XrkMFs.jpeg",
        category: "Groceries",
        stock: 90,
        rating: 4.1,
        reviews_count: 4,
        discount: 5,
        featured: false,
        brand: "SnackWise",
        best_before: "2025-09-30",
        nutrition_facts: "nutrition-sweet-potato-chips.jpg",
        reviews: [
            {
                username: "Snacker23",
                review_text: "Great texture and not too oily. Love it!",
                date: "2024-02-14"
            },
            {
                username: "VeganLife",
                review_text: "My favorite chips, hands down.",
                date: "2024-02-20"
            },
            {
                username: "CasualMuncher",
                review_text: "Decent flavor but I wish the bag was bigger.",
                date: "2024-02-25"
            },
            {
                username: "HealthyDad",
                review_text: "Great lunchbox addition for my kids.",
                date: "2024-03-02"
            }
        ]
    },
    {
        id: 15,
        name: "Portable Laptop Stand",
        description: "Adjustable aluminum stand for laptops and tablets. Ergonomic and foldable.",
        price: 18.99,
        image: "https://i.imgur.com/Fvf6mMC.jpeg",
        category: "Electronics",
        stock: 45,
        rating: 4.8,
        reviews_count: 3,
        discount: 14,
        featured: true,
        brand: "ErgoLift",
        best_before: null,
        nutrition_facts: null,
        reviews: [
            {
                username: "DevJake",
                review_text: "Using this daily. Less neck strain, super compact.",
                date: "2024-03-18"
            },
            {
                username: "WorkFromHome",
                review_text: "Makes my setup feel pro. Sturdy and sleek.",
                date: "2024-03-20"
            },
            {
                username: "NomadCoder",
                review_text: "Fits in my backpack. Total game changer!",
                date: "2024-03-21"
            }
        ]
    },{
        id: 16,
        name: "Matcha Green Tea Powder",
        description: "Premium culinary grade matcha, perfect for lattes, smoothies, and baking.",
        price: 9.99,
        image: "https://i.imgur.com/Mi34rpI.jpeg",
        category: "Groceries",
        stock: 80,
        rating: 4.5,
        reviews_count: 5,
        discount: 10,
        featured: false,
        brand: "ZenLeaf",
        best_before: "2026-01-01",
        nutrition_facts: "nutrition-matcha.jpg",
        reviews: [
            {
                username: "TeaFanatic",
                review_text: "Smooth and vibrant. I drink it every morning!",
                date: "2024-02-10"
            },
            {
                username: "BakingQueen",
                review_text: "Great in cookies and cakes. A little goes a long way.",
                date: "2024-02-18"
            },
            {
                username: "KyleT",
                review_text: "Good quality, but package could be resealable.",
                date: "2024-03-01"
            },
            {
                username: "VeganPower",
                review_text: "Super energizing. Better than coffee for me.",
                date: "2024-03-03"
            },
            {
                username: "HealthyHabit",
                review_text: "Affordable and tasty. Definitely reordering.",
                date: "2024-03-05"
            }
        ]
    },
    {
        id: 17,
        name: "Smart LED Desk Lamp",
        description: "Dimmable desk lamp with touch controls and USB charging port. Adjustable arm.",
        price: 24.99,
        image: "https://i.imgur.com/HyuCD0Q.jpeg",
        category: "Electronics",
        stock: 35,
        rating: 4.4,
        reviews_count: 3,
        discount: 12,
        featured: true,
        brand: "GlowTech",
        best_before: null,
        nutrition_facts: null,
        reviews: [
            {
                username: "StudyVibes",
                review_text: "Perfect lighting for late-night study sessions.",
                date: "2024-03-10"
            },
            {
                username: "OfficeLife",
                review_text: "Clean design. Love the USB charging port.",
                date: "2024-03-15"
            },
            {
                username: "MinimalMatt",
                review_text: "Looks great on my setup and feels sturdy.",
                date: "2024-03-18"
            }
        ]
    },
    {
        id: 18,
        name: "Natural All-Purpose Cleaner",
        description: "Plant-based cleaning spray for kitchen, bathroom, and surfaces. Lemon scent.",
        price: 6.49,
        image: "https://i.imgur.com/Gn21RTk.jpeg",
        category: "Home & Kitchen",
        stock: 100,
        rating: 4.2,
        reviews_count: 4,
        discount: 7,
        featured: false,
        brand: "PureSpray",
        best_before: "2026-12-01",
        nutrition_facts: null,
        reviews: [
            {
                username: "CleanQueen",
                review_text: "Smells amazing and works surprisingly well!",
                date: "2024-02-22"
            },
            {
                username: "EcoNerd",
                review_text: "Glad to ditch chemicals. Works for most messes.",
                date: "2024-03-02"
            },
            {
                username: "JasonH",
                review_text: "Good for countertops. Struggles with grease.",
                date: "2024-03-09"
            },
            {
                username: "GreenMom",
                review_text: "Love this for the kitchen. Non-toxic and safe.",
                date: "2024-03-11"
            }
        ]
    },{
        id: 19,
        name: "Extra Virgin Olive Oil",
        description: "Cold-pressed extra virgin olive oil, imported from Italy. Great for cooking and dressings.",
        price: 11.99,
        image: "https://i.imgur.com/fLUUoH4.jpeg",
        category: "Groceries",
        stock: 60,
        rating: 4.6,
        reviews_count: 6,
        discount: 8,
        featured: true,
        brand: "Oliva Italia",
        best_before: "2026-08-01",
        nutrition_facts: "nutrition-olive-oil.jpg",
        reviews: [
            {
                username: "ChefTony",
                review_text: "Delicious and authentic. I use it every day.",
                date: "2024-03-12"
            },
            {
                username: "MayaS",
                review_text: "Perfect for salads and dipping bread.",
                date: "2024-03-14"
            },
            {
                username: "HealthGuru",
                review_text: "Smooth, rich flavor. Worth the price.",
                date: "2024-03-17"
            },
            {
                username: "TomC",
                review_text: "Great for cooking. Will buy again.",
                date: "2024-03-20"
            },
            {
                username: "LenaF",
                review_text: "Really good quality. Bottle is cute too.",
                date: "2024-03-22"
            },
            {
                username: "GarlicGirl",
                review_text: "Pairs amazing with garlic bread!",
                date: "2024-03-25"
            }
        ]
    },
    {
        id: 20,
        name: "Rechargeable Handheld Vacuum",
        description: "Portable cordless vacuum for quick cleanups. Great for car and home use.",
        price: 39.99,
        image: "https://i.imgur.com/xNkKAUF.jpeg",
        category: "Home & Kitchen",
        stock: 25,
        rating: 4.3,
        reviews_count: 4,
        discount: 15,
        featured: false,
        brand: "DustAway",
        best_before: null,
        nutrition_facts: null,
        reviews: [
            {
                username: "BusyDad",
                review_text: "Super handy for crumbs and pet hair.",
                date: "2024-03-08"
            },
            {
                username: "EllaG",
                review_text: "Compact, powerful, and easy to clean.",
                date: "2024-03-10"
            },
            {
                username: "TommyZ",
                review_text: "Battery lasts long enough for my car.",
                date: "2024-03-12"
            },
            {
                username: "CleanObsessed",
                review_text: "Great suction for the size.",
                date: "2024-03-15"
            }
        ]
    },
    {
        id: 21,
        name: "Organic Quinoa",
        description: "Protein-rich organic white quinoa, ideal for salads, bowls, and healthy meals.",
        price: 7.49,
        image: "https://i.imgur.com/9Zb3vTP.jpeg",
        category: "Groceries",
        stock: 70,
        rating: 4.4,
        reviews_count: 5,
        discount: 10,
        featured: true,
        brand: "Nature’s Choice",
        best_before: "2025-11-30",
        nutrition_facts: "nutrition-quinoa.jpg",
        reviews: [
            {
                username: "HealthNerd",
                review_text: "Fluffy and cooks perfectly every time.",
                date: "2024-02-28"
            },
            {
                username: "MealPrepQueen",
                review_text: "Staple in my weekly meal preps!",
                date: "2024-03-02"
            },
            {
                username: "AlexG",
                review_text: "High quality, love that it's organic.",
                date: "2024-03-05"
            },
            {
                username: "ZoeZ",
                review_text: "Better than store brands. Great value.",
                date: "2024-03-09"
            },
            {
                username: "ChrisW",
                review_text: "Tastes great, feels super clean.",
                date: "2024-03-11"
            }
        ]
    },{
        id: 22,
        name: "Smart LED Light Bulb (4-Pack)",
        description: "Wi-Fi-enabled color-changing LED bulbs compatible with Alexa and Google Assistant.",
        price: 24.99,
        image: "https://i.imgur.com/k4haSfU.jpeg",
        category: "Electronics",
        stock: 40,
        rating: 4.5,
        reviews_count: 7,
        discount: 20,
        featured: true,
        brand: "BrightLite",
        best_before: null,
        nutrition_facts: null,
        reviews: [
            {
                username: "HomeTechie",
                review_text: "Fun colors and easy to set up. Works great with Alexa!",
                date: "2024-03-18"
            },
            {
                username: "RachelM",
                review_text: "Love the ambience these add to my room.",
                date: "2024-03-20"
            },
            {
                username: "KyleV",
                review_text: "Affordable smart lighting that just works.",
                date: "2024-03-22"
            }
        ]
    },
    {
        id: 23,
        name: "Whole Grain Brown Rice",
        description: "Long-grain, non-GMO brown rice perfect for healthy meals and side dishes.",
        price: 4.89,
        image: "https://i.imgur.com/buJVH2V.jpeg",
        category: "Groceries",
        stock: 80,
        rating: 4.2,
        reviews_count: 4,
        discount: 5,
        featured: false,
        brand: "GrainRoots",
        best_before: "2025-12-31",
        nutrition_facts: "nutrition-brown-rice.jpg",
        reviews: [
            {
                username: "HealthyEats",
                review_text: "Cooks up fluffy with great texture.",
                date: "2024-02-27"
            },
            {
                username: "SamirK",
                review_text: "Staple in our household. Great value.",
                date: "2024-03-03"
            }
        ]
    },
    {
        id: 24,
        name: "Ceramic Non-Stick Frying Pan",
        description: "Durable non-stick ceramic pan with a heat-resistant handle. Ideal for everyday cooking.",
        price: 18.99,
        image: "https://i.imgur.com/xkdU3ff.jpeg",
        category: "Home & Kitchen",
        stock: 30,
        rating: 4.4,
        reviews_count: 5,
        discount: 12,
        featured: true,
        brand: "ChefCraft",
        best_before: null,
        nutrition_facts: null,
        reviews: [
            {
                username: "CookWithMe",
                review_text: "Perfect eggs every morning. Super non-stick.",
                date: "2024-03-01"
            },
            {
                username: "LenaJ",
                review_text: "Heats evenly and cleans easily.",
                date: "2024-03-04"
            },
            {
                username: "GordonFan",
                review_text: "Not bad for the price. Very light though.",
                date: "2024-03-06"
            }
        ]
    },{
        id: 25,
        name: "Electric Kettle with Auto Shut-Off",
        description: "1.7L stainless steel electric kettle with fast boiling and safety shut-off feature.",
        price: 27.99,
        image: "https://i.imgur.com/e5TgO4u.jpeg",
        category: "Home & Kitchen",
        stock: 25,
        rating: 4.6,
        reviews_count: 6,
        discount: 15,
        featured: true,
        brand: "BrewMate",
        best_before: null,
        nutrition_facts: null,
        reviews: [
            {
                username: "TeaTime",
                review_text: "Boils water super fast. Great design too!",
                date: "2024-03-10"
            },
            {
                username: "ArjunV",
                review_text: "Perfect for my dorm room. No complaints.",
                date: "2024-03-12"
            }
        ]
    },
    {
        id: 26,
        name: "Extra Virgin Olive Oil - 1L",
        description: "Cold-pressed, extra virgin olive oil perfect for salads, cooking, and drizzling.",
        price: 9.49,
        image: "https://i.imgur.com/Vjok8sS.jpeg",
        category: "Groceries",
        stock: 60,
        rating: 4.3,
        reviews_count: 4,
        discount: 10,
        featured: false,
        brand: "Mediterrano",
        best_before: "2025-09-01",
        nutrition_facts: "nutrition-olive-oil.jpg",
        reviews: [
            {
                username: "FoodieFren",
                review_text: "Very smooth and rich flavor. Love it on salads.",
                date: "2024-03-08"
            },
            {
                username: "VinnyP",
                review_text: "Good value for cold-pressed oil.",
                date: "2024-03-15"
            }
        ]
    },
    {
        id: 27,
        name: "Bluetooth Shower Speaker",
        description: "Waterproof Bluetooth speaker with strong suction cup and built-in mic for calls.",
        price: 17.95,
        image: "https://i.imgur.com/qYs5T8j.jpeg",
        category: "Electronics",
        stock: 45,
        rating: 4.4,
        reviews_count: 5,
        discount: 8,
        featured: false,
        brand: "AquaBeats",
        best_before: null,
        nutrition_facts: null,
        reviews: [
            {
                username: "ShowerJams",
                review_text: "Sticks well and sounds surprisingly good!",
                date: "2024-03-05"
            },
            {
                username: "LexiQ",
                review_text: "Battery lasts a while. Great for podcasts too.",
                date: "2024-03-07"
            }
        ]
    },{
        id: 28,
        name: "Reusable Glass Food Storage Containers",
        description: "Set of 5 airtight, microwave-safe glass containers for meal prep and leftovers.",
        price: 24.99,
        image: "https://i.imgur.com/cxfEmyj.jpeg",
        category: "Home & Kitchen",
        stock: 40,
        rating: 4.5,
        reviews_count: 6,
        discount: 12,
        featured: true,
        brand: "EcoWare",
        best_before: null,
        nutrition_facts: null,
        reviews: [
            {
                username: "MealPrepQueen",
                review_text: "Perfect sizes and they stack well in the fridge.",
                date: "2024-03-20"
            },
            {
                username: "RaviC",
                review_text: "No leaks. Solid build quality.",
                date: "2024-03-22"
            }
        ]
    },
    {
        id: 29,
        name: "Organic Quinoa - 2lb Bag",
        description: "Gluten-free, protein-rich organic quinoa, great for salads, bowls, and healthy meals.",
        price: 8.75,
        image: "https://i.imgur.com/X4w8vbp.jpeg",
        category: "Groceries",
        stock: 70,
        rating: 4.2,
        reviews_count: 4,
        discount: 5,
        featured: false,
        brand: "Nature's Delight",
        best_before: "2026-01-05",
        nutrition_facts: "nutrition-quinoa.jpg",
        reviews: [
            {
                username: "HealthyAmy",
                review_text: "Cooks fast and tastes fresh. Good value.",
                date: "2024-02-27"
            },
            {
                username: "JohnK",
                review_text: "Nice texture. Makes a great base for bowls.",
                date: "2024-03-01"
            }
        ]
    },
    {
        id: 30,
        name: "LED Motion Sensor Night Lights (Pack of 3)",
        description: "Battery-powered, energy-efficient LED night lights with motion detection for hallways, bathrooms, and stairs.",
        price: 14.50,
        image: "https://i.imgur.com/ZeExuyQ.jpeg",
        category: "Home & Kitchen",
        stock: 55,
        rating: 4.6,
        reviews_count: 7,
        discount: 10,
        featured: true,
        brand: "BrightWay",
        best_before: null,
        nutrition_facts: null,
        reviews: [
            {
                username: "NightOwl",
                review_text: "Super handy at night. No more stubbing toes!",
                date: "2024-03-18"
            },
            {
                username: "Mari88",
                review_text: "Sensors work well and batteries last long.",
                date: "2024-03-21"
            }
        ]
    }
];
