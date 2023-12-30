import { json } from "express";
import app from "./app";
import cors from "cors";
const port = 3001;
const host = "127.0.0.1";

//using middlewares
app.use(cors());
app.use(json());

//server configurations
const server = app.listen(port, host, () => {
  console.log(`Server is running on ${server.address().port}`);
});
