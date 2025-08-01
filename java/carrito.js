
function handleCart(){
    const CARRITO =JSON.parse(localStorage.getItem('producto')) || [];
    const TOTAL =localStorage.getItem('total') || 0;

    const carritoContainer = document.getElementById('itemProducts');
    
    if (CARRITO.length === 0) {
        carritoContainer.innerHTML= '<p>No hay productos en el carrito.</p>';
        return;
    }

    let tabla = document.createElement('table')
    tabla.classList.add('table');

    let encabezado=`
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>  
                </thead>
                `;

    let cuerpo = '<tbody>';

    CARRITO.forEach(producto => {
        cuerpo += `
                    <tr>
                        <td>${producto.title}</td>
                        <td>${producto.cantidad}</td>
                        <td>$${producto.price}</td>
                    </tr>
                `;

        
    });

    cuerpo += '</tbody>';

    tabla.innerHTML= encabezado + cuerpo;

    carritoContainer.appendChild(tabla);

    let precioFinal = document.createElement('p')
    precioFinal.innerText = `Total a pagar: $${TOTAL}`;

    carritoContainer.appendChild(precioFinal);
    
}

function limpiarCarrito () {
    if (confirm ("¿Estas seguro que deseas vaciar el carrito?")){

        localStorage.removeItem('productos');
        localStorage.removeItem('total');

        const carritoContainer = document.getElementById('itemProducts');
        carritoContainer.innerHTML= '';

        document.querySelector('.count').innerText = '0';
    }
}

//Ejecuta la función antes de cargar el DOM
document.addEventListener('DOMContentLoaded',handleCart);

//Ejecuta la función al finalizar el DOM
Window.limpiarCarrito = limpiarCarrito;