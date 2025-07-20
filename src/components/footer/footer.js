export function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer__container">
      <a href="./" class="footer__logo">
        <img src="/audiophile/assets/shared/desktop/logo.svg" alt="Audiophile" />
      </a>
      <nav class="footer__nav">
        <a href="./" class="footer__nav-link">HOME</a>
        <a href="./headphones.html" class="footer__nav-link">HEADPHONES</a>
        <a href="./speakers.html" class="footer__nav-link">SPEAKERS</a>
        <a href="./earphones.html" class="footer__nav-link">EARPHONES</a>
      </nav>
      <p class="footer__text">
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
      </p>
      <p class="footer__copyright">
        Copyright 2021. All Rights Reserved
      </p>
      <div class="footer__social">
        <a href="#" class="footer__social-link">
          <img src="/audiophile/assets/shared/desktop/icon-facebook.svg" alt="Facebook" />
        </a>
        <a href="#" class="footer__social-link">
          <img src="/audiophile/assets/shared/desktop/icon-twitter.svg" alt="Twitter" />
        </a>
        <a href="#" class="footer__social-link">
          <img src="/audiophile/assets/shared/desktop/icon-instagram.svg" alt="Instagram" />
        </a>
      </div>
    </div>
  `;
  return footer;
}