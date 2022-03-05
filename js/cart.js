import { getExistingCart } from "./utils/cartFunction.js";

  const cartContainer = document.querySelector(".cart-container");
  let carts = getExistingCart();

  function renderCart() {
    cartContainer.innerHTML = "";

    if (carts.length === 0) {
      cartContainer.innerHTML = "Cart is empty!";
    }

    carts.forEach((cart) => {
      cartContainer.innerHTML +=
        `<div class="cart-content">
        <h2>Name: ${cart.title}</h2>
        <p>Price: ${cart.price}</p>
        </div>`;
    })
  }

  const clearCart = document.querySelector(".cart-container button");

  clearCart.onclick = function () {
    localStorage.removeItem("cart products");
    cartContainer.innerHTML = "Cart cleared!";
  }

  renderCart();