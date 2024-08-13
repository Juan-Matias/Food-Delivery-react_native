// Data for categories
export const categories = [
  {
    id: 1,
    name: 'Pizza',
    image: require('../assets/images/categories/icons8-pizza-96.png'),
  },
  {
    id: 2,
    name: 'Burgers',
    image: require('../assets/images/categories/icons8-pizza-96.png'),
  },
  {
    id: 3,
    name: 'Sushi',
    image: require('../assets/images/categories/icons8-pizza-96.png'),
  },
  {
    id: 4,
    name: 'Salads',
    image: require('../assets/images/categories/icons8-pizza-96.png'),
  },
  {
    id: 5,
    name: 'Desserts',
    image: require('../assets/images/categories/icons8-pizza-96.png'),
  },
  {
    id: 6,
    name: 'Drinks',
    image: require('../assets/images/categories/icons8-pizza-96.png'),
  },
];

// Data for featured
export const featured = [
  // Featured 1
  {
    id: 1,
    title: 'Hot and Spicy',
    description: 'Soft and tender fried chicken',
    restaurants: [
      {
        id: 1,
        name: 'Papa John\'s',
        image: require('../assets/images/restaurants/pizza.jpg'),
        description: 'Hot and Spicy pizzas',
        lat: 37.7749,  // Coordenadas para San Francisco, California
        lng: -122.4194,
        address: '434 Second Street',
        stars: 4,
        category: 'Fast Food',
        dishes: [
          {
            id: 1,
            name: 'Cheesy Garlic Pizza',
            description: 'Cheesy garlic pizza with a crispy crust',
            price: 15,
            image: require('../assets/images/restaurants/pizza.jpg'),
          },
          {
            id: 2,
            name: 'Pepperoni Pizza',
            description: 'Spicy pepperoni on a cheesy base',
            price: 18,
            image: require('../assets/images/restaurants/fastFood.webp'),
          },
          {
            id: 3,
            name: 'Pepperoni Pizza',
            description: 'Spicy pepperoni on a cheesy base',
            price: 18,
            image: require('../assets/images/restaurants/fastFood.webp'),
          },

        ],
      },
      {
        id: 2,
        name: 'Spicy Wings',
        image: require('../assets/images/restaurants/pizza.jpg'),
        description: 'Delicious spicy wings with a variety of sauces',
        lng: 38.2155602,
        lat: -85.56324269,
        address: '123 Hot Wing Avenue',
        stars: 4.5,
        category: 'Fast Food',
        dishes: [
          {
            id: 1,
            name: 'Buffalo Wings',
            description: 'Classic buffalo wings with a tangy sauce',
            price: 12,
            image: require('../assets/images/restaurants/pizza.jpg'),
          },
          {
            id: 2,
            name: 'Honey BBQ Wings',
            description: 'Sweet and tangy honey BBQ wings',
            price: 14,
            image: require('../assets/images/restaurants/pizza.jpg'),
          },
        ],
      },
    ],
  },

  // Featured 2
  {
    id: 2,
    title: 'Fresh and Healthy',
    description: 'Healthy salads and bowls',
    restaurants: [
      {
        id: 3,
        name: 'Green Eats',
        image: require('../assets/images/restaurants/pizza.jpg'),
        description: 'Fresh salads and healthy bowls',
        lng: 38.2165602,
        lat: -85.56324269,
        address: '567 Health Street',
        stars: 4.8,
        category: 'Healthy Food',
        dishes: [
          {
            id: 1,
            name: 'Caesar Salad',
            description: 'Classic Caesar salad with fresh greens',
            price: 10,
            image: require('../assets/images/restaurants/pizza.jpg'),
          },
          {
            id: 2,
            name: 'Quinoa Bowl',
            description: 'Nutritious quinoa bowl with mixed vegetables',
            price: 12,
            image: require('../assets/images/restaurants/pizza.jpg'),
          },
        ],
      },
      {
        id: 4,
        name: 'Salad Heaven',
        image: require('../assets/images/restaurants/pizza.jpg'),
        description: 'Delicious and nutritious salads',
        lng: 38.2175602,
        lat: -85.56324269,
        address: '789 Veggie Lane',
        stars: 4.6,
        category: 'Healthy Food',
        dishes: [
          {
            id: 1,
            name: 'Greek Salad',
            description: 'Fresh Greek salad with feta cheese and olives',
            price: 11,
            image: require('../assets/images/restaurants/pizza.jpg'),
          },
          {
            id: 2,
            name: 'Avocado Toast',
            description: 'Toasted bread with avocado spread and toppings',
            price: 9,
            image: require('../assets/images/restaurants/pizza.jpg'),
          },
        ],
      },
    ],
  },

  // Featured 3
  {
    id: 3,
    title: 'Desserts and Sweets',
    description: 'Indulge in our sweet treats and desserts',
    restaurants: [
      {
        id: 5,
        name: 'Sweet Tooth',
        image: require('../assets/images/restaurants/KFC.webp'),
        description: 'Delicious desserts to satisfy your sweet tooth',
        lng: 38.2185602,
        lat: -85.56324269,
        address: '101 Candy Lane',
        stars: 4.9,
        category: 'Dessert',
        dishes: [
          {
            id: 1,
            name: 'Chocolate Cake',
            description: 'Rich and moist chocolate cake',
            price: 8,
            image: require('../assets/images/restaurants/KFC.webp'),
          },
          {
            id: 2,
            name: 'Ice Cream Sundae',
            description: 'Classic ice cream sundae with various toppings',
            price: 7,
            image: require('../assets/images/restaurants/KFC.webp'),
          },
        ],
      },
      {
        id: 6,
        name: 'Bakery Bliss',
        image: require('../assets/images/restaurants/KFC.webp'),
        description: 'Freshly baked goods and pastries',
        lng: 38.2195602,
        lat: -85.56324269,
        address: '202 Baker Street',
        stars: 4.7,
        category: 'Bakery',
        dishes: [
          {
            id: 1,
            name: 'Croissant',
            description: 'Buttery and flaky croissant',
            price: 3,
            image: require('../assets/images/restaurants/KFC.webp'),
          },
          {
            id: 2,
            name: 'Apple Pie',
            description: 'Classic apple pie with a golden crust',
            price: 5,
            image: require('../assets/images/restaurants/KFC.webp'),
          },
        ],
      },
    ],
  },
];
