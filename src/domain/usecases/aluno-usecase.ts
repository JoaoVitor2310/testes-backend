import { IRegistroRepository } from "../../data/repo/iregistro-repo";
import { Aluno } from "../entities/aluno";
import { IRegistrarAlunoUsecase } from "./iregistrar-aluno-usecase";

class RegistrarAlunoUsecase implements IRegistrarAlunoUsecase {
    private repo: IRegistroRepository<Aluno>;
    constructor (repo: IRegistroRepository<Aluno>) {
        this.repo = repo;
    }

    // adaptar 
    // https://antman-does-software.com/stop-catching-errors-in-typescript-use-the-either-type-to-make-your-code-predictable
    //
    async registrar(aluno: Partial<Aluno>): Promise<Aluno | Error> {
        // validação do use case
        if(aluno.rg){
            const response = await this.repo.findByRG(aluno.rg);
            if (! (response instanceof Error)) {
                return new Error('Aluno já cadastrado.');
            }
        }

        const aluno_criado = this.repo.create(aluno);
        if (aluno_criado instanceof Error) {
            return new Error('Erro ao cadastrar novo aluno.');
        }
        return aluno_criado;
    }
}

export { RegistrarAlunoUsecase as AlunoUseCase }