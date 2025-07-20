import { createButton } from '../button/button';

export function FeaturedProducts() {
  const section = document.createElement('section');
  section.className = 'featured-products';

  // ZX9 Speaker
  const zx9 = document.createElement('article');
  zx9.className = 'featured-products__banner featured-products__banner--zx9';
  zx9.innerHTML = `
    <div class="featured-products__banner--zx9-inner">
      <div class="featured-products__banner--zx9-image">
        <img src="/audiophile/assets/home/desktop/image-speaker-zx9.png" alt="ZX9 Speaker" />
      </div>
      <div class="featured-products__banner--zx9-content">
        <h2 class="featured-products__banner--zx9-title">ZX9<br>Speaker</h2>
        <p class="featured-products__banner--zx9-description">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <a href="./product-zx9-speaker.html" class="zx9-btn-link">
          <!-- Button will be inserted here -->
        </a>
      </div>
    </div>
  `;

  // ZX7 Speaker
  const zx7 = document.createElement('article');
  zx7.className = 'featured-products__banner featured-products__banner--zx7';
  zx7.innerHTML = `
    <div class="featured-products__banner--zx7-content">
      <h2 class="featured-products__banner--zx7-content-title">ZX7 SPEAKER</h2>
      <a href="./product-zx7-speaker.html" class="featured-products__banner--zx7-content-link"></a>
    </div>
    <picture class="featured-products__banner--zx7-image-wrapper">
      <source media="(max-width: 600px)" srcset="/audiophile/assets/home/mobile/image-speaker-zx7.jpg" />
      <source media="(max-width: 900px)" srcset="/audiophile/assets/home/tablet/image-speaker-zx7.jpg" />
      <img src="/audiophile/assets/home/desktop/image-speaker-zx7.jpg" alt="ZX7 Speaker" />
    </picture>
  `;

  // YX1 Earphones (split layout)
  const yx1Container = document.createElement('div');
  yx1Container.className = 'featured-products__yx1';

  const yx1ImgBox = document.createElement('div');
  yx1ImgBox.className = 'featured-products__yx1-image-box';
  yx1ImgBox.innerHTML = `
    <img src="/audiophile/assets/home/desktop/image-earphones-yx1.jpg" alt="YX1 Earphones" />
  `;

  const yx1ContentBox = document.createElement('div');
  yx1ContentBox.className = 'featured-products__yx1-content-box';
  yx1ContentBox.innerHTML = `
    <h2 class="product-banner__title">YX1 EARPHONES</h2>
    <a href="./product-yx1-earphones.html" class="yx1-btn-link">
      <!-- Button will be inserted here -->
    </a>
  `;

  yx1Container.appendChild(yx1ImgBox);
  yx1Container.appendChild(yx1ContentBox);

  // Append all banners to section
  section.appendChild(zx9);
  section.appendChild(zx7);
  section.appendChild(yx1Container);

  // Insert buttons
  const zx9Btn = createButton({ label: 'See Product', variant: 'outline' });
  zx9Btn.classList.add('custom-outline-btn');
  zx9.querySelector('.zx9-btn-link').appendChild(zx9Btn);

  const zx7Btn = createButton({ label: 'See Product', variant: 'outline' });
  zx7Btn.classList.add('custom-outline-btn');
  zx7.querySelector('.featured-products__banner--zx7-content-link').appendChild(zx7Btn);

  const yx1Btn = createButton({ label: 'See Product', variant: 'outline' });
  yx1Btn.classList.add('custom-outline-btn');
  yx1Container.querySelector('.yx1-btn-link').appendChild(yx1Btn);

  return section;
}