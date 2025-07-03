export function Hero() {
    const section = document.createElement("section");
    section.className = "hero";
  
    section.innerHTML = `
      <p class="hero__overline">New Product</p>
      <h1 class="hero__title">XX99 Mark II Headphones</h1>
      <p class="hero__description">
        Experience natural, lifelike audio and exceptional build quality.
      </p>
      <button class="button button--primary">See Product</button>
    `;
  
    return section;
  }