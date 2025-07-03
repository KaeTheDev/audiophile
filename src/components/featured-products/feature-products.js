export function FeaturedProducts() {
    const section = document.createElement('section');
    section.className = 'featured-products';
  
    section.innerHTML = `
      <article class="product-highlight product-highlight--zx9">
        <h2 class="product-highlight__title">ZX9 Speaker</h2>
        <p class="product-highlight__description">
          Upgrade to premium speakers that deliver truly remarkable sound.
        </p>
        <a href="./speakers.html">
          <button class="button button--primary">See Product</button>
        </a>
      </article>
  
      <article class="product-highlight product-highlight--zx7">
        <h2 class="product-highlight__title">ZX7 Speaker</h2>
        <a href="./speakers.html">
          <button class="button button--primary">See Product</button>
        </a>
      </article>
  
      <article class="product-highlight product-highlight--yx1">
        <h2 class="product-highlight__title">YX1 Earphones</h2>
        <a href="./earphones.html">
          <button class="button button--primary">See Product</button>
        </a>
      </article>
    `;
  
    return section;
  }