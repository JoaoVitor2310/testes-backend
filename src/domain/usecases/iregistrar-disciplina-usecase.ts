import { Disciplina } from "../entities/disciplina";

interface IRegistrarDisciplinaUsecase {
    registrar(disciplina: Partial<Disciplina>): Promise<Disciplina | Error>;
}

export { IRegistrarDisciplinaUsecase }