import displayMessage from "./components/common/displayMessage.js";
import { baseUrl } from "./settings/api.js";

const featuredProducts = baseUrl + "products";
const featuredContainer = document.querySelector(".featured-container");

async function getFeatured(url){
    try {
        const response = await fetch(url);
        const featureds = await response.json();

        console.log(featureds);

        featureds.forEach(function(featured) {
          if(featured.featured == true && featured.image_url == null){
            featuredContainer.innerHTML += `
            <div class="featured-content">
            <a href="detail.html?id=${featured.id}">
            <img src="http://localhost:5560${featured.image.url}" alt="${featured.image.alternativeText}">
            <h2>${featured.title}</h2></a>
            </div>`
          }
          else if(featured.featured == true && featured.image_url == ""){
            featuredContainer.innerHTML += `
            <div class="featured-content">
            <a href="detail.html?id=${featured.id}">
            <img src="http://localhost:5560${featured.image.url}" alt="${featured.image.alternativeText}">
            <h2>${featured.title}</h2></a>
            </div>`
          }
          else if(featured.featured == true && featured.image_url !== ""){
            featuredContainer.innerHTML += `
            <div class="featured-content">
            <a href="detail.html?id=${featured.id}">
            <img src="${featured.image_url}" alt="">
            <h2>${featured.title}</h2></a>
            </div>`
          }
          else {
            featuredContainer.innerHTML += ``
          }
          })
        }

    catch (error) {
      console.log(error);
      displayMessage("error", "Can't find any products!", ".featured-content");
    }
}

getFeatured(featuredProducts);