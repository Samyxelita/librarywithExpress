import {NextFunction, Request, Response} from "express";

export const messageCreatingBook = (req: Request,res: Response, next: NextFunction) => {
    console.log("Se intenta agregar un libro");
    next();
}