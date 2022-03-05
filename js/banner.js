import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";

const bannerUrl = baseUrl + "home";
const bannerContainer = document.querySelector(".banner-container");

async function getBanner(url){
    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

          bannerContainer.innerHTML += `
          <div class="banner-content">
          <img src="http://localhost:5560${json.hero_banner.url}">
          <a href="products.html">Click to shop</a>
          </div>
          `
        ;
    }

    catch (error) {
        console.log(error);
        displayMessage("error", error, ".banner-container");
    }
}

getBanner(bannerUrl);