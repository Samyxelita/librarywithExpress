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