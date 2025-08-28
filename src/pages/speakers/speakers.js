import {
  ProductCard,
  CategoryHero,
} from "../../components/product-card/product-card.js";
import { ProductCategories } from "../../components/product-categories/product-categories.js";
import { About } from "../../components/about/about.js";
import { fetchProductData } from "../../utils/fetchData.js";

document.addEventListener("DOMContentLoaded", async () => {
  const page = document.querySelector("#page");
  const productList = document.querySelector("#product-list");

  try {
    const data = await fetchProductData();

    // 1. Add Category Hero FIRST
    const hero = CategoryHero("Speakers");
    page.insertBefore(hero, productList);

    // 2. Filter and sort speakers in correct order: ZX9, ZX7
    const speakersOrder = ["zx9-speaker", "zx7-speaker"];

    const speakers = data
      .filter((product) => product.category === "speakers")
      .sort((a, b) => {
        const aIndex = speakersOrder.indexOf(a.slug);
        const bIndex = speakersOrder.indexOf(b.slug);
        return aIndex - bIndex;
      });

    // 3. Render sorted speakers with zigzag layout
    speakers.forEach((product, index) => {
      const card = ProductCard(product, index);
      productList.appendChild(card);
    });

    // 4. Render Product Categories - FIXED
    const categories = [
      {
        name: "Headphones",
        slug: "xx99-mark-one-headphones",
        link: "/headphones.html",
      },
      { name: "Speakers", slug: "zx9-speaker", link: "/speakers.html" },
      { name: "Earphones", slug: "yx1-earphones", link: "/earphones.html" },
    ].map((cat) => {
      const item = data.find((product) => product.slug === cat.slug);
      return {
        name: cat.name,
        image: item.categoryImage,
        link: cat.link,
      };
    });
    const categoriesEl = ProductCategories(categories);
    page.appendChild(categoriesEl);

    // 5. Render About section
    page.appendChild(About());
  } catch (error) {
    console.error("❌ Failed to load speakers:", error);
  }
});
