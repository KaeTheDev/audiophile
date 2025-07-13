import { createButton } from '../button/button';

export function Hero() {
    const section = document.createElement("section");
    section.className = "hero";
  
    section.innerHTML = `
      <p class="hero__overline">New Product</p>
      <h1 class="hero__title">XX99 Mark II Headphones</h1>
      <p class="hero__description">
        Experience natural, lifelike audio and exceptional build quality.
      </p>
      
    `;

    // Create primary button with label
    const btn = createButton({ label: 'See Product', variant: 'primary'})
  
    const link = document.createElement('a');
    link.href = './product-xx99-mark-two-headphones.html';
    link.appendChild(btn);

    section.appendChild(link);

    return section;
  }