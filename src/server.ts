import express from "express";
import { sequelize } from "./database";
import { adminJsInst, adminJsRouter } from "./adminjs";
import { router } from "./routes";

const app = express();

app.use(express.static("public"));

app.use(adminJsInst.options.rootPath, adminJsRouter);

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("Database connected");
  });
  console.log(`Server iniciado com sucesso na porta ${PORT}`);
});
