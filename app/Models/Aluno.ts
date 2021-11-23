import { BaseModel } from '@ioc:Adonis/Lucid/Orm'

interface AlunosInterface {
  id_aluno: number,
  nome_aluno: string,
  curso_aluno: string,
  semestre_aluno: string,
  ra_aluno: number,
  cpf_aluno: number,
  cidade_aluno: string,
}
var alunos_array: AlunosInterface[] = [];

export default class Aluno extends BaseModel {
  
  static async CriarAluno(request, response) {
    let ra_aluno = new Date().getTime();
    let aluno_obj: AlunosInterface = Object.create(null);
    aluno_obj.id_aluno = ra_aluno;
    aluno_obj.nome_aluno = request.nome_aluno;
    aluno_obj.curso_aluno = request.curso_aluno;
    aluno_obj.semestre_aluno = request.semestre_aluno;
    aluno_obj.ra_aluno = ra_aluno;
    aluno_obj.cpf_aluno = request.cpf_aluno;
    aluno_obj.cidade_aluno = request.cidade_aluno;

    alunos_array.push(aluno_obj)

    return response.status(200)
    .send({
      message: 'Aluno foi criado',
      data: aluno_obj
    })
  }
  static async ListarAlunos(response) {
    return response.status(200)
    .send({
      message: 'Aluno foi criado',
      data: alunos_array
    })
  }

  static async ProcurarAluno(request, response) {
    await alunos_array.map((e)=>{
      if(e.ra_aluno.toString() === request.ra_aluno){
        return response.status(200)
        .send({
          message: 'Aluno foi criado',
          data: e
        })
      }else{
        return response.status(200)
        .send({
          message: 'Esse RA não foi encontrado na noss base de dados',
        })
      }
    })
  }

  static async AtualizarAluno(request,response){

    let aluno_obj: AlunosInterface = Object.create(null);
    aluno_obj.id_aluno = request.ra_aluno
    aluno_obj.ra_aluno = request.ra_aluno
    aluno_obj.nome_aluno = request.nome_aluno;
    aluno_obj.curso_aluno = request.curso_aluno;
    aluno_obj.semestre_aluno = request.semestre_aluno;
    aluno_obj.cpf_aluno = request.cpf_aluno;
    aluno_obj.cidade_aluno = request.cidade_aluno;
    await alunos_array.map((e)=>{
      if(e.ra_aluno.toString() === request.ra_aluno){
        alunos_array.pop()
        alunos_array.push(aluno_obj)
      }
    })
    //alunos_array.push(aluno_obj)
    return response.status(200)
    .send({
      message: 'Aluno foi criado',
      data: aluno_obj
    })
  }

  static async DeletarAluno(request,response){
    await alunos_array.map((e)=>{
      if (e.ra_aluno.toString() === request.ra_aluno) {
        alunos_array.pop()
      }
    })
    return response.status(200)
    .send({
      message: `${request.ra_aluno} foi deletado !`
    })
  }
}
