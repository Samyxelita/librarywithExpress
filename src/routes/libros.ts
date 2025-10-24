import { Router, Request, Response } from "express";
import {
    getAllBooks,
    createOneBook,
    getBookById,
    updateBookById,
    replaceBookById,
    deleteBookByID
} from "../controllers/librosController";
import {messageCreatingBook, logGetOneBookById, messageUpdatingBook} from "../middlewares/logNuevoLibro";
import {validateBookUpdate} from "../middlewares/validateBookUpdate";
import {validateBookCreate} from "../middlewares/validateBookCreate";


const librosRouter = Router();

librosRouter.get("/", getAllBooks);
librosRouter.post("/", messageCreatingBook, validateBookCreate, createOneBook);
librosRouter.get("/:id",logGetOneBookById ,getBookById );
librosRouter.patch("/:id",messageUpdatingBook,validateBookUpdate, updateBookById);
librosRouter.put("/:id", validateBookCreate, replaceBookById);
librosRouter.delete("/:id", deleteBookByID);


export default librosRouter;
