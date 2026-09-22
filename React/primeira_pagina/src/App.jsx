import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <h1 className="title">Sistema de Gestão de Tarefas</h1>
          <p className="subtitle">
            Organiza, acompanha e controla todas as tuas tarefas de forma simples e eficiente.
          </p>
        </div>

        <div className="actions">
          <button
            type="button"
            className="main-button"
            onClick={() => alert("Navegar para lista de tarefas")}
          >
            Ver Tarefas
          </button>

          <button
            type="button"
            className="secondary-button"
            onClick={() => setCount((count) => count + 1)}
          >
            Cliques: {count}
          </button>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Funcionalidades</h2>
          <ul>
            <li>✔ Criar tarefas</li>
            <li>✔ Editar tarefas</li>
            <li>✔ Remover tarefas</li>
            <li>✔ Marcar como concluídas</li>
            <li>✔ Filtrar por estado</li>
          </ul>
        </div>

        <div id="social">
          <h2>Sobre o Projeto</h2>
          <p>
            Este sistema foi desenvolvido como parte do curso profissional nível 5 em Tecnologias de Programação.
            Utiliza React no cliente e uma API no servidor para gerir todas as operações.
          </p>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
