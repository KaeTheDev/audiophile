export function ProductRecommendations(product) {
    const section = document.createElement('section');
    section.className = 'product-recommendations';
  
    section.innerHTML = `
      <h2 class="product-recommendations__title">You may also like</h2>
      <div class="product-recommendations__list">
        ${product.others
          .map(
            (rec) => `
            <div class="product-recommendations__card">
            <img src="${rec.image.mobile}" alt="${rec.name}" />
              <h3 class="product-recommendations__name">${rec.name}</h3>
              <a href="./product-${rec.slug}.html">
                <button class="product-recommendations__button button">See Product</button>
              </a>
            </div>
          `
          )
          .join('')}
      </div>
    `;
  
    return section;
  }  