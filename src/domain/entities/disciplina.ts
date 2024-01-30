import { Curso } from "./curso";
import { Professor } from "./professor";

class Disciplina{
    id: number;
    nome: string;
    cargaHoraria: number;
    periodo: number;
    professor: string;
    // professor: Professor;
    // curso: Curso;
    curso: string;
    preRequisitos: string[];
    alunosMatriculados: string[];
    sala: string;
    horario: string;
}

export { Disciplina }