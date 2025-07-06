import { ProductCard } from "../../components/product-card/product-card.js";

const products = [
    {
      name: 'XX99 Mark II Headphones',
      description: 'The pinnacle of pristine audio. Reproduces the balanced depth and precision of studio-quality sound.',
      image: './images/xx99-mark-two.jpg',
      slug: 'xx99-mark-two',
      isNew: true
    },
    {
      name: 'XX99 Mark I Headphones',
      description: 'Classic headphones offering detailed and accurate audio for audiophiles and sound professionals.',
      image: './images/xx99-mark-one.jpg',
      slug: 'xx99-mark-one',
      isNew: false
    },
    {
      name: 'XX59 Headphones',
      description: 'Versatile wireless headset for music on the go. Stylish, durable, and customizable audio experience.',
      image: './images/xx59.jpg',
      slug: 'xx59',
      isNew: false
    }
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('#product-list');
  
    products.forEach(product => {
      const card = ProductCard(product);
      productList.appendChild(card);
    });
  });