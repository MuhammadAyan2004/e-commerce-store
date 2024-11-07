import { addToCart } from "./addToCart.js";
import { homeQuantityToogle } from "./homeQuantityToogle.js";
export const showProductContainer = (products) => {

const productContainer = document.getElementById("productcontainer");
const productTemplate = document.getElementById("productTemplate");


  if (!products) {
    return false;
  }

  products.forEach((curElem) => {
    const { id, Category, name, price, description, stock, image } = curElem;

    const tempClone = document.importNode(productTemplate.content, true);

    tempClone.querySelector("#cardValue").setAttribute("id",`card${id}`)
    tempClone.querySelector("#category").textContent = Category;
    tempClone.querySelector(".productName").textContent = name;
    tempClone.querySelector(".productImage").src = image;
    tempClone.querySelector(".productDescription").textContent = description;
    tempClone.querySelector(".productStock").textContent = stock;
    tempClone.querySelector(".productPrice").textContent = `$${price}`;
    tempClone.querySelector(".productActualPrice").textContent = `$${price * 2}`;

    tempClone.querySelector(".quanta-btn").addEventListener("click",(event)=>{
      homeQuantityToogle(event,id,stock)
    });
    tempClone.querySelector("#addToCart").addEventListener("click",(event)=>{
      addToCart(event,id,stock);
    })
    productContainer.appendChild(tempClone);
  });
};
