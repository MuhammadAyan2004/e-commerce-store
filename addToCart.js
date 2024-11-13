import { getCartProductFromLS } from "./getCartProduct.js";
import { showToast } from "./showToast.js";
export const addToCart = (event, id, stock) => {
    
    let arrLocalStorageProduct = getCartProductFromLS();

    const currProdElem = document.querySelector(`#card${id}`);
    let quantity = currProdElem.querySelector("#numbers").innerText;
    let price = currProdElem.querySelector(".productPrice").innerText;

    price = price.replace("$", "");

    let existingprod = arrLocalStorageProduct.find(
        (curElem) => curElem.id === id
    );

    if(existingprod && quantity > 1){
        quantity = Number(existingprod.quantity) + Number(quantity);
        price = price * quantity;
        let updatedCart = {id, quantity,price};

        updatedCart=arrLocalStorageProduct.map((curElem)=>{
            return curElem.id === id ? updatedCart : curElem;
        })
        // console.log(updatedCart);
        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
        showToast("add",id)
    }
    
    if(existingprod){
        return false
    }

    price = price * quantity;
    quantity = Number(quantity);

    arrLocalStorageProduct.push({ id, quantity, price });
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
    showToast("add",id)
    updateCartValue(arrLocalStorageProduct);
};
document.addEventListener("DOMContentLoaded", () => {
    getCartProductFromLS();
});