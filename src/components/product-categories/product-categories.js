import { createButton, chevronIcon } from '../button/button';

export function ProductCategories(categories) {
  const section = document.createElement('section');
  section.className = 'product-categories';

  categories.forEach(category => {
    const article = document.createElement('article');
    article.className = 'categories__item';

    article.innerHTML = `
      <picture>
        <source media="(min-width: 1024px)" srcset="${category.image.desktop}" />
        <source media="(min-width: 768px)" srcset="${category.image.tablet}" />
        <img src="${category.image.mobile}" alt="${category.name}" class="categories__image" />
      </picture>
      <h3 class="categories__name">${category.name}</h3>
    `;

    // ✅ Safe base path for GitHub Pages
    const base = import.meta.env.BASE_URL || '/';
    const link = document.createElement('a');
    link.href = `${base}${category.link}`;
    link.className = 'categories__link';

    const btn = createButton({
      label: 'Shop',
      variant: 'link',
      icon: chevronIcon
    });

    link.appendChild(btn);
    article.appendChild(link);
    section.appendChild(article);
  });

  return section;
}