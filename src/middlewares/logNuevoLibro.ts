import {NextFunction, Request, Response} from "express";

export const messageCreatingBook = (req: Request,res: Response, next: NextFunction) => {
    console.log("Se intenta agregar un libro");
    next();
}

export const logGetOneBookById= (req: Request, res: Response, next: Function) => {
    const id = Number (req.params.id)
    console.log(`Se trata de conseguir libro con el ${id}`);
    next();
}

export const messageUpdatingBook = (req: Request, res: Response, next: Function) => {
    const id = Number (req.params.id)
    console.log(`Se ha actualizado parcialmente el libro ${id}`);
    next();
}