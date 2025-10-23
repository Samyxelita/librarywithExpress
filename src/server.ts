import express from "express"; // 1️⃣ Importamos Express

const app = express(); // 2️⃣ Creamos la instancia del servidor
const PORT = 3002;     // 3️⃣ Definimos el puerto donde escuchará
app.use(express.json());

const productos = [
    { id: 1, nombre: "Palo" },
    { id: 2, nombre: "Escoba" },
    { id: 3, nombre: "Tele" }
];

let libros = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { id: 2, titulo: "El Principito", autor: "Antoine de Saint-Exupéry" },
    { id: 3, titulo: "1984", autor: "George Orwell" },
];

//--------------------------------------GET------------------------------------
// 4️⃣ Definimos una ruta GET para "/"
app.get("/", (req, res) => {
    // req → información de la petición
    // res → lo que vamos a responder
    res.send("¡Hola desde Express!");
});
app.get("/saludo", (req, res) => {
    res.send("¡Hola, Samuel! Esta es otra ruta :)");
});


app.get("/productos", (req, res) => {
    res.json(productos)
})

app.get("/usuarios/:id", (req, res) => {
    const id = req.params.id; // Route param
    const idioma = req.query.idioma; // Query param (opcional)

    if (idioma) {
        res.json({ mensaje: `Usuario ${id} con idioma: ${idioma}` });
    } else {
        res.json({ mensaje: `Usuario ${id} sin idioma especificado` });
    }
});
//----------------------------------------------------POST--------------------------------------------------------
app.post("/usuarios", (req, res) => {
    const nuevoUsuario = req.body
    res.json({
        mensaje: `Usuario recibido`,
        usuario: nuevoUsuario,
    })
})

app.post("/productos", (req, res) =>{
    const productoNuevo = req.body;
    res.json({
        mensaje : "Producto recibido",
        producto: productoNuevo,
    })
})

//-----------------Ejercicios--------------------------------!!

//POST
app.post("/ordenes", (req, res)=>{
    const ordenCreada = req.body;

    res.json({
        mensaje : `Orden creada`,
        orden : {ordenCreada},
    })
})

//--------------PUT----------------------

app.put("/libros/:id", (req, res)=>
{
    const idNum = Number(req.params.id);
    const libro = libros.find(l => l.id == idNum)

    if (!libro) {
        return res.status(404).json({mensaje: `Libro con id ${idNum} no encontrado`});
    }

    libro.titulo = req.body.titulo;
    libro.autor = req.body.autor;

    res.json({
        mensaje: `Libro con id ${idNum} actualizado`,
        libroActualizado: libro
    });
});

app.get("/libros/:id",(req, res) =>{
    const id = req.params.id;
    const libro = libros.find(libroSeleccionado => (libroSeleccionado.id === Number(id)));
    res.json(libro)

})


//----------------------PATCH-----------------------------

app.patch("/libros/:id", (req, res) =>{
    const idNum = Number(req.params.id);
    const libroSeleccionado = libros.find(libro => (libro.id === (idNum)))

    if (!libroSeleccionado) {
        return res.status(404).json({mensaje : `No se ha encontrado ningun libro con el id ${idNum}`})
    }

    if(req.body.titulo) {libroSeleccionado.titulo = req.body.titulo}
    if(req.body.autor) {libroSeleccionado.autor = req.body.autor}

    res.status(200).json({
        mensaje : `Libro con id ${idNum} actualizado parcialmente`,
        datos : libroSeleccionado,
    })

})
//------------------DELETE--------------------------

app.delete("/libros/:id",(req, res) =>{
    const idNum = Number(req.params.id);
    const index = libros.findIndex(libro => (libro.id === idNum))

    if (index === -1) {                           // Si no existe → 404
        return res.status(404).json({ mensaje: `Libro con id ${idNum} no encontrado` });
    }

    const libroEliminado = libros.splice(index, 1)[0];

    res.status(200).json({
        mensaje : `Recurso ${idNum} eliminado`,
        libroEliminado
    })
})

// 5️⃣ Hacemos que el servidor escuche en el puerto
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});





