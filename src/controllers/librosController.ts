import { Request, Response } from "express";
import { libros } from "../models/libros"

export const getAllBooks = (req: Request, res: Response) => {
    res.json(libros);
};

export const createOneBook = (req: Request, res: Response) => {
    const newBook = req.body;
    res.json({mensaje : `Libro Creado`,
    nuevoLibro : newBook
    });
}

export const getBookById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const libro = libros.find(l => l.id === id);
    if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
    res.json(libro);
}


export const updateBookById = (req: Request, res: Response) => {
    const id = Number (req.params.id);
    const libroSeleccionado = libros.find  (libros => libros.id == id);

    if (!libroSeleccionado) {
        return res.status(404).json({mensaje : `No se ha encontrado ningun libro con el id ${id}`})
    }
    if(req.body.titulo) {libroSeleccionado.titulo = req.body.titulo}
    if(req.body.autor) {libroSeleccionado.autor = req.body.autor}

    res.status(200).json({
        mensaje : `Libro con id ${id} actualizado parcialmente`,
        datos : libroSeleccionado,
    })

}

