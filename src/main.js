import './scss/styles.scss';
import '../public/styles/main.scss';

import { Navbar } from './components/navbar/navbar.js';

const app = document.querySelector('#app');
app.appendChild(Navbar());
