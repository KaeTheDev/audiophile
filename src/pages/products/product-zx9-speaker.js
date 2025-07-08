import { ProductDetail } from '../../components/product-detail/product-detail.js';
import { ProductFeaturesText } from '../../components/product-features/product-features-text.js';
import { ProductInTheBox } from '../../components/product-features/product-in-the-box.js';
import { ProductGallery } from '../../components/product-gallery/product-gallery.js';
import { ProductRecommendations } from '../../components/product-recommendations/product-recommendations.js';
import { fetchProductData } from '../../utils/fetchData.js';
import { getSlugFromURL } from '../../utils/getSlugFromURL.js';

document.addEventListener('DOMContentLoaded', () => {
  fetchProductData().then(data => {
    const slug = getSlugFromURL(); // returns 'zx9-speaker' from product-zx9-speaker.html
    const product = data.find(p => p.slug === slug);

    if(!product){
      console.error(`❌ No product found for slug: ${slug}`);
      return;
    }
    document.querySelector('#product-detail')?.appendChild(ProductDetail(product));
    document.querySelector('#features')?.appendChild(ProductFeaturesText(product));
    document.querySelector('#in-the-box')?.appendChild(ProductInTheBox(product));
    document.querySelector('#gallery')?.appendChild(ProductGallery(product));
    document.querySelector('#recommendations')?.appendChild(ProductRecommendations(product));
  }).catch(error => {
    console.error('❌ Error loading product data:', error);
  });
});