export function ProductGallery(product) {
  const section = document.createElement('section');
  section.className = 'product-gallery';
  
  // Extract product slug from name or use a mapping
  const productSlug = getProductSlug(product.name);
  
  // Generate responsive image sources
  const galleryImages = [
    {
      mobile: `/audiophile/assets/${productSlug}/mobile/image-gallery-1.jpg`,
      tablet: `/audiophile/assets/${productSlug}/tablet/image-gallery-1.jpg`,
      desktop: `/audiophile/assets/${productSlug}/desktop/image-gallery-1.jpg`,
      alt: `${product.name} gallery image 1`
    },
    {
      mobile: `/audiophile/assets/${productSlug}/mobile/image-gallery-2.jpg`,
      tablet: `/audiophile/assets/${productSlug}/tablet/image-gallery-2.jpg`,
      desktop: `/audiophile/assets/${productSlug}/desktop/image-gallery-2.jpg`,
      alt: `${product.name} gallery image 2`
    },
    {
      mobile: `/audiophile/assets/${productSlug}/mobile/image-gallery-3.jpg`,
      tablet: `/audiophile/assets/${productSlug}/tablet/image-gallery-3.jpg`,
      desktop: `/audiophile/assets/${productSlug}/desktop/image-gallery-3.jpg`,
      alt: `${product.name} gallery image 3`
    }
  ];
  
  // Create gallery HTML with responsive images
  const galleryHTML = galleryImages.map((img, index) => `
    <div class="product-gallery__item">
      <picture>
        <source media="(min-width: 1024px)" srcset="${img.desktop}">
        <source media="(min-width: 768px)" srcset="${img.tablet}">
        <img class="product-gallery__image" src="${img.mobile}" alt="${img.alt}">
      </picture>
    </div>
  `).join('');
  
  section.innerHTML = galleryHTML;
  return section;
}

// Helper function to convert product name to slug
function getProductSlug(productName) {
  const slugMap = {
    'XX99 Mark I Headphones': 'product-xx99-mark-one-headphones',
    'XX99 Mark II Headphones': 'product-xx99-mark-two-headphones',
    'XX59 Headphones': 'product-xx59-headphones',
    'YX1 Wireless Earphones': 'product-yx1-earphones',
    'ZX7 Speaker': 'product-zx7-speaker',
    'ZX9 Speaker': 'product-zx9-speaker'
  };
  
  return slugMap[productName] || productName.toLowerCase().replace(/\s+/g, '-');
}