import {NextFunction, Request, Response} from "express";

export const validateBookUpdate = (req: Request, res: Response, next: NextFunction) => {
    const { titulo, autor, anio } = req.body;

    if (!titulo && !autor && !anio) {
        return res.status(400).json({ error: "No se enviaron campos para actualizar" });
    }

    if (anio !== undefined && Number.isNaN(Number(anio))) {
        return res.status(400).json({ error: "El año debe ser un número válido" });
    }

    next();
};