import { Aluno } from "../entities/aluno";

interface IRegistrarAlunoUsecase {
    registrar(aluno: Partial<Aluno>): Promise<Aluno | Error>;
}

export { IRegistrarAlunoUsecase }