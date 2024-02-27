const arrayDeCamaras = [
    { nombre: 'Camara 1', precio: 25000 },
    { nombre: 'Camara 2', precio: 28800 },
    { nombre: 'Camara 3', precio: 32000 },
    { nombre: 'Camara 4', precio: 53000 }
];

let carrito = [];
let total = 0;

function agregarAlCarrito(seleccion) {
    const camaraSeleccionada = arrayDeCamaras.find((camara, index) => index + 1 === seleccion);
    //Use find para encontrar la camara seleccionada en arrayDeCamaras

    //Este if es para verificar si la camara existe se ejecuta el if
    if (camaraSeleccionada) {
        carrito.push(camaraSeleccionada); 
        total += camaraSeleccionada.precio; 
        return true;
    }

    return false;
}

function deseaAgregarOtro() {
    let agregarOtro = prompt("Deseas agregar otra cámara? (si/no)").toLowerCase(); //.toLowerCase convierte todo lo ingresa a minusculas

    while (agregarOtro !== 'si' && agregarOtro !== 'no') {
        agregarOtro = prompt("Por favor, ingresa 'si' o 'no' si deseas agregar otro producto.").toLowerCase();
    }

    return agregarOtro === 'si';
}



function mostrarCarritoYTotal() {
    let productosAgregados = "Productos agregados:\n";

    carrito.forEach((camara) => {
        productosAgregados += `${camara.nombre} - Precio: ${camara.precio}\n`; // 
    });

    productosAgregados += `Total: $${total} \nPresiona aceptar para finalizar la compra.`;

    alert(productosAgregados); 
    alert('Gracias por tu compra!');
}


// Aca comienza el programa👇
let continuarAgregando = true;

while (continuarAgregando) { 

    
    const seleccion = parseInt(prompt(
        "Agregar al carrito:\n" +
        arrayDeCamaras.map((camara, index) => `${index + 1}. ${camara.nombre} - $${camara.precio}`).join('\n')
    )); 
    
    
    if (seleccion >= 1 && seleccion <= arrayDeCamaras.length) {
    

        agregarAlCarrito(seleccion); 
        continuarAgregando = deseaAgregarOtro(); 

    } else { 
        alert("Por favor, elija un número válido.");
    }
}

mostrarCarritoYTotal();
