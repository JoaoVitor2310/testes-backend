import { Disciplina } from "./disciplina";

class Professor{
    id: number;
    nome: string;
    email: string;
    curso: string[];
    // disciplina: Disciplina[];
    disciplina: string;
    cargaHoraria: number;
    salario: number;
}

export { Professor }