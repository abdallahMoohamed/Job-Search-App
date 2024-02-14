import express from "express";
import { env } from "./config/variables.env.js";
import initApp from "./src/index.router.js";


const app = express()
const port = env.PORT
initApp(app, express)
app.listen(port, () => console.log(`Server Running On port ${port} ...`))
