import { RegistroRepository } from '../../data/repo/registro-repo';
import { RegistrarAlunoUsecase } from "../../domain/usecases/registro-usecase";
import { BancoRegistroFake } from "../helper/banco/banco-registro";

function makeRegistroUsecase() {

    const prisma = new BancoRegistroFake();
    const repo = new RegistroRepository(prisma);
    const usecase = new RegistroUsecase(repo);
    return usecase;
}

export { makeRegistroUsecase }