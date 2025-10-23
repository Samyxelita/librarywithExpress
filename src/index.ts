// index.ts
import express, { Request, Response } from "express";
import librosRouter from "./routes/libros";

const app = express();
app.use(express.json());

app.use((req, res, next) =>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})

app.use("/libros", librosRouter);
app.use("/libros", librosRouter);


const obtenerLibro= (req: Request, res: Response, next: Function) => {
    const id = Number (req.params.id)
    console.log(`Se trata de conseguir libro con el ${id}`);
    next();
}




/* GET libro por ID
app.get("/libros/:id", obtenerLibro, (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const libro = libros.find(l => l.id === id);
    if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
    res.json(libro);
}); */



const logNuevoLibro = (req: Request, res: Response, next : Function) => {
    console.log("Se intenta agregar un libro")
    next();
}

/* POST nuevo libro
app.post("/libros", logNuevoLibro, (req: Request, res: Response) => {
    const { titulo, autor, anio } = req.body;
    if (!titulo || !autor )
    {
        return res.status(400).json({ error: "Faltan datos" });
    }

    const anioNum = Number(anio)

    if (isNaN(anioNum)) {
        return res.status(400).json({error : "Anio tiene que ser un numero"});
    }
    const nuevoLibro = { id: libros.length + 1, titulo, autor, anio: anioNum };
    libros.push(nuevoLibro);
    res.status(201).json({mensaje : "Libro Agregado", nuevoLibro});
});
*/

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
