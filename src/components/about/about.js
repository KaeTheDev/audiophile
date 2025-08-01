export function About() {
  const section = document.createElement('section');
  section.className = 'about';
  section.innerHTML = `
    <div class="about__container">
      <div class="about__content">
        <h2 class="about__title">
          Bringing you the <span>best</span> audio gear
        </h2>
        <p class="about__description">
          Located at the heart of New York City, Audiophile is the
          premier store for high end headphones, earphones,
          speakers, and audio accessories. We have a
          large showroom and luxury demonstration rooms
          available for you to browse and experience a wide
          range of our products. Stop by our store to meet
          some of the fantastic people who make Audiophile
          the best place to buy your portable audio equipment.
        </p>
      </div>
      <picture class="about__image">
        <source media="(min-width: 1024px)" srcset="assets/shared/desktop/image-best-gear.jpg">
        <source media="(min-width: 768px)" srcset="assets/shared/tablet/image-best-gear.jpg">
        <img src="assets/shared/mobile/image-best-gear.jpg" alt="Man enjoying audio gear">
      </picture>
    </div>
  `;
  return section;
}