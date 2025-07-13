import { createButton } from '../button/button.js';

export function ProductRecommendations(product) {
  const section = document.createElement('section');
  section.className = 'product-recommendations';

  const title = document.createElement('h2');
  title.className = 'product-recommendations__title';
  title.textContent = 'You may also like';

  const list = document.createElement('div');
  list.className = 'product-recommendations__list';

  product.others.forEach((rec) => {
    const card = document.createElement('div');
    card.className = 'product-recommendations__card';

    const image = document.createElement('img');
    image.src = rec.image.mobile;
    image.alt = rec.name;

    const name = document.createElement('h3');
    name.className = 'product-recommendations__name';
    name.textContent = rec.name;

    const link = document.createElement('a');
    link.href = `./product-${rec.slug}.html`;

    const button = createButton({ label: 'See Product', variant: 'primary' });
    link.appendChild(button);

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(link);
    list.appendChild(card);
  });

  section.appendChild(title);
  section.appendChild(list);

  return section;
}