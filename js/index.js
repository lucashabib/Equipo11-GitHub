let electronica = document.querySelectorAll(".Contenedor_electronica");

fetch("https://fakestoreapi.com/products/category/electronics")
    .then(function(res){
        return res.json();
    })
    .then(function(info){
        let retorno = info;
        console.log(info);

        for (let i = 0; i < retorno.length; i++){
            if(i < electronica.length){
                let nombreProd = retorno[i].title;
                let precioProd = retorno[i].price;
                let idProd = retorno[i].id;
                let descripProd = retorno[i].description;
                let imgProd = retorno[i].image;
                let nombre = electronica[i].querySelector(".titulo_producto");
                let precio = electronica[i].querySelector(".precio_producto");
                let descripcion = electronica[i].querySelector(".descripcion_producto");
                let imagen = electronica[i].querySelector(".Imagen_Electronica");
                let boton = electronica[i].querySelector(".Detalles_Producto");
                nombre.innerText = nombreProd;
                precio.innerText = `$${precioProd}`;
                imagen.src = imgProd;
                descripcion.innerText = descripProd;




            }
        }
    })        
    .catch(function(error){
        console.log('Error:', error);
    });

    