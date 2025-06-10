import './scss/styles.scss';

import { createButton, chevronIcon } from './components/button/button.js';

const container = document.getElementById('button-container');

['outline', 'primary', 'link'].forEach(variant => {
  const icon = variant === 'link' ? chevronIcon : '';
  container.appendChild(createButton({ label: variant.toUpperCase(), variant, icon }));
});
