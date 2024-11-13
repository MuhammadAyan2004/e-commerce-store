import { getCartProductFromLS } from "./getCartProduct";

export const fetchQuantityFromLs = (id,price)=>{
    let cartProduct = getCartProductFromLS();

    let existingProduct = cartProduct.find((curProd)=> curProd.id===id);
    let quantity = 1

    if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }

    return { quantity, price}
}