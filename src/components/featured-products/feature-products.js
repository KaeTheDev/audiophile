import { createButton } from '../button/button';

export function FeaturedProducts() {
  const section = document.createElement('section');
  section.className = 'featured-products';

  function createProductHighlight(title, href, modifier, extraDescription = '') {
    const article = document.createElement('article');
    article.className = `product-highlight product-highlight--${modifier}`;

    article.innerHTML = `
      <h2 class="product-highlight__title">${title}</h2>
      ${extraDescription ? `<p class="product-highlight__description">${extraDescription}</p>` : ''}
    `;

    const link = document.createElement('a');
    link.href = href;
    link.appendChild(createButton({ label: 'See Product', variant: 'outline' }));
    article.appendChild(link);

    return article;
  }

  section.appendChild(
    createProductHighlight(
      'ZX9 Speaker',
      './product-zx9-speaker.html',
      'zx9',
      'Upgrade to premium speakers that deliver truly remarkable sound.'
    )
  );

  section.appendChild(
    createProductHighlight('ZX7 Speaker', './product-zx7-speaker.html', 'zx7')
  );

  section.appendChild(
    createProductHighlight('YX1 Earphones', './product-yx1-earphones.html', 'yx1')
  );

  return section;
}