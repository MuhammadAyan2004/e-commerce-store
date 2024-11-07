export const homeQuantityToogle = (event, id, stock)=>{

const currentCardElem = document.querySelector(`#card${id}`);
// console.log(currentCardElem);

const productQuantity = currentCardElem.querySelector("#numbers");
// console.log(productQuantity);

let quantity = parseInt(productQuantity.getAttribute("data-quantity")) ||1;

if(event.target.id === "increase"){
if(quantity < stock){
    quantity += 1;
 }else if(quantity === stock){
    quantity = stock;
 }
}
if(event.target.id === "decrease"){
    if(quantity > 1){
        quantity -= 1;
    }
}
productQuantity.innerHTML = quantity;
productQuantity.setAttribute("data-quantity",quantity);
return quantity;
};