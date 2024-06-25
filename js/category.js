document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    fetchProducts(category);

    function fetchProducts(category) {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(function(res) {
                return res.json();
            })
            .then(function(info) {
                console.log(info);

                let productContainer = document.querySelector('.Contenedor_Productos');
                productContainer.innerHTML = '';

                info.forEach(function(product) {
                    let productHTML = `
                        <div class="Contenedor_Items">
                            <img src="${product.image}" class="Imagen_Electronica" alt="${product.title}">
                            <h3>${product.title}</h3>
                            <p>$${product.price.toFixed(2)}</p>
                            <a id="Detalles_Producto" href="producto.html?id=${product.id}">Ver Más Sobre este Producto</a>
                        </div>
                    `;
                    productContainer.innerHTML += productHTML;
                });
            })
            .catch(function(error) {
                console.log('Error:', error);
            });
    }
});
