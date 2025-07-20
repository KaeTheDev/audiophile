import { ProductDetail } from '../../components/product-detail/product-detail.js';
import { ProductSpecs } from '../../components/product-specs/product-specs.js';
import { ProductGallery } from '../../components/product-gallery/product-gallery.js';
import { ProductRecommendations } from '../../components/product-recommendations/product-recommendations.js';
import { ProductCategories } from '../../components/product-categories/product-categories.js';
import { About } from '../../components/about/about.js';
import { fetchProductData } from '../../utils/fetchData.js';
import { getSlugFromURL } from '../../utils/getSlugFromURL.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await fetchProductData();
    const slug = getSlugFromURL(); // returns e.g. 'yx1-earphones'
    const product = data.find(p => p.slug === slug);

    if (!product) {
      console.error(`❌ No product found for slug: ${slug}`);
      return;
    }

    // Product-specific sections
    document.querySelector('#product-detail')?.appendChild(ProductDetail(product));
    document.querySelector('#product-specs')?.appendChild(ProductSpecs(product));
    document.querySelector('#gallery')?.appendChild(ProductGallery(product));
    document.querySelector('#recommendations')?.appendChild(ProductRecommendations(product));

    // 6. Product Categories (built from same data)
    const categories = ['headphones', 'speakers', 'earphones'].map(cat => {
      const item = data.find(p => p.category === cat);
      return {
        name: cat.charAt(0).toUpperCase() + cat.slice(1),
        image: item.categoryImage,
        link: `/${cat}.html`,
      };
    });
    const categorySection = ProductCategories(categories);
    document.querySelector('#page')?.appendChild(categorySection);

    // 7. About section
    document.querySelector('#page')?.appendChild(About());

  } catch (error) {
    console.error('❌ Error loading product detail page:', error);
  }
});