const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id : product.id,
            nombre : product.nombre,
            precio : product.precio,
        });
        console.log(carrito);
        saveLocal();
    });

});

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1>

    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerHTML = "X";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
       modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
    `;

    modalContainer.append(carritoContent)


    })

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalCompra = document.createElement("div")
    totalCompra.className = "total-content"
    totalCompra.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalCompra);

});

const saveLocal = () => {
localStorage.setItem("carrito", JSON.stringify (carrito));
}

