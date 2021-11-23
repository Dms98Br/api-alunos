
import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{
  Route.post('/criar','AlunosController.CriarAluno')
  Route.get('/','AlunosController.ListarAlunos')
  Route.get('/procurar-aluno','AlunosController.ProcurarAluno')
  Route.put('/atualizar-aluno','AlunosController.AtualizarAluno')
  Route.delete('/remover-aluno','AlunosController.DeletarAluno')
}).prefix('api/v1/aluno')

Route.get('/', async () => {
  return { hello: 'world' }
})
