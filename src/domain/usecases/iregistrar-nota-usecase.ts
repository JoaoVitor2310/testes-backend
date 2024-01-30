import { Nota } from "../entities/nota";

interface IRegistrarNotaUsecase {
    registrar(nota: Partial<Nota>): Promise<Nota | Error>;
}

export { IRegistrarNotaUsecase }