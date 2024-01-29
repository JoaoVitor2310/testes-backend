import { Pessoa } from "../entities/pessoa";

interface IRegistrarPessoaUsecase {
    registrar(pessoa: Partial<Pessoa>): Promise<Pessoa | Error>;
}

export { IRegistrarPessoaUsecase }