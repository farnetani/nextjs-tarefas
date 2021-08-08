import Tarefa from "../model/Tarefa"

export default function Home() {

 let tarefa: Tarefa = new Tarefa(1, 'Exemplo de Tarefa')
  // tarefa = tarefa.concluir()
  tarefa = tarefa.alternarStatus()

  return (
    <div className={`
      flex flex-col justify-center items-center h-screen
      text-white bg-purple-600 bg-gradient-to-tr from-purple-500 to-yellow-600      
    `}>
      <span>{ tarefa.id }</span>
      <span>{ tarefa.descricao }</span>
      <span>{ tarefa.concluida ? 'Concluída' : 'Ativa' }</span>
    </div>
  )
}
