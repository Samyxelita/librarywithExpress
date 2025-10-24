import { Router, Request, Response } from "express";
import {getAllBooks, createOneBook, getBookById, updateBookById} from "../controllers/librosController";
import {messageCreatingBook, logGetOneBookById, messageUpdatingBook} from "../middlewares/logNuevoLibro";
import {validateBook} from "../middlewares/validateBook";


const librosRouter = Router();

librosRouter.get("/", getAllBooks);
librosRouter.post("/", messageCreatingBook, validateBook, createOneBook);
librosRouter.get("/:id",logGetOneBookById ,getBookById );
librosRouter.patch("/:id",messageUpdatingBook, updateBookById);


export default librosRouter;
