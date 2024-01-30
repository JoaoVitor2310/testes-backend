import { Curso } from "../entities/curso";

interface IRegistrarCursoUsecase {
    registrar(curso: Partial<Curso>): Promise<Curso | Error>;
}

export { IRegistrarCursoUsecase }