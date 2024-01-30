import { Diretor } from "../entities/diretor";

interface IRegistrarDiretorUsecase {
    registrar(diretor: Partial<Diretor>): Promise<Diretor | Error>;
}

export { IRegistrarDiretorUsecase }