import { IRepository } from "./irepository";
import { Pessoa } from '../../domain/entities/pessoa'

interface IPessoaRepository extends IRepository<Pessoa> {
    create(pessoa: Partial<Pessoa>): Promise<Pessoa | Error>;
    read(id: number): Promise<Pessoa | Error>;
    findByCPF(cpf: number): Promise<Pessoa | Error>;
    update(id: number, pessoa: Partial<Pessoa>): Promise<Pessoa | Error>;
    delete(id: number): Promise<boolean | Error>;
    listAll(): Promise<Pessoa[] | Error>;
}

export { IPessoaRepository }