import { ProductDetail } from '../../components/product-detail/product-detail.js';
import { ProductFeaturesText } from '../../components/product-features/product-features-text.js';
import { ProductInTheBox } from '../../components/product-features/product-in-the-box.js';
import { ProductGallery } from '../../components/product-gallery/product-gallery.js';
import { ProductRecommendations } from '../../components/product-recommendations/product-recommendations.js';


const product = {
    name: 'XX99 Mark II Headphones',
    slug: 'xx99-mark-two-headphones',
    image: 'images/xx99-mark-two.jpg',
    isNew: true,
    price: 2999,
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    features:
      'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for long listening sessions.\n\nIt features an elegant design and active noise cancellation, making them the perfect choice for any audiophile.',
    includes: [
      { quantity: 1, item: 'Headphone Unit' },
      { quantity: 2, item: 'Replacement Earcups' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '3.5mm 5m Audio Cable' },
      { quantity: 1, item: 'Travel Bag' },
    ],
    gallery: [
      'images/product-xx99-mark-two-gallery-1.jpg',
      'images/product-xx99-mark-two-gallery-2.jpg',
      'images/product-xx99-mark-two-gallery-3.jpg',
    ],
    others: [
      { name: 'XX99 Mark I', slug: 'xx99-mark-one-headphones', image: 'images/xx99-mark-one.jpg' },
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