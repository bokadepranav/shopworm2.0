import React from "react";
import heroBg from "../assets/catalog/catalog-slider-1.jpg";
import buttonBg from "../assets/button.png";
import SmallBanner from "../components/Banner/SmallBanner";

import categoryBanner1 from "../assets/catalog/catalog-banner-1.jpg";
import categoryBanner2 from "../assets/catalog/catalog-banner-2.jpg";
import categoryBanner3 from "../assets/catalog/catalog-banner-3.jpg";

import medBannerImg1 from '../assets/banner/b17.jpg'
import medBannerImg2 from '../assets/banner/1.jpg'

import HeadingDescription from "../components/HeadingDescription";
import ProductGroup from "../components/ProductGroup";
import FullBanner from "../components/Banner/FullBanner";
import MediumBanner from "../components/Banner/MediumBanner";
import NewsLetter from "../components/Banner/NewsLetter";

export default function Home() {
  const data = {
    categories: ["bags", "glasses", "men", "women", "watches", "shoes"],
    products: [
      {
        id: "prod00001",
        name: "Brown Quilted Satchel",
        brand: "Gucci",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "bags",
        price: 178,
        price_currency: "USD",
        min_offer_price: 64,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/bags/3.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00002",
        name: "Funky Silver Glasses",
        brand: "Fastrack",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "glasses",
        price: 214,
        price_currency: "USD",
        min_offer_price: 142,
        star_rating: 4.2,
        num_rating: 120,
        imgPath: "../assets/products/glasses/2.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00003",
        name: "X-men T-shirt",
        brand: "Calvin Klein",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 48,
        price_currency: "USD",
        min_offer_price: 24,
        star_rating: 4.5,
        num_rating: 100,
        imgPath: "../assets/products/men/p1/1.png",
        imgCollection: [
          "../assets/products/men/p1/1.png",
          "../assets/products/men/p1/2.png",
          "../assets/products/men/p1/3.png",
          "../assets/products/men/p1/4.png",
        ],
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00004",
        name: "Men Military Green T-shirt",
        brand: "Adidas",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 40,
        price_currency: "USD",
        min_offer_price: 20,
        star_rating: 4.5,
        num_rating: 80,
        imgPath: "../assets/products/men/p2/12.jpg",
        has_variations: true,
        variations: ["prod00004", "prod00005"],
      },
      {
        id: "prod00005",
        name: "Men Red Blood T-shirt",
        brand: "Adidas",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 40,
        price_currency: "USD",
        min_offer_price: 20,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/p2/11.jpg",
        has_variations: true,
        variations: ["prod00004", "prod00005"],
      },
      {
        id: "prod00006",
        name: "Men's Cartoon Shirt",
        brand: "Pantaloons",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 58,
        price_currency: "USD",
        min_offer_price: 26,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/p3/f1.jpg",
        has_variations: true,
        variations: ["prod00006", "prod00007", "prod00008", "prod00009"],
      },
      {
        id: "prod00007",
        name: "Men's Floral Green Leaves Shirt",
        brand: "Pantaloons",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 60,
        price_currency: "USD",
        min_offer_price: 30,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/p3/f2.jpg",
        has_variations: true,
        variations: ["prod00006", "prod00007", "prod00008", "prod00009"],
      },
      {
        id: "prod00008",
        name: "Men's Red Printed Floral Shirt",
        brand: "Pantaloons",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 60,
        price_currency: "USD",
        min_offer_price: 30,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/p3/f3.jpg",
        has_variations: true,
        variations: ["prod00006", "prod00007", "prod00008", "prod00009"],
      },
      {
        id: "prod00009",
        name: "Men's White Pink Shirt",
        brand: "Pantaloons",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/p3/f4.jpg",
        has_variations: true,
        variations: ["prod00006", "prod00007", "prod00008", "prod00009"],
      },
      {
        id: "prod00010",
        name: "Powder Blue Shirt",
        brand: "Gucci",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/p4/n1.jpg",
        has_variations: true,
        variations: ["prod00010", "prod00011", "prod00012", "prod00013"],
      },
      {
        id: "prod00011",
        name: "Grey Formal Shirt",
        brand: "Gucci",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/p4/n2.jpg",
        has_variations: true,
        variations: ["prod00010", "prod00011", "prod00012", "prod00013"],
      },
      {
        id: "prod00012",
        name: "Men's White Shirt",
        brand: "Gucci",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/p4/n3.jpg",
        has_variations: true,
        variations: ["prod00010", "prod00011", "prod00012", "prod00013"],
      },
      {
        id: "prod00013",
        name: "Men's Blue Shirt",
        brand: "Gucci",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/p4/n5.jpg",
        has_variations: true,
        variations: ["prod00010", "prod00011", "prod00012", "prod00013"],
      },
      {
        id: "prod00014",
        name: "Men's Brown Jacket",
        brand: "Zudio",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/p5/jacket-1.jpg",
        has_variations: true,
        variations: ["prod00014", "prod00015", "prod00016", "prod00017"],
      },
      {
        id: "prod00015",
        name: "Men's Dark Brown Jacket",
        brand: "Zudio",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/p5/jacket-2.jpg",
        has_variations: true,
        variations: ["prod00014", "prod00015", "prod00016", "prod00017"],
      },
      {
        id: "prod00016",
        name: "Men's Denim Jacket",
        brand: "Zudio",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/p5/jacket-3.jpg",
        has_variations: true,
        variations: ["prod00014", "prod00015", "prod00016", "prod00017"],
      },
      {
        id: "prod00017",
        name: "Men's Denim Blue Jacket",
        brand: "Zudio",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/p5/jacket-4.jpg",
        has_variations: true,
        variations: ["prod00014", "prod00015", "prod00016", "prod00017"],
      },
      {
        id: "prod00018",
        name: "Blue Oversized T-shirt",
        brand: "Nike",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/1.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00019",
        name: "Men's Purple T-shirt",
        brand: "Adidas",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/9.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00020",
        name: "Military Green Trendy T-shirt",
        brand: "Rebook",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/10.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00021",
        name: "Floral Violet Shirt",
        brand: "Dior",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/f5.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00022",
        name: "Denim Shirt T-shirt Combo",
        brand: "Gucci",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/f6.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00023",
        name: "Printed Leafy Shirt",
        brand: "Gucci",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/n4.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00024",
        name: "Men's White Pants",
        brand: "Cotton King",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/n6.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00025",
        name: "Men's Khaki Shirt",
        brand: "Cotton King",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/n7.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00026",
        name: "Grey Half Shirt",
        brand: "Cotton King",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "men",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/men/n8.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00027",
        name: "Men Red Textured Sneakers",
        brand: "Adidas",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "shoes",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/shoes/1.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00028",
        name: "Brown Casual Boots",
        brand: "Allen Cooper",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "shoes",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/shoes/2.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00029",
        name: "Black Fashion Shoe",
        brand: "Adidas",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "shoes",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/shoes/3.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00030",
        name: "Premium Slip-On",
        brand: "Schumann",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "shoes",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/shoes/4.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00031",
        name: "High Heels Sandals",
        brand: "Dior",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "shoes",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/shoes/5.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00032",
        name: "Men's Brown Synthetic Shoes",
        brand: "Adidas",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "shoes",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/shoes/6.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00033",
        name: "Monkey D Luffy Designed Watch",
        brand: "Rolex",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "watches",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/watches/1.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00034",
        name: "Elegant Black Men's Watch",
        brand: "Titan",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "watches",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/watches/2.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00035",
        name: "TIMEWEAR Analog Silver Watch",
        brand: "Timewear",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "watches",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/watches/3.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00036",
        name: "Reloj Hacker Mens Watche",
        brand: "Rolex",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "watches",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/watches/4.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00037",
        name: "Men Black Analogue Watch",
        brand: "Rolex",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "watches",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/watches/6.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00038",
        name: "Black Multifunctional Watch",
        brand: "Rolex",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "watches",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/watches/7.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00039",
        name: "Stylish Black Western OutFit",
        brand: "Pantaloons",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "women",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/women/p1/1.png",
        imgCollection: [
          "../assets/products/women/p1/1.png",
          "../assets/products/women/p1/2.png",
          "../assets/products/women/p1/3.png",
          "../assets/products/women/p1/4.png",
        ],
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00040",
        name: "Women's Grey Solid Floral Trouser",
        brand: "Pantaloons",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "women",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/women/f7.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00041",
        name: "Women Printed Blouson Top",
        brand: "Pantaloons",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "women",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/women/f8.jpg",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00042",
        name: "NK Design Ethnic Women Dress",
        brand: "Pantaloons",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "women",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/women/w2.png",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00043",
        name: "Wstern Store Floral Grey Maxi",
        brand: "Pantaloons",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "women",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/women/w3.png",
        has_variations: false,
        variations: [],
      },
      {
        id: "prod00044",
        name: "Women Floral Navy Blue Trouser",
        brand: "Pantaloons",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "women",
        price: 78,
        price_currency: "USD",
        min_offer_price: 48,
        star_rating: 4.5,
        num_rating: 150,
        imgPath: "../assets/products/women/w4.png",
        has_variations: false,
        variations: [],
      },
    ],
  };

  return (
    <>
      {/* hero banner */}
      <div
        className="hero-banner-wrapper"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <span className="heading-4 bold mb-3 color-black">Festive-feast</span>
        <span className="color-black text-font hero-banner-heading">
          Super value deals
        </span>
        <span className="mb-3 color-blue text-font hero-banner-heading">
          On all products
        </span>
        <span className="heading-5 color-grey text-font mb-3">
          Save more with coupons & upto 70% off!
        </span>
        <button
          className="hero-banner-btn heading-5 bold color-blue"
          style={{ backgroundImage: `url(${buttonBg})` }}
        >
          Shop now
        </button>
      </div>

      {/* category banners */}
      <div className="home-category-banner-wrapper">
        <SmallBanner
          backgroundImage={`url(${categoryBanner1})`}
          categoryText={"WHITE SNEAKERS"}
          categoryDiscount={30}
          categoryDescription={"Men Fashionable Shoes"}
        />
        <SmallBanner
          backgroundImage={`url(${categoryBanner2})`}
          categoryText={"WOMEN'S FASHION"}
          categoryDiscount={65}
          categoryDescription={"Shoes & Backpacks"}
        />
        <SmallBanner
          backgroundImage={`url(${categoryBanner3})`}
          categoryText={"TRENDY GLASSES"}
          categoryDiscount={50}
          categoryDescription={"Fashionable Glasses"}
        />
      </div>

      {/* new arrivals section */}
      <HeadingDescription
        heading={"New Arrivals"}
        description={"Summer Collection New Modern Design"}
      />

      <ProductGroup products={data.products} length={12} />

      {/* offer banner */}
      <FullBanner />

      {/* featured products section */}
      <HeadingDescription
        heading={"Featured Products"}
        description={"Summer Collection New Modern Design"}
      />

      <ProductGroup products={data.products} length={8} />

      {/* medium banner section */}
      <div className="medium-banner-section">
        <MediumBanner bannerTag={"crazy deals"} bannerTitle={"buy 1 get 1 free"} bannerDesc={"The best classic dress is on sale at cara"} bannerImg={medBannerImg1} />
        <MediumBanner bannerTag={"spring / summer"} bannerTitle={"upcoming season"} bannerDesc={"The best classic dreas is on sale at cara"} bannerImg={medBannerImg2} />
      </div>

      {/* news letter section */}
      <NewsLetter />
    </>
  );
}
