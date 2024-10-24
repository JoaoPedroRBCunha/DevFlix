import express from "express";
import { sequelize } from "./database";
import { adminJsInst, adminJsRouter } from "./adminjs";

const app = express();

app.use(express.static("public"));

app.use(adminJsInst.options.rootPath, adminJsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("Database connected");
  });
  console.log(`Server iniciado com sucesso na porta ${PORT}`);
});
