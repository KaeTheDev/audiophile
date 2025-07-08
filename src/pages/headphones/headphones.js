import { ProductCard } from "../../components/product-card/product-card.js";
import { fetchProductData } from "../../utils/fetchData.js";

document.addEventListener("DOMContentLoaded", () => {
  const productList = document.querySelector("#product-list");

  fetchProductData()
  .then((data) => {
        // 🔍 Filter for only headphones
        const headphones = data.filter((product) => product.category === "headphones");

         // ✅ Render each headphone product
        headphones.forEach((product) => {
          const card = ProductCard(product);
          productList.appendChild(card);
        });
  })
  .catch((error) => {
    console.error("❌ Failed to load headphones:", error);
  });
});