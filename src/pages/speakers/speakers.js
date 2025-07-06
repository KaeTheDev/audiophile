import { ProductCard } from "../../components/product-card/product-card";

export const speakerData = [
    {
      name: 'ZX9 Speaker',
      slug: 'zx9-speaker',
      image: 'images/zx9.jpg',
      alt: 'ZX9 Speaker',
      isNew: true,
      description:
        'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity — creating new possibilities for more pleasing and practical audio setups.',
    },
    {
      name: 'ZX7 Speaker',
      slug: 'zx7-speaker',
      image: 'images/zx7.jpg',
      alt: 'ZX7 Speaker',
      isNew: false,
      description:
        'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    },
  ];

    document.addEventListener('DOMContentLoaded', () =>{
        const productList = document.querySelector('#product-list');

        speakerData.forEach(product => {
            const card = ProductCard(product);
            productList.appendChild(card);
        });
    });