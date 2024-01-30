

import { Request, Response } from "express";
import { IRegistrarAlunoUsecase } from "../../domain/usecases/iregistrar-aluno-usecase";

class PessoaController {
    private usecase : IRegistrarAlunoUsecase;

    constructor (usecase : IRegistrarAlunoUsecase) {
        this.usecase = usecase;
    }

    async create(req: Request, res: Response): Promise<void> {
        // console.log("Body:", req.body);
        const { nome, rg, email, curso, idCampus } = req.body;

        // validação do controller
        if (!nome || !rg || !email || !curso || !idCampus) {
            res.status(400).json({ error: 'Envie os dados obrigatórios' });
        }

        const dto = { nome, rg, email, curso, idCampus };

        const aluno = await this.usecase.registrar(dto);
        if (aluno instanceof Error) {
            res.status(400).json({ error: aluno.message });
        }
        res.status(201).json(aluno);
    }

}

export { PessoaController };