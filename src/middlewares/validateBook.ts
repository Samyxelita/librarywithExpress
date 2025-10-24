import { Request, Response, NextFunction } from "express";

export const validateBook = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.titulo || !req.body.autor) {
        return res.status(400).json({ error: "Faltan datos" });
    }
    const anio = Number(req.body.anio);
    if (Number.isNaN(anio)) {
        return res.status(400).json ({error : "Anio tiene q ser un numero"})
    }
     next();
};

