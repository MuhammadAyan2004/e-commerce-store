import products from './api/product.json'; 
import { fetchQuantityFromLs } from './fetchQuantityFromLs.js';
import { getCartProductFromLS } from "./getCartProduct.js";
import { incrementDecrement } from './incrementDecrement.js';
import { removeCartProduct } from './removeCartProduct.js';
import { updateCartProductTotal } from './updateCartProductTotal.js';

let cartProduct = getCartProductFromLS();

let filterProduct = products.filter((currProd)=>{
    
   return cartProduct.some((currElem)=> currElem.id == currProd.id)
})
// console.log(filterProduct);

const cartElem = document.getElementById("productCartTemplate");
const templeteContainer = document.getElementById("productCartContainer");


const showCartProduct = ()=>{
    filterProduct.forEach((currProd)=>{
        const {Category, id, image, name, stock, price} = currProd

        let productClone = document.importNode(cartElem.content, true);

        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`)

        const lsActualData = fetchQuantityFromLs(id,price);

        productClone.querySelector("#category").textContent = Category;
        productClone.querySelector(".cartProductImage").src = image;
        productClone.querySelector(".productcartName").textContent = name;

        productClone.querySelector(".productCartPrice").textContent = lsActualData.price;
        productClone.querySelector("#numbers").textContent = lsActualData.quantity;
        productClone.querySelector("#removeCart").addEventListener("click",()=>{
            removeCartProduct(id);
        })
        productClone.querySelector(".quanta-btn").addEventListener("click",(event)=>{
            incrementDecrement(event,id,stock,price)
        })

        templeteContainer.appendChild(productClone)
    })
}


showCartProduct();

updateCartProductTotal()