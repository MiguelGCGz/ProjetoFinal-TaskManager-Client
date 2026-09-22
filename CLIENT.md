Client Side

# Configurar o Frontend (React)Para garantir que o Frontend comunica perfeitamente com este 
Backend que acabámos de ligar, recomendo que  no projeto React utilizando o Vite (que é o padrão moderno da indústria, muito mais rápido que o antigo create-react-app).Abram um novo terminal (mantenham o do servidor aberto para ele continuar a correr) e sigam estes passos:Naveguem até à pasta do cliente:powershellcd C:\UC617GIT\Projeto-Final\ProjetoFinal-TaskManager-Client

# Criar o projeto React com Vite:powershellnpm create vite@latest . -- --template react

Instalar as dependências do Node.js:powershellnpm install

# Instalar a biblioteca para fazer pedidos à API (Opcional, mas altamente recomendado):A vossa equipa vai precisar de fazer pedidos HTTP (GET, POST) ao FastAPI. A biblioteca mais utilizada para isto no React é o Axios:powershellnpm install axios

# No Frontend Antes de enviar o código do React para o GitHub, certifiquem-se de que a pasta node_modules/ não vai para o repositório. O Vite costuma criar o ficheiro .gitignore automaticamente, mas vale a pena abrir o ficheiro .gitignore na raiz do cliente e confirmar se ele tem esta linha:textnode_modules/
dist/
.env.local