import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { getExistingCart } from "./utils/cartFunction.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const cartItems = getExistingCart();

if (!id) {
    document.location.href = "/";
}

const productUrl = baseUrl + "products/" + id;
console.log(productUrl);

(async function () {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        document.title = details.title;

        const container = document.querySelector(".detail-container");

        const doesObjectExist = cartItems.find(function (inCart) {
            return parseInt(inCart.id) === details.id;
          });
            if (doesObjectExist) {
            }

        if(details.image_url == null) {
        container.innerHTML = `<div class="detail-content-image">
                               <img src="http://localhost:5560${details.image.url}" alt="${details.image.alternativeText}">
                               </div>
                               <div class="detail-content-text">
                               <h1>${details.title}</h1>
                               <p>${details.description}</p>
                               </div>
                               <div class="detail-content-info">
                               <p>Price: ${details.price}</p>
                               <a id="${details.id}" data-id="${details.id}" data-title="${details.title}" data-price="${details.price}"><p class="add-to-cart-a">Add to cart</p></a>
                               </div>
                               </div>`;}

        else if(details.image_url == "") {
        container.innerHTML = `<div class="detail-content-image">
                               <img src="http://localhost:5560${details.image.url}" alt="${details.image.alternativeText}">
                               </div>
                               <div class="detail-content-text">
                               <h1>${details.title}</h1>
                               <p>${details.description}</p>
                               </div>
                               <div class="detail-content-info">
                               <p>Price: ${details.price}</p>
                               <a id="${details.id}" data-id="${details.id}" data-title="${details.title}" data-price="${details.price}"><p class="add-to-cart-a">Add to cart</p></a>
                               </div>
                               </div>`;}

        else if(details.image_url !== "") {
        container.innerHTML = `<div class="detail-content-image">
                               <img src="${details.image_url}" alt="Image of shoes">
                               </div>
                               <div class="detail-content-text">
                               <h1>${details.title}</h1>
                               <p>${details.description}</p>
                               </div>
                               <div class="detail-content-info">
                               <p>Price: ${details.price}</p>
                               <a id="${details.id}" data-id="${details.id}" data-title="${details.title}" data-price="${details.price}"><p class="add-to-cart-a">Add to cart</p></a>
                               </div>
                               </div>`;}

                               const cartButton = document.querySelectorAll(".detail-content-info a");
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
        
    }   catch (error) {
        displayMessage("error", error, ".detail-container");
    }
   }
  )
()
;
