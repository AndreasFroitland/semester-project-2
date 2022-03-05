import displayMessage from "./components/common/displayMessage.js";
import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";
import { baseUrl } from "./settings/api.js";

  const url = baseUrl + "products";

  async function getProducts() {
    try {
      const response = await fetch(url);
      const products = await response.json();

      renderProducts(products);
      searchProducts(products);

    }
    catch (error) {
      console.log(error);
      displayMessage("error", "Can't find any products!", ".product-container");
    }
  }

  getProducts();