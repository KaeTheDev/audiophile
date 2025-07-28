# Frontend Mentor - Audiophile E-commerce Website Solution

This is my solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). The challenge helped me deepen my understanding of building reusable components, dynamic multi-page layouts, and SCSS styling with a real-world design system.

🔗 **Live Site:** [kaethedev.github.io/audiophile](https://kaethedev.github.io/audiophile/)  
🛠 **In Progress:** Turning this into a custom Shopify theme

---

## 📋 Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [Development Workflow](#development-workflow)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
- [Example Component](#example-component)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## 💡 Overview

### The Challenge

Users should be able to:

- View the optimal layout for all devices
- Interact with hover states on all buttons and links
- Add and remove items from the cart
- Adjust quantities in the cart
- Complete checkout with form validation
- View dynamic totals (subtotal, shipping, VAT, grand total)
- See an order confirmation after checkout
- **Bonus:** Preserve cart data using `localStorage`

---

### Screenshot

---<img width="1511" height="777" alt="Screenshot 2025-07-28 at 1 01 06 PM" src="https://github.com/user-attachments/assets/5d4f0e90-17ba-469d-8c83-99628f530383" />

<img width="991" height="806" alt="Screenshot 2025-07-28 at 1 01 50 PM" src="https://github.com/user-attachments/assets/dd8e00ec-693f-4948-bc8e-d0ed3fceafb8" />
<img width="501" height="773" alt="Screenshot 2025-07-28 at 1 02 11 PM" src="https://github.com/user-attachments/assets/218e7acc-936e-46b0-8054-a74296015461" />
----
## 🧠 My Process

### 🔧 Built With

- HTML5 + Semantic Markup  
- SCSS (with partials and BEM naming)  
- JavaScript (modular and reusable)  
- Vite (for dev server + build)  
- GitHub Pages (for deployment)  
- Flexbox + CSS Grid  
- Mobile-first responsive layout


### 🔁 Development Workflow

1. **Project Setup**  
   - Initialized with `Vite`  
   - Created `index.html`, `vite.config.js`, and SCSS partials  
   - Deployed to GitHub Pages for easy testing and sharing

2. **Page Structure**  
   - Created base pages: `index.html`, `headphones.html`, `speakers.html`, `earphones.html`, `checkout.html`, and product detail pages like `product-xx99-mark-one-headphones.html`

3. **Component-First Development**  
   - Built each component (Navbar, Hero, Product Card, Footer, etc.) as JavaScript functions  
   - Applied initial styling to ensure layout integrity  
   - Verified placement on correct pages

4. **Polish & Styling**  
   - Refined all SCSS styles to match the Figma design  
   - Implemented responsive behavior and hover states  
   - Used BEM methodology for class naming consistency

---

### ✨ What I Learned

- How to break down static designs into reusable, JavaScript-driven UI components
- Best practices for managing multi-page sites with Vite
- Leveraging `localStorage` for persistent cart state
- Structuring SCSS projects with partials and BEM for scalability
- Writing clean DOM-manipulation logic without external libraries

---

### 🔄 Continued Development

I'm currently:

- Adding user experience enhancements:
  - Cart modal auto-opens after adding an item
  - Checkout access is blocked unless the cart has items
- Running performance audits with Chrome Lighthouse
- Rebuilding this as a **custom Shopify theme** to learn Liquid and Shopify’s architecture

---

## 🧩 Example Component

Here’s an example of how I built a reusable component in JavaScript:

```js
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
  const links = nav.querySelector('.navbar__links');

  toggleBtn.addEventListener('click', () => {
    links.classList.toggle('is-open');
  });

  return nav;
}
```
### Useful resources

These helped me a lot during development:

- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) – Fun, interactive game for learning Flexbox.
- 🌽 [CSS Grid Garden](https://cssgridgarden.com/) – Another game that teaches CSS Grid concepts effectively.
- 📘 *Books by Laurence Lars Svekis* – Great reference for modern front-end development techniques.
- 📙 [LearnJavaScript.online](https://learnjavascript.online/) – Hands-on, interactive JavaScript course that helped reinforce JS fundamentals and DOM manipulation.


## Author

- Website - [KaeTheDev](https://www.starvingartistddllc.com)
- Frontend Mentor - [@KaeTheDev](https://www.frontendmentor.io/profile/kaethedev)
- Instagram - [@kaethedev](https://www.instagram.com/kaethedev/)
- Twitter - [@kaethedev](https://www.twitter.com/kaethedev)


## Acknowledgments

📜 This project includes a custom license. See the LICENSE file for details.
