export function ProductCategories() {
    const categories = [
      {
        name: 'Headphones',
        image: 'images/shared/desktop/image-category-thumbnail-headphones.png',
        link: './headphones.html'
      },
      {
        name: 'Speakers',
        image: 'images/shared/desktop/image-category-thumbnail-speakers.png',
        link: './speakers.html'
      },
      {
        name: 'Earphones',
        image: 'images/shared/desktop/image-category-thumbnail-earphones.png',
        link: './earphones.html'
      }
    ];
  
    const section = document.createElement('section');
    section.className = 'categories';
  
    section.innerHTML = categories.map(category => `
      <article class="categories__item">
        <img src="${category.image}" alt="${category.name}" class="categories__image" />
        <h3 class="categories__name">${category.name}</h3>
        <a href="${category.link}" class="categories__link">Shop <span>→</span></a>
      </article>
    `).join('');
  
    return section;
  }