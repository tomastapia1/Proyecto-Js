const arrayDeCamaras = [
    { nombre: 'Camara 1', precio: 25000 },
    { nombre: 'Camara 2', precio: 28800 },
    { nombre: 'Camara 3', precio: 32000 },
    { nombre: 'Camara 4', precio: 53000 }
];

let carrito = [];
let total = 0;

let continuarAgregando = true;

while (continuarAgregando) {
    const seleccion = parseInt(prompt(
        "Agregar al carrito:\n1. Camara 1 - $25.000\n2. Camara 2 - $28.800\n3. Camara 3 - $32.000\n4. Camara 4 - $53.000"
    ));

    if (seleccion >= 1 && seleccion <= arrayDeCamaras.length) {
        const camaraSeleccionada = arrayDeCamaras[seleccion - 1];
        carrito.push(camaraSeleccionada);
        total += camaraSeleccionada.precio;

        let agregarOtro = prompt("Deseas agregar otra cámara? (si/no)").toLowerCase();

        while (agregarOtro !== 'si' && agregarOtro !== 'no') {
            agregarOtro = prompt("Por favor, ingresa 'si' o 'no' si deseas agregar otro producto.").toLowerCase();
        }

        if (agregarOtro !== 'si') {
            continuarAgregando = false;
        }
    } else {
        alert("Por favor, elija un número válido.");
    }
}

mostrarCarritoYTotal();

function mostrarCarritoYTotal() {
    let productosAgregados = "Productos agregados:\n";

    for (let i = 0; i < carrito.length; i++) {
        productosAgregados += carrito[i].nombre + " - Precio: " + carrito[i].precio + "\n";
    }

    productosAgregados += `Total: $${total} \nPresiona aceptar para finalizar la compra.`;

    alert(productosAgregados);
    alert('Gracias por tu compra!');
}