import { getCartProductFromLS } from "./addToCart.js";
import data from './api/product.json'; // Import JSON data directly

function finalAddToCart() {
    console.log("Fetched data:", data);

    let cartProduct = getCartProductFromLS();

    // Filter products based on IDs in cartProduct
    let filterProducts = data.filter((curElem) => {
        return cartProduct.some(cartItem => cartItem.id === curElem.id); // Example condition
    });

    console.log("Filtered Products:", filterProducts);
}
