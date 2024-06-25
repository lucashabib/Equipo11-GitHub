function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

let productoId = getQueryParam('id');

if (productoId) {
    fetch(`https://fakestoreapi.com/products/${productoId}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);

            let productName = document.querySelector('.nombre_producto');
            let productDescription = document.querySelector('#descripcion_producto');
            let productImage = document.querySelector('.Televisor');

            productName.textContent = data.title;
            productDescription.textContent = data.description;
            productImage.src = data.image;
            productImage.alt = data.title;
        })
        .catch(function(e) {
            console.log(e);
        });
} else {
    console.error('No hay información disponible sobre este producto');
}
