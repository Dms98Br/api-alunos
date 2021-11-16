import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema } from '@ioc:Adonis/Core/Validator'
import Aluno from 'App/Models/Aluno';
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class AlunosController {
    public async CriarAluno({ request, response }: HttpContextContract) {
        try {
            let alunos = schema.create({
                nome_aluno: schema.string(),
                curso_aluno: schema.string(),
                semestre_aluno: schema.number(),
                cpf_aluno: schema.number(),
                cidade_aluno: schema.string(),
            })
            const message = {
                'nome_aluno.required': 'Nome é obrigátorio',
                'curso_aluno.required': 'Curso á obrigátorio',
                'semestre_aluno.required': 'Semestre é obrigátorio',
                'cpf_aluno.required': 'Cpf é obrigátorio',
                'cidade_aluno.required': 'Cidade é obrigátoria',
            }
            await request.validate({
                schema: alunos,
                messages: message,
                data: request.all(),
            });
            return Aluno.CriarAluno(request.all(), response);
        } catch (error) {
            return response.status(200)
                .send({
                    message: 'Erro ao tentar cadastrar um novo aluno',
                })
        }
    }
    public async ListarAlunos({ request, response }: HttpContextContract) {
        try {
            return Aluno.ListarAlunos(request.all(), response);
        } catch (error) {
            return response.status(200)
                .send({
                    message: 'Erro ao tentar listar os alunos',
                })
        }
    }

    public async ProcurarAluno({ request, response }: HttpContextContract) {
        try {
            let alunos = schema.create({
                ra_aluno: schema.number()
            })
            const message = {
                'ra_aluno.required': 'Digite o ra do aluno',
            }
            await request.validate({
                schema: alunos,
                messages: message,
                data: request.all(),
            });
            return Aluno.ProcurarAluno(request.all(), response);
        } catch (error) {
            console.log(error);
            
            return response.status(200)
                .send({
                    message: 'Erro ao tentar procurar aluno',
                })
        }
    }

    public async AtualizarAluno({ request, response }: HttpContextContract) {
        try {
            let alunos = schema.create({
                nome_aluno: schema.string(),
                curso_aluno: schema.string(),
                semestre_aluno: schema.number(),
                cpf_aluno: schema.number(),
                cidade_aluno: schema.string(),
            })
            const message = {
                'nome_aluno.required': 'Nome é obrigátorio',
                'curso_aluno.required': 'Curso á obrigátorio',
                'semestre_aluno.required': 'Semestre é obrigátorio',
                'cpf_aluno.required': 'Cpf é obrigátorio',
                'cidade_aluno.required': 'Cidade é obrigátoria',
            }
            await request.validate({
                schema: alunos,
                messages: message,
                data: request.all(),
            });
            return Aluno.AtualizarAluno(request.all(), response);
        } catch (error) {
            console.log(error);
            
            return response.status(400)
                .send({
                    message: 'Erro ao tentar procurar aluno',
                })
        }
    }

    public async DeletarAluno({ request, response }: HttpContextContract) {
        try {
            let alunos = schema.create({
                ra_aluno: schema.number()
            })
            const message = {
                'ra_aluno.required': 'Digite o ra do aluno',
            }
            await request.validate({
                schema: alunos,
                messages: message,
                data: request.all(),
            });
            return Aluno.DeletarAluno(request.all(), response);
        } catch (error) {
            console.log(error);
            
            return response.status(400)
                .send({
                    message: 'Erro ao tentar procurar aluno',
                })
        }
    }
}
