export function Footer() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
  
    footer.innerHTML = `
      <div class="footer__container">
        <a href="./" class="footer__logo">audiophile</a>
  
        <nav class="footer__nav">
          <a href="./" class="footer__nav-link">Home</a>
          <a href="./headphones.html" class="footer__nav-link">Headphones</a>
          <a href="./speakers.html" class="footer__nav-link">Speakers</a>
          <a href="./earphones.html" class="footer__nav-link">Earphones</a>
        </nav>
  
        <p class="footer__text">
          Audiophile is an all-in-one stop to fulfill your audio needs. We’re a small team of music lovers and sound specialists devoted to helping you get the most out of personal audio. Come and visit our demo facility — we’re open 7 days a week.
        </p>
  
        <p class="footer__copyright">
          © 2024 Audiophile. All Rights Reserved.
        </p>
      </div>
    `;
    return footer;
  }