import { PessoaRepository } from '../../data/repo/pessoa-repo';
import { PessoaUsecase } from "../../domain/usecases/pessoa-usecase";
import { BancoPessoaFake } from "../helper/banco/banco-pessoas-fake";

function makePessoaUsecase() {

    const prisma = new BancoPessoaFake();
    const repo = new PessoaRepository(prisma);
    const usecase = new PessoaUsecase(repo);
    return usecase;
}

export { makePessoaUsecase }