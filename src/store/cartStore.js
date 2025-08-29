// src/store/cartStore.js
// ======================================================
// Central cart store – keeps data in memory, syncs to
// localStorage, and notifies the UI via 'cart:updated' and
// 'cart:itemAdded' events.
// ======================================================

const STORAGE_KEY = 'audiophile-cart';

// Load cart state from localStorage or fallback
let state = load();

// Totals and calculations
Object.defineProperty(state, 'subtotal', {
  get() {
    // Sum of all item prices multiplied by quantity
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },
});

Object.defineProperty(state, 'vat', {
  get() {
    // 20% VAT on subtotal
    return this.subtotal * 0.2;
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
    // Total including subtotal, VAT, and shipping
    return this.subtotal + this.vat + this.shipping;
  },
});

// Optionally keep old `total` (subtotal) property for compatibility
Object.defineProperty(state, 'total', {
  get() {
    return this.subtotal;
  },
});

function load() {
  try {
    // Attempt to load cart from localStorage
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { items: [] };
  } catch {
    // Fallback if parsing fails
    return { items: [] };
  }
}

function save() {
  // Save cart state to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  // Notify UI that cart has been updated
  document.dispatchEvent(new CustomEvent('cart:updated', { detail: state }));
}

// Base URL for assets (use Vite environment variable)
const base = import.meta.env.BASE_URL || '/';

// ────────────────
// Cart API
// ────────────────

export function addItem(product, qty = 1) {
  if (!product || !product.slug) {
    console.warn('[cartStore] addItem received bad product:', product);
    return;
  }

  // Resolve image URL safely
  let imageUrl = '';
  if (typeof product.image === 'string') {
    imageUrl = product.image;
  } else if (product.image && typeof product.image === 'object') {
    imageUrl = product.image.desktop || product.image.mobile || '';
  }

  // Compose cartImage path with base URL prefix
  const cartImage =
    product.cartImage ||
    (imageUrl.startsWith('/assets')
      ? `${base}${imageUrl.slice(1)}` // remove leading slash then prepend base
      : `${base}assets/cart/image-${product.slug}.jpg`);

  // Find existing cart line
  const line = state.items.find(i => i.slug === product.slug);

  if (line) {
    // Increase quantity if item already exists
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

  // Dispatch global event for toast notifications or other UI updates
  document.dispatchEvent(
    new CustomEvent('cart:itemAdded', { 
      detail: { product, qty, items: state.items } 
    })
  );
}

export function updateQty(slug, qty) {
  // Update quantity for a specific cart item
  const line = state.items.find(i => i.slug === slug);
  if (!line) return;
  line.qty = Math.max(1, qty); // Ensure qty is at least 1
  save();
}

export function removeItem(slug) {
  // Remove item from cart by slug
  state.items = state.items.filter(i => i.slug !== slug);
  save();
}

export function clearCart() {
  // Empty the entire cart
  state.items = [];
  save();
}

export function getState() {
  // Return current in-memory cart state
  return state;
}