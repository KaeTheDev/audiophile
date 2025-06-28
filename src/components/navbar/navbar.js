export function Navbar() {
    const nav = document.createElement('header');
    nav.className = 'navbar';
    nav.innerHTML = `
      <nav class="navbar__container">
        <a href="./" class="navbar__logo">audiophile</a>
        <button class="navbar__toggle">☰</button>
        <ul class="navbar__links">
          <li><a href="./">Home</a></li>
          <li><a href="./headphones.html">Headphones</a></li>
          <li><a href="./speakers.html">Speakers</a></li>
          <li><a href="./earphones.html">Earphones</a></li>
        </ul>
        <button class="navbar__cart">🛒</button>
      </nav>
    `;
    return nav;
  }  