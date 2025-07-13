// src/store/cartStore.js
// ======================================================
// Central cart store  –  keeps data in memory, syncs to
// localStorage, and notifies the UI via 'cart:updated'.
// ======================================================

const STORAGE_KEY = 'audiophile-cart';

// ----------  state  ----------
let state = load();

// Attach a live "total" getter so any code can read
// getState().total and always get the latest subtotal.
Object.defineProperty(state, 'total', {
  get() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },
});

// ----------  persistence helpers  ----------
function load() {
  try {
    return (
      JSON.parse(localStorage.getItem(STORAGE_KEY)) || { items: [] }
    );
  } catch {
    return { items: [] };
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  document.dispatchEvent(
    new CustomEvent('cart:updated', { detail: state })
  );
}

// ----------  public API  ----------
export function addItem(product, qty = 1) {
  const line = state.items.find(i => i.slug === product.slug);
  if (line) line.qty += qty;
  else state.items.push({ ...product, qty });
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
  return state; // contains .items and live .total getter
}
