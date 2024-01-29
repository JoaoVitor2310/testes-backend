import { Pessoa } from "../../domain/entities/pessoa";

interface IRepository<E> {
    create(entidade: Partial<E>): Promise<E | Error>;
    read(id: number): Promise<E | Error>;
    update(id: number, entidade: Partial<E>): Promise<E | Error>;
    delete(id: number): Promise<boolean | Error>;
    listAll(): Promise<E[] | Error>;
}

export { IRepository }
