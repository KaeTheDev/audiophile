import { createButton } from '../button/button.js';

export function ProductCard(product) {
  const card = document.createElement('article');
  card.className = 'product-card';

  card.innerHTML = `
    ${product.isNew ? `<p class="product-card__overline">New Product</p>` : ''}
    <img src="${product.image}" alt="${product.name}" class="product-card__image" />
    <div class="product-card__content">
      <h2 class="product-card__name">${product.name}</h2>
      <p class="product-card__desc">${product.description}</p>
    </div>
  `;

  // Create link + button
  const link = document.createElement('a');
  link.href = `./product-${product.slug}.html`; // <-- matches your file naming convention
  const button = createButton({ label: 'See Product', variant: 'primary' });
  link.appendChild(button);

  // Append link to content div
  const content = card.querySelector('.product-card__content');
  content.appendChild(link);

  return card;
}