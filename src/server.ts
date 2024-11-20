import express from "express";
import { sequelize } from "./database";
import { adminJsInst, adminJsRouter } from "./adminjs";
import { router } from "./routes";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

app.use(adminJsInst.options.rootPath, adminJsRouter);

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("Database connected");
  });
  console.log(`Server iniciado com sucesso na porta ${PORT}`);
});
