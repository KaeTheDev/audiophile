// src/store/cartStore.js
// ======================================================
// Central cart store – keeps data in memory, syncs to
// localStorage, and notifies the UI via 'cart:updated'.
// ======================================================

const STORAGE_KEY = 'audiophile-cart';

// Load cart state from localStorage or fallback
let state = load();

// Totals and calculations
Object.defineProperty(state, 'subtotal', {
  get() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },
});

Object.defineProperty(state, 'vat', {
  get() {
    return this.subtotal * 0.2;   // 20% VAT
  },
});

Object.defineProperty(state, 'shipping', {
  get() {
    // Only charge shipping if cart contains items
    return this.subtotal > 0 ? 50 : 0;
  },
});

Object.defineProperty(state, 'grandTotal', {
  get() {
    return this.subtotal + this.vat + this.shipping;
  },
});

// Optionally keep your old `total` (subtotal) property for compatibility
Object.defineProperty(state, 'total', {
  get() {
    return this.subtotal;
  },
});

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { items: [] };
  } catch {
    return { items: [] };
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  document.dispatchEvent(new CustomEvent('cart:updated', { detail: state }));
}

// Use Vite base URL environment variable
const base = import.meta.env.BASE_URL || '/';

// Add or update cart item
export function addItem(product, qty = 1) {
  if (!product || !product.slug) {
    console.warn('[cartStore] addItem received bad product:', product);
    return;
  }

  // Resolve imageUrl string safely
  let imageUrl = '';
  if (typeof product.image === 'string') {
    imageUrl = product.image;
  } else if (typeof product.image === 'object' && product.image !== null) {
    imageUrl = product.image.desktop || product.image.mobile || '';
  }

  // Compose cartImage path with base URL prefix
  const cartImage =
    product.cartImage ||
    (imageUrl.startsWith('/assets')
      ? `${base}${imageUrl.slice(1)}`  // remove leading slash from imageUrl then prepend base
      : `${base}assets/cart/image-${product.slug}.jpg`);

  // Find existing cart line
  const line = state.items.find(i => i.slug === product.slug);

  if (line) {
    line.qty += qty;
  } else {
    // Save only needed product props plus cartImage and qty
    state.items.push({ 
      slug: product.slug,
      name: product.name,
      price: product.price,
      cartImage,
      image: imageUrl,
      qty,
    });
  }

  save();
}

export function updateQty(slug, qty) {
  const line = state.items.find(i => i.slug === slug);
  if (!line) return;
  line.qty = Math.max(1, qty);
  save();
}

export function removeItem(slug) {
  state.items = state.items.filter(i => i.slug !== slug);
  save();
}

export function clearCart() {
  state.items = [];
  save();
}

export function getState() {
  return state;
}