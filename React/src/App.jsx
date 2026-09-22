import { useEffect, useState } from 'react'
import { api } from './api'
import './App.css'



function App() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('task-manager-user') || 'null'))
  const [authMode, setAuthMode] = useState('login')
  const [authForm, setAuthForm] = useState({ name: '', email: '', password: '' })
  const [tasks, setTasks] = useState([])
  const [taskForm, setTaskForm] = useState({ title: '', description: '', due_date: '', status: 'pending' })
  const [filter, setFilter] = useState('all')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    if (!user) return
    api.listTasks(user.id).then(setTasks).catch((requestError) => setError(requestError.message))
  }, [user])

  async function handleAuth(event) {
    event.preventDefault()
    setLoading(true)
    setError('')
    try {
      const result = await (authMode === 'login' ? api.login(authForm) : api.register(authForm))
      setUser(result)
      localStorage.setItem('task-manager-user', JSON.stringify(result))
      setAuthForm({ name: '', email: '', password: '' })
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  async function createTask(event) {
    event.preventDefault()
    if (!taskForm.title.trim()) return
    setError('')
    try {
      const task = await api.createTask(user.id, taskForm)
      setTasks((currentTasks) => [task, ...currentTasks])
      setTaskForm({ title: '', description: '', due_date: '', status: 'pending' })
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  async function toggleTask(task) {
    try {
      const updatedTask = await api.updateTask(user.id, { ...task, status: task.status === 'done' ? 'pending' : 'done' })
      setTasks((currentTasks) => currentTasks.map((currentTask) => currentTask.id === task.id ? updatedTask : currentTask))
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  async function removeTask(taskId) {
    try {
      await api.deleteTask(user.id, taskId)
      setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId))
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  if (!user) {
    return (
      <main className="auth-shell">
        <section className="auth-panel">
          <img src={"./src/assets/logo.png"} alt="Logo" className="auth-logo" style={{ height: '260px', marginBottom: '10px' }} />
          <h4>Organiza o trabalho que importa.</h4>
          <p className="lead">Uma área simples para transformar intenções em tarefas concluídas.</p>
          <form onSubmit={handleAuth} className="auth-form">
            {authMode === 'register' && <input required placeholder="Nome" value={authForm.name} onChange={(event) => setAuthForm({ ...authForm, name: event.target.value })} />}
            <input required type="email" placeholder="Email" value={authForm.email} onChange={(event) => setAuthForm({ ...authForm, email: event.target.value })} />
            <input required minLength="4" type="password" placeholder="Palavra-passe" value={authForm.password} onChange={(event) => setAuthForm({ ...authForm, password: event.target.value })} />
            <button className="primary-button" disabled={loading}>{loading ? 'A ligar...' : authMode === 'login' ? 'Entrar' : 'Criar conta'}</button>
          </form>
          <button className="text-button" onClick={() => { setAuthMode(authMode === 'login' ? 'register' : 'login'); setError('') }}>
            {authMode === 'login' ? 'Ainda não tens conta? Regista-te' : 'Já tens conta? Entra'}
          </button>
          {error && <p className="error">{error}</p>}
        </section>
      </main>
    )
  }

  const visibleTasks = tasks.filter((task) => filter === 'all' || task.status === filter)

  return (
    <main className="app-shell">
      <header className="topbar"><div><p className="eyebrow">TASK MANAGER</p><h1>Bom trabalho, {user.name}.</h1></div><button className="text-button" onClick={() => { localStorage.removeItem('task-manager-user'); setUser(null) }}>Sair</button></header>
      {error && <p className="error banner">{error}</p>}
      <section className="workspace">
        <div className="new-task panel"><p className="eyebrow">NOVA TAREFA</p><h2>O que precisa de acontecer?</h2><form onSubmit={createTask}><input required placeholder="Título da tarefa" value={taskForm.title} onChange={(event) => setTaskForm({ ...taskForm, title: event.target.value })} /><textarea placeholder="Detalhes (opcional)" value={taskForm.description} onChange={(event) => setTaskForm({ ...taskForm, description: event.target.value })} /><input type="date" value={taskForm.due_date} onChange={(event) => setTaskForm({ ...taskForm, due_date: event.target.value })} /><button className="primary-button">Adicionar tarefa</button></form></div>
        <div className="task-area"><div className="task-heading"><div><p className="eyebrow">A TUA LISTA</p><h2>{tasks.length} tarefas</h2></div><select value={filter} onChange={(event) => setFilter(event.target.value)}><option value="all">Todas</option><option value="pending">Pendentes</option><option value="done">Concluídas</option></select></div><div className="task-list">{visibleTasks.map((task) => <article className={`task ${task.status === 'done' ? 'completed' : ''}`} key={task.id}><button className="check" aria-label="Marcar tarefa" onClick={() => toggleTask(task)}>{task.status === 'done' ? '✓' : ''}</button><div className="task-copy"><h3>{task.title}</h3>{task.description && <p>{task.description}</p>}{task.due_date && <small>Prazo: {task.due_date}</small>}</div><button className="delete-button" aria-label="Eliminar tarefa" onClick={() => removeTask(task.id)}>Eliminar</button></article>)}{visibleTasks.length === 0 && <div className="empty">Ainda não há tarefas neste filtro.</div>}</div></div>
      </section>
    </main>
  )
}

export default App
