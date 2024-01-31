import { Registro } from "../../domain/entities/registro";
import { IRegistroRepository } from "./iregistro-repo";
import { IBancoRegistro } from "../../main/helper/banco/banco-registro";

class RegistroRepository implements IRegistroRepository<E> {
    private banco: IBancoRegistro;

    constructor(banco: IBancoRegistro) {
        this.banco = banco;
    }

    async create(Registro: Partial<Registro>): Promise<Registro | Error> {
        return this.banco.create(Registro);
    }
    async read(id: number): Promise<Registro | Error> {
        return this.banco.read(id);
    }
    async update(id: number, Registro: Partial<Registro>): Promise<Registro | Error> {
        return this.banco.update(id, Registro);
    }
    async delete(id: number): Promise<boolean | Error> {
        return this.banco.delete(id);
    }
    async listAll(): Promise<Error | Registro[]> {
        return this.banco.listAll();
    }
    async findByCPF(cpf: number): Promise<Error | Registro> {
        return this.banco.findByCPF(cpf);
    }
}

export { RegistroRepository }