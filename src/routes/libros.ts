import { Router, Request, Response } from "express";
import { getAllBooks, createOneBook} from "../controllers/librosController";
import {messageCreatingBook} from "../middlewares/logNuevoLibro";

const librosRouter = Router();

librosRouter.get("/", getAllBooks);
librosRouter.post("/", messageCreatingBook, createOneBook);


export default librosRouter;
