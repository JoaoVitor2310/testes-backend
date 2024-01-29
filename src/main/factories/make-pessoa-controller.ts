import { PessoaRepository } from "../../data/repo/pessoa-repo";
import { PessoaUsecase } from "../../domain/usecases/pessoa-usecase";
import { PessoaController } from "../../presentation/controllers/pessoa-controller";
import { BancoPessoaFake } from "../helper/banco/banco-pessoas-fake";


function makePessoaController() {
    const prisma = new BancoPessoaFake();
    const pessoaRepository = new PessoaRepository(prisma);
    const pessoaUsecase = new PessoaUsecase(pessoaRepository);
    const pessoaController = new PessoaController(pessoaUsecase);
    return pessoaController;
}

export { makePessoaController }
