import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes";

express()
    .use(express.json())
    .use(cors())
    .use("/api/v1", routes)
    .listen(process.env.SERVER_PORT, () => {
        console.log(`Servidor rodando na URL: http://localhost:${process.env.SERVER_PORT}`)
    });
