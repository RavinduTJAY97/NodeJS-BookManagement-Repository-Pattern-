import express, { urlencoded, json } from "express";
const app = express();
import cors from "cors";

app.use(cors());

app.use(
  urlencoded({
    extended: true,
  })
);

app.use(json());

export default app;
