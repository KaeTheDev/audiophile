export function ProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';
  
    card.innerHTML = `
      ${product.isNew ? `<p class="product-card__overline">New Product</p>` : ''}
      <img src="${product.image}" alt="${product.name}" class="product-card__image" />
      <div class="product-card__content">
        <h2 class="product-card__name">${product.name}</h2>
        <p class="product-card__desc">${product.description}</p>
        <a href="./product.html?slug=${product.slug}">
          <button class="product-card__button button">See Product</button>
        </a>
      </div>
    `;
  
    return card;
  }

  // Fix the link to the product page