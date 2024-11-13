export function showToast(operation,id) {
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if(operation === "add"){
        toast.textContent = `product with ${id} has been added`
    }else if(operation === "delete"){
        toast.textContent = `product with ${id} has been deleted`
    }
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}