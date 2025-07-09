import './layout.js'; // loads base and styles

import { Hero } from './components/hero/hero.js';
import { FeaturedProducts } from './components/featured-products/feature-products.js';
import { ProductCategories } from './components/product-categories/product-categories.js';
import { About } from './components/about/about.js';
import { fetchProductData } from './utils/fetchData.js';

document.addEventListener('DOMContentLoaded', async () => {
  const page = document.querySelector('#page');
  if (!page) return;

  const data = await fetchProductData();

  // 🔍 Pick one product per category to extract categoryImage
  const categoryNames = ['headphones', 'speakers', 'earphones'];
  const categories = categoryNames.map(cat => {
    const item = data.find(product => product.category === cat);
    return {
      name: cat.charAt(0).toUpperCase() + cat.slice(1),
      image: item.categoryImage,
      link: `/${cat}.html`,
    };
  });

  // ✅ Append components in correct order
  page.appendChild(Hero());
  page.appendChild(ProductCategories(categories)); // pass cleaned-up category array
  page.appendChild(FeaturedProducts());
  page.appendChild(About());
});