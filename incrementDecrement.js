import { getCartProductFromLS } from "./getCartProduct";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event,id,stock,price)=>{

    const currentCardElem = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElem.querySelector("#numbers");
    const productPrice = currentCardElem.querySelector(".productCartPrice");

    let quantity =  1;
    let localstorageprice = 0;

    let localCartProducts = getCartProductFromLS();
    let existingProd = localCartProducts.find( (curprd)=> curprd.id === id )

    if(existingProd){
        quantity = existingProd.quantity;
        localstorageprice = existingProd.price
    }else{
        localstorageprice = price;
        // price = price;
    }

    if(event.target.id === "increase"){
        if(quantity < stock){
            quantity += 1;
         }else if(quantity === stock){
            quantity = stock;
            localstorageprice = price * stock
         }
        }
        if(event.target.id === "decrease"){
            if(quantity > 1){
                quantity -= 1;
            }
        }

        localstorageprice = price * quantity;
        localstorageprice = Number(localstorageprice.toFixed(2))
        let updatedCart = {id, quantity,price:localstorageprice};

        updatedCart=localCartProducts.map((curElem)=>{
            return curElem.id === id ? updatedCart : curElem;
        })
        // console.log(updatedCart);
        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

        productQuantity.innerText =quantity;
        productPrice.innerText = localstorageprice;

        
        updateCartProductTotal()
}
