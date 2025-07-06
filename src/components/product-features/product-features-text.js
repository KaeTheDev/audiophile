export function ProductFeaturesText(product) {
  const section = document.createElement('div');
  section.className = 'product-features__text';

  section.innerHTML = `
    <h2>Features</h2>
    <p>${product.features.replace(/\n\n/g, '</p><p>')}</p>
  `;

  return section;
}