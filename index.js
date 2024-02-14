import express from "express";
import { env } from "./config/variables.env.js";


const app = express()
const port = env.PORT


app.listen(port, () => console.log(`Server Running On port ${port} ...`))
