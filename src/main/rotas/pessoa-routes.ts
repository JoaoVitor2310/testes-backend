import { Router } from "express";
import { makePessoaUsecase } from "../factories/make-pessoa";
import { PessoaController } from "../../presentation/controllers/pessoa-controller";
import { makePessoaController } from "../factories/make-pessoa-controller";

const pessoaRouter = Router();

const pessoaController = makePessoaController();

pessoaRouter.post('/pessoa/create', (req, resp) => pessoaController.create(req, resp));
// router.post('/pessoa/create', pessoaController.create);

export { pessoaRouter };
