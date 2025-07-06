import { ProductDetail } from '../../components/product-detail/product-detail.js';
import { ProductFeaturesText } from '../../components/product-features/product-features-text.js';
import { ProductInTheBox } from '../../components/product-features/product-in-the-box.js';
import { ProductGallery } from '../../components/product-gallery/product-gallery.js';
import { ProductRecommendations } from '../../components/product-recommendations/product-recommendations.js';

const product = {
    name: 'ZX7 Speaker',
    slug: 'zx7-speaker',
    image: 'images/zx7.jpg',
    isNew: false,
    price: 3500,
    description:
      'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    features:
      'Reap the advantages of a flat diaphragm tweeter cone. This provides a more natural soundstage with accurate high-frequency response.\n\nIt comes with both Bluetooth and high-quality analog and digital inputs so you can connect to a wide variety of devices.',
    includes: [
      { quantity: 2, item: 'Speaker Units' },
      { quantity: 2, item: 'Speaker Cloth Panel' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '3.5mm 7.5m Audio Cable' },
      { quantity: 1, item: '7.5m Optical Cable' },
    ],
    gallery: [
      'images/product-zx7-gallery-1.jpg',
      'images/product-zx7-gallery-2.jpg',
      'images/product-zx7-gallery-3.jpg',
    ],
    recommendations: [
      { name: 'ZX9 Speaker', slug: 'zx9-speaker', image: 'images/zx9.jpg' },
      { name: 'XX99 Mark I', slug: 'xx99-mark-one-headphones', image: 'images/xx99-mark-one.jpg' },
      { name: 'XX59', slug: 'xx59-headphones', image: 'images/xx59.jpg' },
    ],
  };


  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#product-detail')?.appendChild(ProductDetail(product));
    document.querySelector('#features')?.appendChild(ProductFeaturesText(product));
    document.querySelector('#in-the-box')?.appendChild(ProductInTheBox(product));
    document.querySelector('#gallery')?.appendChild(ProductGallery(product));
    document.querySelector('#recommendations')?.appendChild(ProductRecommendations(product));
  });