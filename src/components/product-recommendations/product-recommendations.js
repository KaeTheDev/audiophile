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
    // Add the missing class for styling
    image.className = 'product-recommendations__image';
    
    // Use responsive images with srcset for different screen sizes
    image.src = rec.image.mobile;
    image.srcset = `${rec.image.mobile} 654w, ${rec.image.tablet} 562w, ${rec.image.desktop} 350w`;
    image.sizes = '(min-width: 1200px) 350px, (min-width: 768px) 562px, 654px';
    image.alt = rec.name;

    const name = document.createElement('h3');
    name.className = 'product-recommendations__name';
    name.textContent = rec.name;

    const link = document.createElement('a');
    link.href = `./product-${rec.slug}.html`;

    const button = createButton({ label: 'See Product', variant: 'primary' });
    // Add class to the button for specific styling if needed
    button.classList.add('product-recommendations__button');
    
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