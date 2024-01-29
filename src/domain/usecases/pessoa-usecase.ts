import { IPessoaRepository } from "../../data/repo/ipessoa-repo";
import { Pessoa } from "../entities/pessoa";
import { IRegistrarPessoaUsecase } from "./iregistrar-pessoa-usecase";


export interface Params_RegistrarPessoaUsecase {
    nome: string;
    cpf: number;
}

export interface Retorno_RegistrarPessoaUsecase {
    id: number;
    nome: string;
    cpf: number;
}


class RegistrarPessoaUsecase implements IRegistrarPessoaUsecase {
    private repo: IPessoaRepository;
    constructor (repo: IPessoaRepository) {
        this.repo = repo;
    }

    // adaptar 
    // https://antman-does-software.com/stop-catching-errors-in-typescript-use-the-either-type-to-make-your-code-predictable
    //
    async registrar(pessoa: Partial<Pessoa>): Promise<Pessoa | Error> {
        // validação do use case
        const retorno = await this.repo.findByCPF(pessoa.cpf!);
        if (! (retorno instanceof Error)) {
            return new Error('Não posso gravar, dado que o CPF já cadastrado');
        }

        const pessoa_criada = this.repo.create(pessoa);
        if (pessoa_criada instanceof Error) {
            return new Error('Não posso gravar, erro ao criar novo registro');
        }
        return pessoa_criada;
    }
}

export { RegistrarPessoaUsecase as PessoaUsecase }