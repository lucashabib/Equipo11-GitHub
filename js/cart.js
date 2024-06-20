document.addEventListener("DOMContentLoaded", function () {

    let email = localStorage.email;
    console.log(email);


    if (email !== null) {
        let login = document.querySelector('.login-link');
    }

    let Items = JSON.parse(localStorage.getItem('cart')) || [];
    let contenedor = document.querySelector('.contenedor_carritoplay');

    if (Items.length === 0) {
        contenedor.innerHTML = "<p>Su carrito está vacío</p>";
    } else {
        var contenidoHTML = ''; 
        for (let i = 0; i < Items.length; i++) {
            let id = Items[i];
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(function(res) {
                    return res.json();
                })
                .then(function(product) {
                    console.log(product);

                    contenidoHTML += `
                        <div class="contenedor_carritofotos">
                            <img src="${product.image}" alt="${product.title}">
                            <h3 class="producto_carritos">${product.title}</h3>
                            <p class="precio_carritos">$${product.price}</p>
                        </div>
                    `;



                    if (i === Items.length - 1) {
                        contenidoHTML += `
                            <button class="finalizar-compra" onclick="finalizarCompra()">Finalizar Compra</button>
                        `;
                        contenedor.innerHTML = contenidoHTML; 
                    }
                })
                .catch(function(e) {
                    console.error('Ha ocurrido un error con la seleccion del producto:', e);
                });
        }
    }
});


function finalizarCompra() {
    localStorage.removeItem('cart');
    alert('Gracias por su compra');
    location.href = 'index.html';
}
