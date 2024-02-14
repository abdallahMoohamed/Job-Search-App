import connectDB from "../DB/connection.js";
import { globalErrorHandling } from "./utils/errorHandling.js";

const initApp = (app, express) => {
  //convert Buffer Data
  app.use(express.json({}))

  //Setup API Routing 
  

  // handle any page
  app.all('*', (req, res, next) => {
    res.send("In-valid Routing Plz check url  or  method")
  })
  // handleing error
  app.use(globalErrorHandling);

  // connect to DB
  connectDB()
}

export default initApp