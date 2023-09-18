import express, { Express } from "express";
import 'express-async-errors';
import dotenv from "dotenv";
import filmeRouter from "./router/filmeRoutes";
dotenv.config()

const app: Express = express()
app.use(express.json())
app.use(filmeRouter)

const port: Number = Number(process.env.PORT) || 5000
app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`))