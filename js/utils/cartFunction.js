export function getExistingCart() {
    const cart = localStorage.getItem("cart products");
      if (cart === null) {
        return [];
      }
      else {
        return JSON.parse(cart);
      }
  }