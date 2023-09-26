const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { User, Category, Product } = require('../models');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const seedData = async () => {
  try {
    await Category.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});

    const adminUser = await User.create({
      username: 'admin1',
      email: 'admin@admin.com',
      role: 'admin',
      password: await bcrypt.hash('admin123', 10),
    });

    const customerUser = await User.create({
      username: 'customer1',
      email: 'customer@customer.com',
      role: 'customer',
      password: await bcrypt.hash('customer123', 10),
    });

    const categoryNames = [
      'Toys',
      'Food and Treats',
      'Grooming',
      'Bedding',
      'Apparel',
    ];

    const createdCategories = await Category.insertMany(
      categoryNames.map((name) => ({ name }))
    );
    if (createdCategories.length !== categoryNames.length) {
      throw new Error('Some categories were not inserted successfully.');
    }

    const s3BaseUrl = 'https://ecomadmin1bucket.s3.us-west-1.amazonaws.com/';

    // Use async/await to query the created categories
    const categories = await Category.find();

    // Create products with correct category references
    const products = [
      {
        category: categories.find((category) => category.name === 'Toys')._id,
        title: 'Interactive Chew Toy',
        description: 'Durable toy for interactive play and chewing.',
        description2: `The Interactive Chew Toy is designed to provide endless hours of fun and entertainment for your furry friend. Crafted from high-quality, non-toxic materials, this toy is built to withstand even the most enthusiastic chewers.

            Features:
            - Interactive Design: Keep your pet engaged and mentally stimulated with this interactive toy.
            - Durable Construction: Made from tough, chew-resistant materials to ensure long-lasting use.
            - Dental Health: The textured surface helps clean your pet's teeth and gums.
            - Versatile Play: Perfect for fetch, tug-of-war, and solo play.
            
            Whether your pet is a playful pup or a seasoned chewer, this toy is sure to become their new favorite. Treat your furry companion to hours of entertainment and exercise with the Interactive Chew Toy.`,
        image: s3BaseUrl + 'Interactive-chew-toy.png',
        createdBy: adminUser._id,
        price: 12.99,
      },
      {
    category: categories[1],
    title: 'Grain-Free Dog Treats',
    description: 'Delicious treats made with natural ingredients.',
    description2: `Our Grain-Free Dog Treats are made with love and care, using only the finest natural ingredients. These treats are perfect for dogs with dietary sensitivities 
    or for pet owners who want to provide the best nutrition for their furry friends.

    Features:
    - Grain-Free: Ideal for dogs with grain allergies or sensitivities.
    - High-Quality Ingredients: We use premium ingredients to ensure the health and well-being of your pet.
    - Delicious Taste: Your dog will love the mouthwatering flavors of these treats.
    - Nutrient-Rich: Packed with essential nutrients to support your dog's overall health.

    Treat your dog to our Grain-Free Dog Treats and watch their tail wag with joy. These treats are perfect for training, rewarding, or simply showing your pet some extra love.`,
    image: s3BaseUrl + 'grain-free-treat.jpg',
    createdBy: adminUser._id,
    price: 9.99, // Suggested price in dollars
  },
  {
    category: categories[2],
    title: 'Self-Cleaning Slicker Brush',
    description: 'Gentle brush that removes tangles and loose fur.',
    description2: `Introducing our Self-Cleaning Slicker Brush, the perfect tool for keeping your pet's coat in tip-top condition. This gentle yet effective brush is designed to remove tangles, mats, and loose fur without causing any discomfort to your furry friend.

          Features:
          - Self-Cleaning Mechanism: Easily remove collected fur with the press of a button.
          - Gentle on Skin: Soft, fine bristles prevent scratching and irritation.
          - Ergonomic Design: Comfortable grip for easy grooming sessions.
          - Suitable for All Coats: Ideal for both long and short-haired pets.

          Regular grooming with our Self-Cleaning Slicker Brush will leave your pet's coat looking shiny, healthy, and free from knots. Make grooming a breeze with this essential tool.`,
    image: s3BaseUrl + 'self-cleaning-brush.jpg',
    createdBy: adminUser._id,
    price: 14.99, // Suggested price in dollars
  },
  {
    category: categories[3],
    title: 'Orthopedic Dog Bed',
    description: 'Premium bed for comfort and joint support.',
    description2: `Give your beloved pet the gift of ultimate comfort with our Orthopedic Dog Bed. This premium bed is specially designed to provide superior support and relaxation for dogs of all sizes, ages, and breeds.

        Features:
        - Orthopedic Support: High-density foam to relieve joint and muscle pain.
        - Plush Comfort: Luxuriously soft cover for a cozy sleeping experience.
        - Easy to Clean: Removable and machine-washable cover for convenience.
        - Non-Slip Bottom: Ensures the bed stays in place, even during playful moments.

        Your furry friend deserves a good night's sleep and a cozy spot to rest during the day. The Orthopedic Dog Bed is the perfect solution for pets with arthritis, joint issues, or those who simply love to lounge in comfort.`,
    image: s3BaseUrl + 'orthopedic-dog-bed.jpg',
    createdBy: adminUser._id,
    price: 49.99, // Suggested price in dollars
  },
  {
    category: categories[4],
    title: 'Waterproof Dog Raincoat',
    description: 'Protective raincoat for walks in wet weather.',
    description2: `Don't let rainy days dampen your pet's spirits. Our Waterproof Dog Raincoat is designed to keep your furry friend dry and comfortable during outdoor adventures, whether it's a walk in the park or a hike in the woods.

Features:
- Waterproof and Windproof: Protects against rain, wind, and cold weather.
- Adjustable Fit: Velcro straps for a snug and customizable fit.
- Reflective Strips: Enhance visibility during low-light conditions.
- Durable Material: Built to withstand rough play and outdoor activities.

With our Waterproof Dog Raincoat, you can enjoy outdoor excursions with your pet, rain or shine. Keep your furry companion warm, dry, and ready for any weather.`,
    image: s3BaseUrl + 'Waterproof Dog Raincoat.jpg',
    createdBy: adminUser._id,
    price: 19.99, // Suggested price in dollars
  },
  {
    category: categories[0],
    title: 'Fetch Ball Set',
    description: 'Colorful balls for a game of fetch in the park.',
    description2: `Get ready for endless hours of fetch and fun with our Fetch Ball Set. This set includes a variety of colorful, durable balls that are perfect for interactive play with your canine companion.

Features:
- Variety Pack: Different sizes and textures for added excitement.
- Bright Colors: Easy to spot and retrieve during outdoor play.
- Non-Toxic Materials: Safe for your pet to chew and play with.
- Suitable for All Breeds: Ideal for small to large dogs.

Whether you're playing in the park or your backyard, our Fetch Ball Set is sure to bring joy and exercise to your furry friend's day. Keep your pet active, happy, and entertained with these vibrant balls.`,
    image: s3BaseUrl + 'Fetch Ball Set.jpg',
    createdBy: adminUser._id,
    price: 7.99, // Suggested price in dollars
  },
  {
    category: categories[1],
    title: 'Natural Dog Biscuits',
    description: 'Wholesome biscuits made from real ingredients.',
    description2: `Treat your dog to the goodness of our Natural Dog Biscuits. These wholesome biscuits are made with real, high-quality ingredients and are free from artificial additives, making them the perfect choice for health-conscious pet owners.

Features:
- Real Ingredients: Made with natural, human-grade ingredients.
- Crunchy Texture: Helps maintain dental health by reducing plaque and tartar.
- No Artificial Preservatives: A guilt-free treat for your furry friend.
- Irresistible Flavor: Your dog will love the delicious taste of these biscuits.

Our Natural Dog Biscuits are not only a tasty treat but also a nutritious one. Reward your pet with these delicious biscuits, and watch them wag their tail with delight.`,
    image: s3BaseUrl + 'Natural Dog Biscuits.jpeg',
    createdBy: adminUser._id,
    price: 11.99, // Suggested price in dollars
  },
  {
    category: categories[2],
    title: 'Dog Shampoo',
    description: 'Gentle shampoo that keeps your dog\'s coat clean and shiny.',
    description2: `Give your furry friend the spa treatment they deserve with our Gentle Dog Shampoo. This specially formulated shampoo is designed to cleanse, nourish, and maintain your dog's coat, leaving it soft, shiny, and smelling fresh.

Features:
- Natural Ingredients: Free from harsh chemicals and safe for sensitive skin.
- Lathers Easily: Provides a rich, foamy lather for thorough cleaning.
- Long-Lasting Scent: Enjoy the pleasant and long-lasting fragrance.
- Suitable for All Breeds: Ideal for dogs of all coat types.

Pamper your pet with the goodness of our Dog Shampoo and make bath time a pleasant experience for both you and your furry companion. Keep their coat clean, healthy, and irresistibly soft.`,
    image: s3BaseUrl + 'Dog Shampoo.jpeg',
    createdBy: adminUser._id,
    price: 8.99, // Suggested price in dollars
  },
  {
    category: categories[3],
    title: 'Cozy Dog Blanket',
    description: 'Soft blanket to keep your furry friend warm and snug.',
    description2: `Wrap your dog in warmth and comfort with our Cozy Dog Blanket. Made from ultra-soft materials, this blanket is perfect for snuggling, lounging, or keeping your pet warm during chilly nights.

Features:
- Super Soft: Luxuriously soft and gentle on your pet's skin.
- Lightweight and Warm: Provides just the right amount of insulation.
- Easy Care: Machine-washable for hassle-free cleaning.
- Versatile Use: Ideal for home, crate, or car.

Give your furry friend a cozy retreat with our Cozy Dog Blanket. Whether they're lounging on the couch or snuggled in their crate, this blanket ensures your pet stays warm and comfortable.`,
    image: s3BaseUrl + 'Cozy Dog Blanket.png',
    createdBy: adminUser._id,
    price: 16.99, // Suggested price in dollars
  },
  {
    category: categories[4],
    title: 'Dog Sunglasses',
    description: 'Stylish sunglasses to protect your dog\'s eyes from the sun.',
    description2: `Elevate your dog's style and protect their eyes from harmful UV rays with our Dog Sunglasses. These fashionable sunglasses are not only a statement accessory but also provide essential eye protection for your pet.

Features:
- UV Protection: Shields your dog's eyes from harmful sun rays.
- Stylish Design: Choose from a variety of trendy frame colors.
- Adjustable Strap: Ensures a secure and comfortable fit.
- Lightweight and Durable: Made for all-day wear.

Keep your dog's eyes safe and make them the coolest pet on the block with our Dog Sunglasses. Whether you're going for a walk or enjoying a sunny day outdoors, these shades add a touch of style and protection.`,
    image: s3BaseUrl + 'Dog Sunglasses.png',
    createdBy: adminUser._id,
    price: 14.99, // Suggested price in dollars
  },
  {
    category: categories[0],
    title: 'Squeaky Plush Toy Set',
    description: 'Plush toys with squeakers for hours of fun.',
    description2: `Entertain your furry friend with our Squeaky Plush Toy Set, designed for endless hours of play and enjoyment. This set includes a variety of adorable plush toys that are sure to keep your pet engaged and excited.

Features:
- Squeaky Fun: Toys include built-in squeakers for added excitement.
- Soft and Plush: Made from premium, soft materials for cuddling and chewing.
- Variety Pack: Multiple shapes and sizes for versatile play.
- Durable Construction: Designed to withstand rough play.

Treat your pet to a world of squeaky fun with our Squeaky Plush Toy Set. Whether it's a game of fetch or a cuddle session, these toys are the perfect companions for your furry buddy.`,
    image: s3BaseUrl + 'Squeaky Plush Toy Set.jpg',
    createdBy: adminUser._id,
    price: 9.99, // Suggested price in dollars
  },
  {
    category: categories[1],
    title: 'Organic Dog Food',
    description: 'Organic and nutritious dog food for a balanced diet.',
    description2: `Nourish your dog with the best with our Organic Dog Food. Made from high-quality, organic ingredients, this dog food provides essential nutrients for your pet's overall health and well-being.

Features:
- Organic Ingredients: Free from artificial additives and preservatives.
- Balanced Nutrition: Formulated to meet your dog's dietary needs.
- Improved Digestion: Easily digestible ingredients for optimal health.
- Suitable for All Breeds: Ideal for dogs of all sizes and ages.

Give your dog the gift of delicious, organic meals that promote vitality and longevity. With our Organic Dog Food, you can be sure you're providing the best nutrition for your furry family member.`,
    image: s3BaseUrl + 'Organic Dog Food.png',
    createdBy: adminUser._id,
    price: 29.99, // Suggested price in dollars
  },
  {
    category: categories[2],
    title: 'Dog Nail Clippers',
    description: 'Safe clippers for trimming your dog\'s nails.',
    description2: `Keep your pet's nails in perfect shape with our Dog Nail Clippers. Designed for safety and ease of use, these clippers make nail trimming a stress-free experience for both you and your furry companion.

Features:
- Sharp Blades: Ensure precise and quick nail trimming.
- Safety Guard: Prevents overcutting and accidental injury.
- Ergonomic Handle: Provides a comfortable grip for controlled cutting.
- Suitable for All Sizes: Ideal for dogs of varying nail thickness.

Maintain your dog's paw health with our Dog Nail Clippers. Regular nail trimming is essential for your pet's comfort and well-being, and our clippers make it a breeze.`,
    image: s3BaseUrl + 'Dog Nail Clippers.png',
    createdBy: adminUser._id,
    price: 6.99, // Suggested price in dollars
  },
  {
    category: categories[3],
    title: 'Elevated Dog Cot',
    description: 'Elevated cot for comfortable rest indoors or outdoors.',
    description2: `Give your dog a comfortable and elevated sleeping space with our Elevated Dog Cot. This cot provides the perfect spot for your pet to relax, whether indoors or outdoors, and offers multiple benefits for their health and comfort.

Features:
- Elevated Design: Keeps your dog off the ground for better air circulation.
- Durable and Sturdy: Designed to withstand outdoor elements.
- Easy Assembly: Simple setup with no tools required.
- Versatile Use: Suitable for home, camping, or travel.

Invest in your pet's comfort and well-being with`,
        image: s3BaseUrl + 'Elevated Dog Cot.jpg',
        createdBy: adminUser._id,
        price: 39.99 // Suggested price in dollars
      },
      {
        category: categories[4],
        title: 'Dog Bowtie Collar',
        description: 'Stylish collar with a detachable bowtie accessory.',
        description2: `Make your dog the most dapper in town with our Dog Bowtie Collar. This stylish collar features a detachable bowtie accessory, perfect for special occasions or simply adding a touch of elegance to your pet's everyday look.
    
    Features:
    - Adjustable Fit: Ensures a comfortable and secure fit for your dog.
    - Detachable Bowtie: Easily remove or switch out the bowtie for versatility.
    - Durable and High-Quality: Made to withstand daily wear and tear.
    - Variety of Colors: Choose from a range of colors to suit your dog's style.
    
    Elevate your dog's fashion game and let them shine with our Dog Bowtie Collar. Whether it's a family gathering, a photoshoot, or just a walk in the park, your pet will turn heads with this charming accessory.`,
        image: s3BaseUrl + 'Dog Bowtie Collar.jpg',
        createdBy: adminUser._id,
        price: 8.99, // Suggested price in dollars
      },
    ];
    
    await Product.insertMany(products)

   // Check if the category exists for each product
   const productPromises = products.map(async (productData) => {
    const category = await Category.findOne({ _id: productData.category });
    if (!category) {
      throw new Error(`Category not found: ${productData.category}`);
    }

    return {
      category: category._id, // Reference the category document by its ObjectId
        ...productData,
      };
    });
    console.log(products)
    await Promise.all(productPromises);
    console.log('Seed data inserted successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

// Call the seedData function
seedData();