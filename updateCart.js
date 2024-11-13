const cartvalue = document.querySelector(".cartvalue");

export const updateCartValue = (cartProduct)=>{

    if(cartvalue){
        cartvalue.innerHTML=`<i class="ri-shopping-cart-fill"></i>&nbsp;&nbsp;&nbsp;${cartProduct.length}`;
    }
    
}