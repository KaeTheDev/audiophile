export function ProductCategories(categories) {
  const section = document.createElement('section');
  section.className = 'product-categories';

  section.innerHTML = categories.map(category => `
    <article class="categories__item">
      <picture>
        <source media="(min-width: 1024px)" srcset="${category.image.desktop}" />
        <source media="(min-width: 768px)" srcset="${category.image.tablet}" />
        <img src="${category.image.mobile}" alt="${category.name}" class="categories__image" />
      </picture>
      <h3 class="categories__name">${category.name}</h3>
      <a href="${category.link}" class="categories__link">Shop <span>→</span></a>
    </article>
  `).join('');

  return section;
}