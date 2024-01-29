

import { Request, Response } from "express";
import { IRegistrarPessoaUsecase } from "../../domain/usecases/iregistrar-pessoa-usecase";

class PessoaController {
    private usecase : IRegistrarPessoaUsecase;

    constructor (usecase : IRegistrarPessoaUsecase) {
        this.usecase = usecase;
    }

    async create(req: Request, resp: Response): Promise<void> {
        // console.log("Body:", req.body);
        const { nome, cpf } = req.body;

        // validação do controller
        if (!nome || !cpf) {
            resp.status(400).json({ error: 'Nome e CPF são obrigatórios' }).end();
        }

        const dto = { nome, cpf }

        const pessoa = await this.usecase.registrar(dto);
        if (pessoa instanceof Error) {
            resp.status(400).json({ error: pessoa.message }).end();
        }
        resp.status(201).json(pessoa).end();
    }

}

export { PessoaController };