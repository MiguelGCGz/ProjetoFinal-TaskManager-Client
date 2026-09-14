const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.detail || 'Não foi possível comunicar com o servidor.')
  }

  return response.status === 204 ? null : response.json()
}

export const api = {
  login: (credentials) => request('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  register: (credentials) => request('/auth/register', { method: 'POST', body: JSON.stringify(credentials) }),
  listTasks: (userId) => request(`/tasks?user_id=${userId}`),
  createTask: (userId, task) => request(`/tasks?user_id=${userId}`, { method: 'POST', body: JSON.stringify(task) }),
  updateTask: (userId, task) => request(`/tasks/${task.id}?user_id=${userId}`, { method: 'PATCH', body: JSON.stringify(task) }),
  deleteTask: (userId, taskId) => request(`/tasks/${taskId}?user_id=${userId}`, { method: 'DELETE' }),
}