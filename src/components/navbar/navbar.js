export function Navbar() {
  const nav = document.createElement('header');
  nav.className = 'navbar';

  nav.innerHTML = `
    <nav class="navbar__container">
      <a href="./" class="navbar__logo">
        <img src="assets/shared/desktop/logo.svg" alt="audiophile logo" />
      </a>

      <button class="navbar__toggle" aria-label="Open Menu">
        <img src="assets/shared/tablet/icon-hamburger.svg" alt="" />
      </button>

      <ul class="navbar__links">
        <li><a href="./">Home</a></li>
        <li><a href="./headphones.html">Headphones</a></li>
        <li><a href="./speakers.html">Speakers</a></li>
        <li><a href="./earphones.html">Earphones</a></li>
      </ul>

      <button id="cart-toggle" class="navbar__cart" aria-label="Cart">
        <img src="assets/shared/desktop/icon-cart.svg" alt="" />
      </button>
    </nav>
  `;

    const toggleBtn = nav.querySelector('.navbar__toggle');
    const links     = nav.querySelector('.navbar__links');
  
    toggleBtn.addEventListener('click', () => {
      links.classList.toggle('is-open');   // <ul> switches between hidden / shown
    });

  return nav;
}
