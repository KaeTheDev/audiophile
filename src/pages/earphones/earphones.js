import { ProductCard } from "../../components/product-card/product-card";

export const earphonesData = [
    {
      name: 'YX1 Wireless Earphones',
      slug: 'yx1-earphones',
      image: 'images/yx1.jpg',
      alt: 'YX1 Wireless Earphones',
      isNew: true,
      description:
        'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('#product-list');
  
    earphonesData.forEach(product => {
      const card = ProductCard(product);
      productList.appendChild(card);
    });
  });

