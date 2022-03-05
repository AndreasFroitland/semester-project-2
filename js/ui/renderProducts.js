import createMenu from "../components/common/createMenu.js";
import { getUsername } from "../utils/storage.js";
import { getExistingCart } from "../utils/cartFunction.js";
export function renderProducts(productsToRender) {

createMenu();

const productsContainer = document.querySelector(".product-container");
const cartItems = getExistingCart();
  productsContainer.innerHTML = "";

  productsToRender.forEach(function (product) {

    const doesObjectExist = cartItems.find(function (inCart) {
      return parseInt(inCart.id) === product.id;
    });
      if (doesObjectExist) {
      }

    let editProduct = ``;
      const username = getUsername();
        if (username) {
        editProduct = `<a href="edit.html?id=${product.id}"><p class="edit-a">Edit</p></a>`;
      }

    if(product.image_url == null) {
    productsContainer.innerHTML += `<div class="product">
                                    <a href="detail.html?id=${product.id}"><p class="see-more-a">See more</p></a>
                                    ${editProduct}
                                    <div class="image-container">
                                    <a href="detail.html?id=${product.id}">
                                    <img src="http://localhost:5560${product.image.url}" alt="${product.image.alternativeText}">
                                    </a>
                                    </div>
                                    <h4>${product.title}</h4>
                                    <p class="product-price">Price: ${product.price} $</p>
                                    <div class="add-cart-container">
                                    <a id="${product.id}" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}"><p class="add-to-cart-a">Add to cart</p></a>
                                    </div>
                                    </div>
                                    `;}
    else if(product.image_url == "") {
    productsContainer.innerHTML += `<div class="product">
                                    <a href="detail.html?id=${product.id}"><p class="see-more-a">See more</p></a>
                                    ${editProduct}
                                    <div class="image-container">
                                    <a href="detail.html?id=${product.id}">
                                    <img src="http://localhost:5560${product.image.url}" alt="${product.image.alternativeText}">
                                    </a>
                                    </div>
                                    <h4>${product.title}</h4>
                                    <p class="product-price">Price: ${product.price} $</p>
                                    <div class="add-cart-container">
                                    <a id="${product.id}" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}"><p class="add-to-cart-a">Add to cart</p></a>
                                    </div>
                                    </div>
                                    `;}
    else if (product.image_url !== "") {
    productsContainer.innerHTML += `<div class="product">
                                    <a href="detail.html?id=${product.id}"><p class="see-more-a">See more</p></a>
                                    ${editProduct}
                                    <div class="image-container">
                                    <a href="detail.html?id=${product.id}">
                                    <img src="${product.image_url}" alt="Image of shoes">
                                    </a>
                                    </div>
                                    <h4>${product.title}</h4>
                                    <p class="product-price">Price: ${product.price} $</p>
                                    <div class="add-cart-container">
                                    <a id="${product.id}" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}"><p class="add-to-cart-a">Add to cart</p></a>
                                    </div>
                                    </div>
                                    `;}
                                  });

      const cartButton = document.querySelectorAll(".add-cart-container a");
      cartButton.forEach((button) => {
        button.addEventListener("click", handleClick);
      });
    
      function handleClick() {
        const id = this.dataset.id;
        const title = this.dataset.title;
        const price = this.dataset.price;
    
        const currentCart = getExistingCart();
        const productExists = currentCart.find(function (car) {
          return car.id === id;
        });
          if (productExists === undefined) {
            const product = { id: id, title: title, price: price };
            currentCart.push(product);
            saveCart(currentCart);
          }
          else {
            const newCart = currentCart.filter((car) => car.id !== id);
            saveCart(newCart);
          }
      }
    
      function saveCart(cart) {
        localStorage.setItem("cart products", JSON.stringify(cart));
      }
    }
