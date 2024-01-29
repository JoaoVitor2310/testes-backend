import { IPessoaRepository } from "../../data/repo/ipessoa-repo";
import { Pessoa } from "../entities/pessoa";
import { PessoaUsecase } from "./pessoa-usecase";

// import { PessoaRepository } from "../../data/repo/pessoa-repo";

// jest.mock("../../data/repo/pessoa-repo", function () {
//     const { default: mockRepo } = jest.requireActual("../../data/repo/pessoa-repo");

//     mockRepo.prototype.findByCPF = function () {
//         return "Hello";
//     }

//     mockRepo.prototype.create = function () {
//         return "Hello";
//     }

//     return mockRepo;
// });

class StubRepo implements IPessoaRepository {
    aceita_find: boolean = false;
    setAceitaFind(aceita: boolean): void {
        this.aceita_find = aceita;
    }
    erra_create: boolean = false;
    setErraCreate(erra_create: boolean): void {
        this.erra_create = erra_create;
    }

    async create(pessoa: Pessoa): Promise<Pessoa | Error> {
        if (this.erra_create) {
            return new Error('Não posso gravar, erro ao criar novo registro');
        } else {
            return {
                id: 1,
                nome: 'Fulano',
                cpf: 12345678910
            } as Pessoa;
        }
    }
    async findByCPF(cpf: number): Promise<Pessoa | Error> {
        if (this.aceita_find) {
            return {
                id: 1,
                nome: 'Fulano',
                cpf: 12345678910
            } as Pessoa;
        } else {
            return new Error('CPF não cadastrado');
        }
    }

    async read(id: number): Promise<Pessoa | Error> {
        throw new Error("Method not implemented.");
    }
    async update(id: number, pessoa: Pessoa): Promise<Pessoa | Error> {
        throw new Error("Method not implemented.");
    }
    async delete(id: number): Promise<boolean | Error> {
        throw new Error("Method not implemented.");
    }
    async listAll(): Promise<Error | Pessoa[]> {
        throw new Error("Method not implemented.");
    }
}

function makeSut() {

    const repo = new StubRepo();
    const sut = new PessoaUsecase(repo);
    return { sut, repo }
}

describe('Registra Pessoa Usecase', () => {
    test('deve ser capaz de registrar uma pessoa', async () => {
        // arrange
        const pessoa = {
            nome: 'Fulano',
            cpf: 12345678910
        }
        
        const pessoa_gravada: Pessoa = {
            id: 1,
            nome: 'Fulano',
            cpf: 12345678910
        }
        const { sut, repo } = makeSut();
        
        // act
        repo.setAceitaFind(false);
        const resultado = await sut.registrar(pessoa);
        // assert
        expect(resultado).toEqual(pessoa_gravada);
    })

    test('não deve ser capaz de registrar uma segunda pessoa com o mesmo CPF', async () => {
        // arrange
        const pessoa = {
            nome: 'Fulano',
            cpf: 12345678910
        }
        const outra = {
            nome: 'Fulano',
            cpf: 12345678910
        }
        const pessoa_gravada: Pessoa = {
            id: 1,
            nome: 'Fulano',
            cpf: 12345678910
        }
        
        const { sut, repo } = makeSut();
        
        // act
        repo.setAceitaFind(false);
        const resultado1 = await sut.registrar(pessoa);
        repo.setAceitaFind(true);
        const resultado2 = await sut.registrar(outra);

        // assert
        expect(resultado1).toEqual(pessoa_gravada);
        expect(resultado2).toEqual(new Error('Não posso gravar, dado que o CPF já cadastrado'));
    })

    test('não deve ser capaz de informar erro caso o create do repositorio falhe', async () => {
        // arrange
        const pessoa = {
            nome: 'Fulano',
            cpf: 12345678910
        }
        
        const { sut, repo } = makeSut();
        
        // act
        repo.setAceitaFind(false);
        repo.setErraCreate(true);
        const resultado = await sut.registrar(pessoa);

        // assert
        expect(resultado).toEqual(new Error('Não posso gravar, erro ao criar novo registro'));
    })

})