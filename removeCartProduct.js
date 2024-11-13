import { getCartProductFromLS } from "./getCartProduct";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const removeCartProduct = (id)=>{
    let cartProduct = getCartProductFromLS();

    cartProduct = cartProduct.filter((curProd) => curProd.id !== id)


    localStorage.setItem("cartProductLS", JSON.stringify(cartProduct));

    let removeDiv = document.getElementById(`card${id}`)

    if(removeDiv){
        removeDiv.remove()
        showToast("delete",id)
    }
    updateCartValue(cartProduct);
    updateCartProductTotal()
}