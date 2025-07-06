export function ProductGallery(product) {
    console.log("is this being called at all?");
    const section = document.createElement('section');
    section.className = 'product-gallery';
  
    const [first, second, third] = product.gallery;

  
  
    section.innerHTML = `
      <div class="product-gallery__item">
        <img class="product-gallery__image" src="${first}" alt="${product.name} gallery image 1">
      </div>
      <div class="product-gallery__item">
        <img class="product-gallery__image" src="${second}" alt="${product.name} gallery image 2">
      </div>
      <div class="product-gallery__item">
        <img class="product-gallery__image" src="${third}" alt="${product.name} gallery image 3">
      </div>
    `;
  
    return section;
  }