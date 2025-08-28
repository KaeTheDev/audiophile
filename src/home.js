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

  // 🔍 Explicitly select one product per category for categoryImage
  const categories = [
    { name: 'Headphones', slug: 'xx99-mark-one-headphones', link: '/headphones.html' },
    { name: 'Speakers', slug: 'zx9-speaker', link: '/speakers.html' },
    { name: 'Earphones', slug: 'yx1-earphones', link: '/earphones.html' }
  ].map(cat => {
    const item = data.find(product => product.slug === cat.slug);
    return {
      name: cat.name,
      image: item.categoryImage, // ✅ use categoryImage for homepage display
      link: cat.link,
    };
  });

  // ✅ Append components in correct order
  page.appendChild(Hero());
  page.appendChild(ProductCategories(categories)); // pass cleaned-up category array
  page.appendChild(FeaturedProducts());
  page.appendChild(About());
});