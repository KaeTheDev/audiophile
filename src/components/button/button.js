// Define your chevron icon as a constant
const chevronIcon = `
  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.322 1l5 5-5 5" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd"/>
  </svg>
`;

// Create button function
export function createButton({ label, variant = 'primary', icon = '' }) {
  const btn = document.createElement('button');
  btn.className = `btn btn--${variant}`;
  btn.type = 'button';
  btn.innerHTML = `
    <span class="btn__label">${label}</span>
    ${icon ? `<span class="btn__icon">${icon}</span>` : ''}
  `;
  return btn;
}

// Optional: export the icon for use elsewhere
export { chevronIcon };