import { ProductCard, CategoryHero } from '../../components/product-card/product-card.js';
import { ProductCategories } from "../../components/product-categories/product-categories.js";
import { About } from "../../components/about/about.js";
import { fetchProductData } from "../../utils/fetchData.js";

document.addEventListener("DOMContentLoaded", async () => {
    const page = document.querySelector("#page");
    const productList = document.querySelector("#product-list");
    
    try {
        const data = await fetchProductData();
        
        // 1. Add Category Hero FIRST
        const hero = CategoryHero('Headphones');
        page.insertBefore(hero, productList);
        
        // 2. Filter and sort headphones in correct order: Mark II, Mark I, XX59
        const headphonesOrder = [
            'xx99-mark-two-headphones',
            'xx99-mark-one-headphones', 
            'xx59-headphones'
        ];
        
        const headphones = data
            .filter((product) => product.category === "headphones")
            .sort((a, b) => {
                const aIndex = headphonesOrder.indexOf(a.slug);
                const bIndex = headphonesOrder.indexOf(b.slug);
                return aIndex - bIndex;
            });
        
        // 3. Render sorted headphones with zigzag layout
        headphones.forEach((product, index) => {
            const card = ProductCard(product, index);
            productList.appendChild(card);
        });
        
        // 4. Render Product Categories
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
        
        // 5. Render About section
        page.appendChild(About());
        
    } catch (error) {
        console.error("❌ Failed to load headphones:", error);
    }
});