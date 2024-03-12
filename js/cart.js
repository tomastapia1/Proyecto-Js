document.addEventListener('DOMContentLoaded', () => {
    const cartList = document.getElementById('cart-list');
    const totalElement = document.getElementById('total');
    const buyButton = document.getElementById('buy-button');
    const clearButton = document.getElementById('clear-button');

    // Recuperoo e carrito desde el almacenamiento local 
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Muetra los productos en el carrito
    displayCart();

    function displayCart() {
        cartList.innerHTML = '';
        let total = 0;

        cart.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
            cartList.appendChild(listItem);

            total += product.price;
        });

        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    buyButton.addEventListener('click', () => {
        // realizar acciones adicionales al realizar la compra
        alert('Compra realizada con éxito!');
        
        // esto limpia el carrito y actualiza lapagina
        cart = [];
        updateCart();
        displayCart();
    });

    clearButton.addEventListener('click', () => {
        // esto para impiar el carrito y actualizar 
        cart = [];
        updateCart();
        displayCart();
    });

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        document.getElementById('contador-productos').textContent = cart.length;
    }
});