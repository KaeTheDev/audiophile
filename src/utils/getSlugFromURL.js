export function getSlugFromURL() {
    const path = window.location.pathname;
    const filename = path.split('/').pop(); // e.g. product-xx99-mark-two-headphones.html
    return filename.replace('product-', '').replace('.html', '');
  }