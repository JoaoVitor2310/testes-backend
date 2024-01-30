import { Curso } from "./curso";
import { Disciplina } from "./disciplina";
import { Nota } from "./nota";

class Aluno{
    id: number;
    matricula: string;
    nome: string;
    email: string;
    // curso: Curso[];
    curso: string;
    // disciplinas: Disciplina[];
    disciplinas: string[];
    periodo: number;
    // historico: Nota[];
    historico: number[];
}

export { Aluno }