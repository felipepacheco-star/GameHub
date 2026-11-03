
import { Router } from "express";
import * as estudioController from "../controllers/estudioController.js";
import validarId from "../middlewares/valdarId.js";

const routes = Router();

routes.get("/", estudioController.listar);
routes.get("/:id", validarId,estudioController.listarPorId );
routes.post("/", estudioController.criar);
routes.put("/:id", validarId, estudioController.atualizar);
routes.delete("/:id", validarId, estudioController.excluir);

export default routes;