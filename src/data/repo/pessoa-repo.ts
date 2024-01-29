import { Pessoa } from "../../domain/entities/pessoa";
import { IPessoaRepository } from "./ipessoa-repo";
import { IBancoPessoaFake } from "../../main/helper/banco/banco-pessoas-fake";

class PessoaRepository implements IPessoaRepository {
    private banco: IBancoPessoaFake;

    constructor(banco: IBancoPessoaFake) {
        this.banco = banco;
    }

    async create(pessoa: Partial<Pessoa>): Promise<Pessoa | Error> {
        return this.banco.create(pessoa);
    }
    async read(id: number): Promise<Pessoa | Error> {
        return this.banco.read(id);
    }
    async update(id: number, pessoa: Partial<Pessoa>): Promise<Pessoa | Error> {
        return this.banco.update(id, pessoa);
    }
    async delete(id: number): Promise<boolean | Error> {
        return this.banco.delete(id);
    }
    async listAll(): Promise<Error | Pessoa[]> {
        return this.banco.listAll();
    }
    async findByCPF(cpf: number): Promise<Error | Pessoa> {
        return this.banco.findByCPF(cpf);
    }
}

export { PessoaRepository }