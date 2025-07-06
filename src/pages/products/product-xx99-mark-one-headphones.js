import { ProductDetail } from '../../components/product-detail/product-detail.js';
import { ProductFeaturesText } from '../../components/product-features/product-features-text.js';
import { ProductInTheBox } from '../../components/product-features/product-in-the-box.js';
import { ProductGallery } from '../../components/product-gallery/product-gallery.js';
import { ProductRecommendations } from '../../components/product-recommendations/product-recommendations.js';

const product = {
    name: 'XX99 Mark I Headphones',
    slug: 'xx99-mark-one-headphones',
    image: 'images/xx99-mark-one.jpg',
    isNew: false,
    price: 1750,
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music lovers alike.',
    features:
      'These headphones have been crafted for comfort and high performance. The sound is detailed and neutral, great for mixing or long listening sessions.\n\nHigh-quality materials ensure longevity and maximum comfort, and the detachable cable adds flexibility.',
    includes: [
      { quantity: 1, item: 'Headphone Unit' },
      { quantity: 2, item: 'Replacement Earcups' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '3.5mm 5m Audio Cable' },
    ],
    gallery: [
      'images/product-xx99-mark-one-gallery-1.jpg',
      'images/product-xx99-mark-one-gallery-2.jpg',
      'images/product-xx99-mark-one-gallery-3.jpg',
    ],
    recommendations: [
      { name: 'XX99 Mark II', slug: 'xx99-mark-two-headphones', image: 'images/xx99-mark-two.jpg' },
      { name: 'XX59', slug: 'xx59-headphones', image: 'images/xx59.jpg' },
      { name: 'ZX9 Speaker', slug: 'zx9-speaker', image: 'images/zx9.jpg' },
    ],
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#product-detail')?.appendChild(ProductDetail(product));
    document.querySelector('#features')?.appendChild(ProductFeaturesText(product));
    document.querySelector('#in-the-box')?.appendChild(ProductInTheBox(product));
    document.querySelector('#gallery')?.appendChild(ProductGallery(product));
    document.querySelector('#recommendations')?.appendChild(ProductRecommendations(product));
  });