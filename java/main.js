document.addEventListener('DOMContentLoaded', () => {
    let carrito = [];
    let precio = 0;

    let tarjetas = document.querySelectorAll('.tarjeta');
    //console.log('tarjetas', tarjetas);
    tarjetas.forEach(tarjeta => {

        let btnClick=tarjeta.querySelector('button');
        const productTitle = tarjeta.querySelector('h3').textContent;
        const productP = tarjeta.querySelector('p:last-child');
        const productPrice = productP ? productP.textContent.replace ('Precio: $', ''): '0';

        btnClick.addEventListener('click', () => {
            //console.log(tarjeta)
            const product = {
                title: productTitle,
                price: productPrice,
                cantidad:1
            };
            console.log (product)
            carrito.push(product);
            precio += parseFloat(productPrice);

            localStorage.setItem('producto',JSON.stringify(carrito));
            localStorage.setItem('total',precio);

            document.querySelector('.count').innerText = carrito.length;
        })

    })
})