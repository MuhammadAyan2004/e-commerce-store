import { getCartProductFromLS } from "./getCartProduct";

export const updateCartProductTotal = ()=>{
    let localCartProducts = getCartProductFromLS();
    let initialValue = 0;
    let totalProductPrice = localCartProducts.reduce((accum, cureElem) =>{
        let prooductPrice = parseInt(cureElem.price) || 0;
        return accum + prooductPrice
    },initialValue);
    // console.log(totalProductPrice);

    let subTotal = document.querySelector(".productSubTotal");
    let finalPrice = document.querySelector(".productFinalTotal");

    subTotal.innerText = `$${totalProductPrice}`;
    finalPrice.innerText = `$${totalProductPrice + 50}`;
    if(totalProductPrice === 0){
        finalPrice.innerText = `$${totalProductPrice + 0}`;
    }
};
