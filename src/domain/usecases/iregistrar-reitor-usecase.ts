import { Reitor } from "../entities/reitor";

interface IRegistrarReitorUsecase {
    registrar(reitor: Partial<Reitor>): Promise<Reitor | Error>;
}

export { IRegistrarReitorUsecase }