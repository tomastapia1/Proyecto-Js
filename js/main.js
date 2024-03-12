const products = [
    { name: 'Camara 1', price: 25000, img: './img/camara1.webp' },
    { name: 'Camara 2', price: 28800, img: './img/camara2.webp' },
    { name: 'Camara 3', price: 32000, img: './img/camara3.webp' },
    { name: 'Camara 4', price: 53000, img: './img/camara4.webp' },
    { name: 'Camara 5', price: 63000, img: './img/camara5.webp' },
    { name: 'Camara 6', price: 92000, img: './img/camara6.webp' }
];

let cardsContainer = document.querySelector('.container-items');
let cart = []; // este array es para guardar ls productos en el carrito

products.forEach(x => {
    let newCard = document.createElement('div');
    newCard.classList.add('item')

    newCard.innerHTML = `
        <figure>
            <img src="${x.img}" alt="#"/>
        </figure>
        <div class="info-product">
            <h2>${x.name}</h2>
            <p class="price">$ ${x.price}</p>
            <button class="btn-add-cart" data-name="${x.name}" data-price="${x.price}">Añadir al carrito</button>
        </div>
    `

    newCard.querySelector('.btn-add-cart').addEventListener('click', addToCart);
    cardsContainer.appendChild(newCard);
});

function addToCart(event) {
    const productName = event.target.dataset.name;
    const productPrice = parseFloat(event.target.dataset.price);
    
    // Agregoo el producto al carrit
    cart.push({ name: productName, price: productPrice });
    
    // actualiza el contador del carrito y el almacenamiento local
    cartCount = cart.length;
    updateCart();
}

function updateCart() {
    document.getElementById('contador-productos').textContent = cartCount;
    localStorage.setItem('cart', JSON.stringify(cart));
}   





