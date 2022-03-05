import { getUsername } from "../../utils/storage.js";
import logoutUser from "./logout.js"; 

export default function createMenu() {
 
    const { pathname } = document.location;
    const container = document.querySelector(".menu-container");
    const username = getUsername();

    let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;
    let productsLink = `<a href="products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a>`;
    let cartLink = `<a href="cart.html" class="${pathname === "/cart.html" ? "active" : ""}">Cart</a>`;
    let logOut = `<button>Logout</button>`

    if (username) {
        authLink = `<a href="add.html" class="${pathname === "/add.html" ? "active" : ""}">Add Product</a>
                    ${logOut}`;
                }

    container.innerHTML = `<div class="menu">
                                <a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Home</a>
                                ${productsLink}
                                ${cartLink}
                                ${authLink}
                           </div>`;
                        
                           logoutUser();        
                        }

   