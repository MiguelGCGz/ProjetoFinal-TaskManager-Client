Client Side

# Configurar o Frontend (React)Para garantir que o Frontend comunica perfeitamente com este 
Backend que acabámos de ligar, recomendo que  no projeto React utilizando o Vite (que é o padrão moderno da indústria, muito mais rápido que o antigo create-react-app).Abram um novo terminal (mantenham o do servidor aberto para ele continuar a correr) e sigam estes passos:Naveguem até à pasta do cliente:powershellcd C:\UC617GIT\Projeto-Final\ProjetoFinal-TaskManager-Client

# Criar o projeto React com Vite:powershellnpm create vite@latest . -- --template react

Instalar as dependências do Node.js:powershellnpm install

# Instalar a biblioteca para fazer pedidos à API (Opcional, mas altamente recomendado):A vossa equipa vai precisar de fazer pedidos HTTP (GET, POST) ao FastAPI. A biblioteca mais utilizada para isto no React é o Axios:powershellnpm install axios

# No Frontend Antes de enviar o código do React para o GitHub, certifiquem-se de que a pasta node_modules/ não vai para o repositório. O Vite costuma criar o ficheiro .gitignore automaticamente, mas vale a pena abrir o ficheiro .gitignore na raiz do cliente e confirmar se ele tem esta linha:textnode_modules/
dist/
.env.local



# Delegar uma tarefa para outro utilizador
/**
 * Delega uma tarefa para outro utilizador
 * @param {string|number} currentUserId - ID do utilizador que é dono atual da tarefa
 * @param {object} task - O objeto da tarefa original
 * @param {string|number} newUserId - ID do utilizador que vai receber a tarefa
 */
async function delegarTarefa(currentUserId, task, newUserId) {
  try {
    // Criamos uma cópia da tarefa alterando o ID do utilizador responsável
    const tarefaDelegada = {
      ...task,
      user_id: newUserId // ou o campo que o seu backend espera (ex: assigned_to)
    }

    // Chamamos o método updateTask existente na sua api
    const resultado = await api.updateTask(currentUserId, tarefaDelegada)
    
    console.log('Tarefa delegada com sucesso!', resultado)
    return resultado
  } catch (error) {
    console.error('Erro ao delegar tarefa:', error.message)
    throw error
  }
}

# O que precisa de garantir no Backend:Atributo Correto: Confirme se o campo que define o dono da tarefa na sua base de   
dados se chama exatamente user_id. Se o backend usar algo como assigned_to_id, ajuste o objeto enviado.Permissões: O seu backend na rota PATCH /tasks/{id} deve permitir que o currentUserId (enviado na query string) tenha permissões para transferir a tarefa para terceiros.