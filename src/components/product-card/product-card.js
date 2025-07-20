import { createButton } from '../button/button.js';

// Updated ProductCard function with proper zigzag support
export function ProductCard(product, index = 0) {
    const card = document.createElement('article');
    const isReversed = index % 2 !== 0; // Every other card is reversed for zigzag
    
    card.className = `product-card${isReversed ? ' product-card--reverse' : ''}`;
    
    // Generate responsive image sources
    const basePath = `/audiophile/assets/product-${product.slug}`;
    const desktopImage = `${basePath}/desktop/image-category-page-preview.jpg`;
    const tabletImage = `${basePath}/tablet/image-category-page-preview.jpg`;
    const mobileImage = `${basePath}/mobile/image-category-page-preview.jpg`;
    
    card.innerHTML = `
        <div class="product-card__image-container">
            <picture class="product-card__picture">
                <source media="(min-width: 1025px)" srcset="${desktopImage}">
                <source media="(min-width: 769px)" srcset="${tabletImage}">
                <img src="${mobileImage}" alt="${product.name}" class="product-card__image" />
            </picture>
        </div>
        <div class="product-card__content">
            ${product.new ? `<p class="product-card__overline">New Product</p>` : ''}
            <h2 class="product-card__name">${product.name}</h2>
            <p class="product-card__desc">${product.description}</p>
        </div>
    `;
    
    // Create link + button (keeping your existing logic)
    const link = document.createElement('a');
    link.href = `./product-${product.slug}.html`;
    const button = createButton({ label: 'See Product', variant: 'primary' });
    link.appendChild(button);
    
    // Append link to content div
    const content = card.querySelector('.product-card__content');
    content.appendChild(link);
    
    return card;
}

// Category Hero component - make sure this is being imported and used
export function CategoryHero(categoryName) {
    const hero = document.createElement('section');
    hero.className = 'category-hero';
    hero.innerHTML = `
        <div class="category-hero__content">
            <h1 class="category-hero__title">${categoryName}</h1>
        </div>
    `;
    return hero;
}