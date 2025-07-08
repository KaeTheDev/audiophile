import { ProductDetail } from '../../components/product-detail/product-detail.js';
import { ProductFeaturesText } from '../../components/product-features/product-features-text.js';
import { ProductInTheBox } from '../../components/product-features/product-in-the-box.js';
import { ProductGallery } from '../../components/product-gallery/product-gallery.js';
import { ProductRecommendations } from '../../components/product-recommendations/product-recommendations.js';

const product = {
    name: 'XX59 Headphones',
    slug: 'xx59-headphones',
    image: 'images/xx59.jpg',
    isNew: false,
    price: 899,
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable design means you can wear them all day in comfort.',
    features:
      'These headphones are compact and foldable, with noise-isolating cushions. They offer deep bass and crisp highs, ideal for listening to modern pop, R&B, and hip-hop.\n\nThe XX59 headphones come with a travel pouch, detachable cable, and adjustable headband for added convenience.',
    includes: [
      { quantity: 1, item: 'Headphone Unit' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '3.5mm 5m Audio Cable' },
    ],
    gallery: [
      'images/product-xx59-gallery-1.jpg',
      'images/product-xx59-gallery-2.jpg',
      'images/product-xx59-gallery-3.jpg',
    ],
    others: [
      { name: 'XX99 Mark I', slug: 'xx99-mark-one-headphones', image: 'images/xx99-mark-one.jpg' },
      { name: 'XX99 Mark II', slug: 'xx99-mark-two-headphones', image: 'images/xx99-mark-two.jpg' },
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