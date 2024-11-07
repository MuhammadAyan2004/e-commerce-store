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
        console.log(updatedCart);
        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    }
    
    if(existingprod){
        return false
    }

    price = price * quantity;
    quantity = Number(quantity);

    arrLocalStorageProduct.push({ id, quantity, price });
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);
};

const updateCartValue = (cartProduct) => {
    const cartvalue = document.querySelector(".cartvalue");
    cartvalue.innerHTML = `<i class="ri-shopping-cart-fill"></i>&nbsp;&nbsp;&nbsp;${cartProduct.length}`;
};

export const getCartProductFromLS = () => {
    let cartProduct = localStorage.getItem("cartProductLS");

    if (!cartProduct) {
        return [];
    }
    cartProduct = JSON.parse(cartProduct);
    updateCartValue(cartProduct);
    return cartProduct;
};
document.addEventListener("DOMContentLoaded", () => {
    getCartProductFromLS();
});