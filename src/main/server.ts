
import express from "express";
import { pessoaRouter } from "./rotas/pessoa-routes";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(pessoaRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


