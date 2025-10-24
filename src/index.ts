// index.ts
import express, { Request, Response } from "express";
import librosRouter from "./routes/libros";

const app = express();
app.use(express.json());

app.use((req, res, next) =>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})
app.use("/libros", librosRouter);

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
