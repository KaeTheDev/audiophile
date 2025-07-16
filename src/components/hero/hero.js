import { createButton } from '../button/button';

export function Hero() {
  const section = document.createElement('section');
  section.className = 'hero';
  section.innerHTML = `
    <div class="hero__content">
      <p class="hero__overline">New Product</p>
      <h1 class="hero__title">XX99 Mark II Headphones</h1>
      <p class="hero__description">
        Experience natural, lifelike audio and exceptional build quality made 
        for the passionate music enthusiast.
      </p>
      <a href="./product-xx99-mark-two-headphones.html" class="hero__btn-link"></a>
    </div>
    <div class="hero__image-wrapper">
      <picture>
        <source media="(max-width: 600px)" srcset="/audiophile/assets/home/mobile/image-header.jpg" />
        <source media="(max-width: 900px)" srcset="/audiophile/assets/home/tablet/image-header.jpg" />
        <img src="/audiophile/assets/home/desktop/image-hero.jpg" alt="XX99 Mark II Headphones" class="hero__image" />
      </picture>
    </div>
  `;

  // Append the button inside the anchor tag
  const btn = createButton({ label: 'See Product', variant: 'primary' });
  section.querySelector('.hero__btn-link').appendChild(btn);

  return section;
}