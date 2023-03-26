import { headerHtml } from "../../../templates/header";
import { mainHtml } from "../../../templates/main";
import { Products } from "../../../data/products";

class appView {
  app: HTMLElement | null;
  constructor() {
    this.app = document.querySelector("#app") as HTMLElement;
  }
  renderUI(goods: Products) {
    if (this.app) {
      this.app.innerHTML = "";
      this.app.insertAdjacentHTML("afterbegin", headerHtml);
      this.app.insertAdjacentHTML("beforeend", mainHtml);
    }
    this.renderHeader();
    this.renderProducts(goods);
  }

  renderHeader() {
    const headerLogo=document.querySelector('.header__logo') as HTMLElement;
    headerLogo.innerHTML='<h1 class="logo__text">OnlineStore</h1>'
  }

  renderProducts(goods: Products) {
    const productsContainer = document.querySelector(
      "#products"
    ) as HTMLElement;
    productsContainer.innerHTML = "";
    if (goods.length > 0) {
      goods.forEach((element) => {
        const productCard = document.createElement("li");

        productCard.classList.add("item", "catalog__item");
        productCard.innerHTML = `
      <a class="item__link" href="./#product?id=${element.id}">
        <div class="item__image-container">
        <img class="item__image" src="${element.images[0]}"></img>
          <div class="item__description specification">
            <span class="specification__item">Brand: ${element.brand}</span>
            <span class="specification__item">Category: ${element.category}</span>
            <span class="specification__item">Rating: ${element.rating}</span>
            <span class="specification__item">Description: ${element.description}</span>
            <span class="specification__item">In stock: ${element.stock}</span>
          </div>
        </div>
        <h3 class="item__title">${element.title}</h3>
        <span class="item__price-number">US <span class="item__price-currency">$</span>${element.price}</span>
      </a>`;
        productsContainer.append(productCard);
      });
    } else {
      productsContainer.innerHTML =
        '<p class="not-found">No products found </p>';
    }
  }
}
export default appView;
