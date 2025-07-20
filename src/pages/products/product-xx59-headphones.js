import { ProductDetail } from '../../components/product-detail/product-detail.js';
import { ProductSpecs } from '../../components/product-specs/product-specs.js';
import { ProductGallery } from '../../components/product-gallery/product-gallery.js';
import { ProductRecommendations } from '../../components/product-recommendations/product-recommendations.js';
import { ProductCategories } from '../../components/product-categories/product-categories.js';
import { About } from '../../components/about/about.js';
import { fetchProductData } from '../../utils/fetchData.js';
import { getSlugFromURL } from '../../utils/getSlugFromURL.js';

document.addEventListener('DOMContentLoaded', () => {
  fetchProductData()
    .then(data => {
      const slug = getSlugFromURL(); // returns 'xx59-headphones'
      const product = data.find(p => p.slug === slug);

      if (!product) {
        console.error(`❌ No product found for slug: ${slug}`);
        return;
      }

      // 🧩 Existing rendering (no changes here)
      document.querySelector('#product-detail')?.appendChild(ProductDetail(product));
      document.querySelector('#product-specs')?.appendChild(ProductSpecs(product));
      document.querySelector('#gallery')?.appendChild(ProductGallery(product));
      document.querySelector('#recommendations')?.appendChild(ProductRecommendations(product));

      // ➕ Append Product Categories section
      const categories = ['headphones', 'speakers', 'earphones'].map(cat => {
        const match = data.find(p => p.category === cat);
        return {
          name: cat.charAt(0).toUpperCase() + cat.slice(1),
          image: match.categoryImage,
          link: `/${cat}.html`
        };
      });

      const page = document.querySelector('#page');
      if (page) {
        page.appendChild(ProductCategories(categories));
        page.appendChild(About());
      }

    })
    .catch(error => {
      console.error('❌ Error loading product data:', error);
    });
});
