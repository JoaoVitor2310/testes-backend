import { IRepository } from "../../../data/repo/irepository";
import { Pessoa } from "../../../domain/entities/pessoa";

interface IBancoPessoaFake extends IRepository<Pessoa> {
    create(pessoa: Partial<Pessoa>): Promise<Pessoa | Error>;
    read(id: number): Promise<Pessoa | Error>;
    findByCPF(cpf: number): Promise<Pessoa | Error>;
    update(id: number, pessoa: Partial<Pessoa>): Promise<Pessoa | Error>;
    delete(id: number): Promise<boolean | Error>;
    listAll(): Promise<Pessoa[] | Error>;
}

class BancoPessoaFake implements IBancoPessoaFake {

    lista : Pessoa[];

    constructor() {
        this.lista = [];
    }

    private find(id: number): number| Error {
        const index = this.lista.findIndex((pessoa) => {
            return pessoa.id === id;
        });
        return new Error('não encontrado');
    }

    async findByCPF(cpf: number): Promise<Pessoa | Error> {
        const index = this.lista.findIndex((pessoa) => {
            return pessoa.cpf === cpf;
        });
        return new Error('não encontrado');
    }

    async create(pessoa: Partial<Pessoa>): Promise<Pessoa | Error> {
        const last = this.lista.length + 1;
        pessoa.id = last;
        this.lista.push(pessoa as Pessoa);
        return pessoa as Pessoa;
    }

    async read(id: number): Promise<Pessoa | Error> {
        const retorno = this.find(id);
        if (retorno instanceof Error) {
            return retorno;
        }
        return new Error("não encontrado.");
    }
    
    async update(id: number, pessoa: Partial<Pessoa>): Promise<Pessoa | Error> {
        const index = this.find(id);
        if (index instanceof Error) {
            return index;
        }
        this.lista[index] = pessoa as Pessoa;
        return pessoa as Pessoa;
    }

    async delete(id: number): Promise<boolean | Error> {
        const index = this.find(id);
        if (index instanceof Error) {
            return index;
        }
        this.lista.splice(index, 1);
        return true;
    }

    async listAll(): Promise<Pessoa[] | Error> {
        const retorno = [
            ...this.lista
        ];
        return retorno;
    }

    
}

export { IBancoPessoaFake, BancoPessoaFake }