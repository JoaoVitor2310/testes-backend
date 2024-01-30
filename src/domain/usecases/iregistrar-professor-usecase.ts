import { Professor } from "../entities/professor";

interface IRegistrarProfessorUsecase {
    registrar(professor: Partial<Professor>): Promise<Professor | Error>;
}

export { IRegistrarProfessorUsecase }