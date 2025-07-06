// src/utils/fetchData.js
export async function fetchProductData() {
    const response = await fetch('/audiophile/data.json');
    const data = await response.json();
    return data;
  }