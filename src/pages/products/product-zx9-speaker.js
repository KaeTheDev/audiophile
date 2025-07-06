import { ProductDetail } from '../../components/product-detail/product-detail.js';
import { ProductFeaturesText } from '../../components/product-features/product-features-text.js';
import { ProductInTheBox } from '../../components/product-features/product-in-the-box.js';
import { ProductGallery } from '../../components/product-gallery/product-gallery.js';
import { ProductRecommendations } from '../../components/product-recommendations/product-recommendations.js';


const product = {
    name: 'ZX9 Speaker',
    slug: 'zx9-speaker',
    image: 'images/zx9.jpg',
    isNew: true,
    price: 4500,
    description:
      'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity — creating new possibilities for more pleasing and practical audio setups.',
    features:
      'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, and stereo RCA inputs, allowing you to have up to five wired source devices connected for easy switching.\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equalizer control and tone shaping lets you personalize your listening experience.',
    includes: [
      { quantity: 2, item: 'Speaker Units' },
      { quantity: 2, item: 'Speaker Cloth Panel' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '3.5mm 10m Audio Cable' },
      { quantity: 1, item: '10m Optical Cable' },
    ],
    gallery: [
      'images/product-zx9-gallery-1.jpg',
      'images/product-zx9-gallery-2.jpg',
      'images/product-zx9-gallery-3.jpg',
    ],
    recommendations: [
      { name: 'ZX7 Speaker', slug: 'zx7-speaker', image: 'images/zx7.jpg' },
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