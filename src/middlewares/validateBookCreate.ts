import {NextFunction, Request, Response} from "express";

export const validateBookCreate = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.titulo || !req.body.autor || !req.body.anio ) {
        return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const anio = Number(req.body.anio);
    if (Number.isNaN(anio)) {
        return res.status(400).json({ error: "El año debe ser un número" });
    }

    next();
};









