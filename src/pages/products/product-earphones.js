import { ProductDetail } from '../../components/product-detail/product-detail.js';
import { ProductFeaturesText } from '../../components/product-features/product-features-text.js';
import { ProductInTheBox } from '../../components/product-features/product-in-the-box.js';
import { ProductGallery } from '../../components/product-gallery/product-gallery.js';
import { ProductRecommendations } from '../../components/product-recommendations/product-recommendations.js';

const product = {
    name: 'YX1 Wireless Earphones',
    slug: 'earphones',
    image: 'images/yx1.jpg',
    isNew: true,
    price: 599,
    description:
      'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    features:
      'The YX1 Wireless Earphones combine style and substance with a compact charging case and multi-point Bluetooth connection. Built with long battery life and water resistance, these are perfect for on-the-go listening. Touch controls on each earbud let you answer calls, skip tracks, or adjust volume with ease.',
    includes: [
      { quantity: 2, item: 'Earbud Units' },
      { quantity: 6, item: 'Multi-size Earplugs' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: 'USB-C Charging Cable' },
      { quantity: 1, item: 'Travel Pouch' },
    ],
    gallery: [
      '/assets/product-xx59-headphones/mobile/image-gallery-1.jpg',
      '/assets/product-xx59-headphones/mobile/image-gallery-2.jpg',
      '/assets/product-xx59-headphones/mobile/image-gallery-3.jpg',
    ],
    recommendations: [
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