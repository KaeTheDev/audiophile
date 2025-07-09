import { ProductCard } from "../../components/product-card/product-card.js";
import { ProductCategories } from "../../components/product-categories/product-categories.js";
import { About } from "../../components/about/about.js";
import { fetchProductData } from "../../utils/fetchData.js";

document.addEventListener("DOMContentLoaded", async () => {
  const page = document.querySelector("#page");
  const productList = document.querySelector("#product-list");

  try {
    const data = await fetchProductData();

    // 1. Render Headphones product cards
    const headphones = data.filter((product) => product.category === "headphones");
    headphones.forEach((product) => {
      const card = ProductCard(product);
      productList.appendChild(card);
    });

    // 2. Render Product Categories
    const categories = ["headphones", "speakers", "earphones"].map((cat) => {
      const item = data.find((p) => p.category === cat);
      return {
        name: cat.charAt(0).toUpperCase() + cat.slice(1),
        image: item.categoryImage,
        link: `/${cat}.html`,
      };
    });
    const categoriesEl = ProductCategories(categories);
    page.appendChild(categoriesEl);

    // 3. Render About section
    page.appendChild(About());

  } catch (error) {
    console.error("❌ Failed to load headphones:", error);
  }
});