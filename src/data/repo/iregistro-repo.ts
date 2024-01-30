import { IRepository } from "./irepository";
import { Registro } from '../../domain/entities/registro';

interface IRegistroRepository<E extends Registro> extends IRepository<E>  {
    create(entidade: Partial<E>): Promise<E | Error>;
    read(id: number): Promise<E | Error>;
    update(id: number, entidade: Partial<E>): Promise<E | Error>;
    delete(id: number): Promise<boolean | Error>;
    findByRG(rg: string): Promise<E | Error>;
}
export { IRegistroRepository }