alert ("Bienvenido a Watch Argentina");

// Establecimiento de la función "datosCliente" para saber los datos del comprador y de entrega
//momentáneamente se ingresa esa información por Prompt hasta que sepamos cómo incluir eso en el HTML o sea que el submit de un formulario de datos se asigne a los objetos
function datosCliente (nombre, apellido, celular, direccion, localidad, codigoPostal) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.celular = celular;
    this.direccion = direccion;
    this.localidad = localidad;
    this.codigoPostal = codigoPostal;
}

// Pido datos al cliente y ejecuto función para validar su ingreso
let nombre = prompt ("Ingrese su nombre");
function validarDatos(nombre) {
    if (nombre = "") {
        alert ("ingrese un nombre válido");
    }
}
let apellido = prompt ("Ingrese su apellido");
function validarDatos(apellido) {
    if (apellido = "") {
        alert ("Ingrese un apellido válido");
    }
}
let celular = prompt ("Ingrese su número de teléfono móvil");
function validarDatos(celular) {
    if ((celular = "") || (celular != Number)) {
        alert ("Ingrese un número de celular válido");
    }
}
let direccion = prompt ("Ingrese su dirección");
function validarDatos(direccion) {
    if (direccion = "") {
        alert ("Ingrese una dirección válida");
    }
}
let localidad = prompt ("Ingrese su localidad");
function validarDatos(localidad) {
    if (localidad = "") {
        alert ("Ingrese una localidad válida");
    }
}
let codigopostal = prompt ("Ingrese su código postal");
function validarDatos(codigoPostal) {
    if ((codigoPostal = "") || (codigoPostal != Number)) {
        alert ("Ingrese un número de código postal válido");
    }
}

//carrito de compras
const carrito = [];

let total = 0;


function renderizarCarrito() {
    let cards = document.getElementById('cards'); 

    baseDeDatos.forEach (e) => {
        console.log(e)
    
            //CARDS -- antes las tenía en el HTML pero las traja a JAVASCRIPT para recorrerlas con el forEach y poder armar el carrito
    let productoHTML = '

    <div class="card col-xl-4 col-lg-4 col-md-6 col-sm-12" style="width: 18rem;">
    <img src="${e.img}" class="card-img-top" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${e.nombre}</h5>
        <p class="card-text">Rolex Deep Sea, ideal para realizar buceo con gran estilo. Profundidad hasta 100 metros.</p>
        <p>${e.precio}</p>
        <a href="#" class="btn btn-primary"  onClick="agregarProductos(${producto.id})">¡Lo merezco!</a>
    </div>
    </div>
'
cards.innerHTML += productoHTML
        }};
        




    }}
}

renderizarCarrito ();

function agregarProductos (id) {

    let producto = baseDeDatos.find(producto => producto.id == id);
    console.log (producto);

}

//función para un pedido
function pedido() {
    this.cliente = undefined;
    this.items = [];
    this.total = 0;
    let fecha = new Date();
    fecha = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
    this.fecha = fecha;
}

function agregarProducto (id) {
    let compraProducto = producto.find(descripcion => descripcion.id == id);
    let productoEnCarrito = carritoDeCompra.find(descripcion => descripcion.id == id);
        if(productoEnCarrito) {
            productoEnCarrito.cantidad ++ ; 
        }else {
            descripcion.cantidad = 1;
            carritoDeCompra.push(descripcion);
            console.log(carritoDeCompra);
        }    
}
