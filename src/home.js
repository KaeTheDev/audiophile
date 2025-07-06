import './layout.js'; // imports base + styles

import { Hero } from './components/hero/hero.js';
import { FeaturedProducts } from './components/featured-products/feature-products.js';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('#page');

  if (page) {
    // 🥇 Add Hero BEFORE Product Categories
    const productCategories = page.querySelector('.product-categories');
    if (productCategories) {
      page.insertBefore(Hero(), productCategories); // Insert Hero before ProductCategories
    } else {
      page.prepend(Hero()); // fallback if productCategories isn't found
    }

    // 🧩 Add FeaturedProducts AFTER ProductCategories
    page.insertBefore(FeaturedProducts(), page.querySelector('.about') || null);
  }
});