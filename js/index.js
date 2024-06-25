let arrayElectronics = document.querySelectorAll(".Contenedor_electronics");
let arrayJewelery = document.querySelectorAll(".Contenedor_jewelery");
let arrayMens = document.querySelectorAll(".Contenedor_mens");
let arrayWomens = document.querySelectorAll(".Contenedor_womens");

fetch(`https://fakestoreapi.com/products`)
    .then(function(res) {
        return res.json();
    })
    .then(function(info) {
        let retorno = info;
        console.log(info);

        for (let i = 0; i < retorno.length; i++) {
            let producto = retorno[i];
            let nombreProd = producto.title;
            let precioProd = producto.price;
            let imgProd = producto.image;
            let idProd = producto.id; // Obtener el ID del producto
            let nombre, precio, imagen, enlace;

            if (producto.category == "electronics") {
                if (electronicsIndex < arrayElectronics.length) {
                    let item = arrayElectronics[electronicsIndex++];
                    nombre = item.querySelector(".titulo_producto");
                    precio = item.querySelector(".precio_producto");
                    imagen = item.querySelector(".Imagen_Producto");
                    enlace = item.querySelector(".Detalles_Producto"); // Obtener el enlace
                }
            } else if (producto.category == "jewelery") {
                if (jeweleryIndex < arrayJewelery.length) {
                    let item = arrayJewelery[jeweleryIndex++];
                    nombre = item.querySelector(".titulo_producto");
                    precio = item.querySelector(".precio_producto");
                    imagen = item.querySelector(".Imagen_Producto");
                    enlace = item.querySelector(".Detalles_Producto"); // Obtener el enlace
                }
            } else if (producto.category == "men's clothing") {
                if (mensIndex < arrayMens.length) {
                    let item = arrayMens[mensIndex++];
                    nombre = item.querySelector(".titulo_producto");
                    precio = item.querySelector(".precio_producto");
                    imagen = item.querySelector(".Imagen_Producto");
                    enlace = item.querySelector(".Detalles_Producto"); // Obtener el enlace
                }
            } else if (producto.category == "women's clothing") {
                if (womensIndex < arrayWomens.length) {
                    let item = arrayWomens[womensIndex++];
                    nombre = item.querySelector(".titulo_producto");
                    precio = item.querySelector(".precio_producto");
                    imagen = item.querySelector(".Imagen_Producto");
                    enlace = item.querySelector(".Detalles_Producto"); // Obtener el enlace
                }
            }

        }
    })
    .catch(function(error) {
        console.log('Error:', error);
    });
