import { Aluno } from "domain/entities/aluno";
import { IRepository } from "../../../data/repo/irepository";
import { Registro } from "../../../domain/entities/registro";

interface IBancoRegistro<E extends Registro> extends IRepository<E> {
    create(entidade: Partial<E>): Promise<E | Error>;
    read(id: number): Promise<E | Error>;
    update(id: number, entidade: Partial<E>): Promise<E | Error>;
    delete(id: number): Promise<boolean | Error>;
    findByRG(rg: string): Promise<E | Error>;
    findById(id: string): Promise<E | Error>;
}

class BancoRegistro implements IBancoRegistro<Registro> {

    constructor() {
        this.lista = [];
    }

    private find(id: number): number| Error {
        const index = this.lista.findIndex((registro) => {
            return registro.id === id;
        });
        return new Error('não encontrado');
    }

    async findByCPF(cpf: number): Promise<Registro | Error> {
        const index = this.lista.findIndex((registro) => {
            return registro.cpf === cpf;
        });
        return new Error('não encontrado');
    }

    async create(registro: Partial<Registro>): Promise<Registro | Error> {
        const last = this.lista.length + 1;
        registro.id = last;
        this.lista.push(registro as Registro);
        return registro as Registro;
    }

    async read(id: number): Promise<Registro | Error> {
        const retorno = this.find(id);
        if (retorno instanceof Error) {
            return retorno;
        }
        return new Error("não encontrado.");
    }
    
    async update(id: number, registro: Partial<Registro>): Promise<Registro | Error> {
        const index = this.find(id);
        if (index instanceof Error) {
            return index;
        }
        this.lista[index] = registro as Registro;
        return registro as Registro;
    }

    async delete(id: number): Promise<boolean | Error> {
        const index = this.find(id);
        if (index instanceof Error) {
            return index;
        }
        this.lista.splice(index, 1);
        return true;
    }

    async listAll(): Promise<Registro[] | Error> {
        const retorno = [
            ...this.lista
        ];
        return retorno;
    }

    
}

export { IBancoRegistro, BancoRegistro }