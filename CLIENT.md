# | Sobre a instalação do ambiente Client Side
------------------------------------------------------------------------------------

# Sobre o Node.js e o npm
O Node.js é o ambiente de execução JavaScript usado para correr ferramentas de desenvolvimento e gerir dependências do Frontend.

O npm (Node Package Manager) é o gestor de pacotes oficial do Node.js e serve para instalar bibliotecas, scripts e dependências do projeto.

Quando um projeto em React é criado, o npm usa o ficheiro package.json para saber:
- qual o nome da aplicação
- quais as dependências necessárias
- quais os scripts disponíveis
- como iniciar, compilar e fazer build do projeto

# Sobre o diretório do projeto React
A aplicação React está organizada dentro da pasta:

React/

Dentro desta pasta ficam os ficheiros principais do Frontend:
- package.json
- package-lock.json
- vite.config.js
- index.html
- src/
- public/
- .gitignore
- CLIENT.md

# Sobre o ficheiro package.json
O package.json define o projeto e os comandos que o utilizador pode executar.

No caso deste projeto, o React usa o Vite como ferramenta de desenvolvimento.

Comandos principais:
- npm install
- npm run dev
- npm run build
- npm run preview

# Sobre o Vite
O Vite é uma ferramenta moderna para criar, desenvolver e compilar aplicações React.

As vantagens principais são:
- arranque rápido do servidor de desenvolvimento
- recarga automática ao guardar ficheiros
- build otimizada para produção
- excelente experiência em projetos Frontend

# Sobre o .gitignore para React
O .gitignore serve para evitar que ficheiros pesados e gerados automaticamente sejam enviados para o GitHub.

No Frontend, os elementos mais importantes a ignorar são:
- node_modules/
- dist/
- dist-ssr/
- ficheiros temporários de desenvolvimento
- ficheiros de configuração locais do editor

Exemplo da regra usada neste projeto:
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Sobre o comando npm install
Este comando instala todas as dependências listadas no package.json para o projeto.

É o primeiro comando que deves executar quando abres o projeto novo em outra máquina.

# Sobre o comando npm run dev
Este comando inicia o servidor de desenvolvimento do Vite.

Se tudo estiver correto, o projeto abre normalmente no browser em:
- http://localhost:5173

# Sobre o comando npm run build
Este comando compila a aplicação para produção.

Gera a pasta dist com os ficheiros otimizados para serem utilizados em ambiente de produção.

# Sobre o comando npm run preview
Serve para pré-visualizar a aplicação já compilada em modo de produção.

É útil para testar o build final antes de publicar.

# Sobre a estrutura dentro da pasta src
A pasta src é o núcleo da aplicação React.

Normalmente contém:
- main.jsx: ponto de entrada da aplicação
- App.jsx: componente principal
- App.css: estilos da aplicação
- index.css: estilos globais
- assets/: imagens e outros recursos

Neste projeto, a estrutura foi organizada para manter apenas o que é necessário para o funcionamento da aplicação.

# Como iniciar o Frontend
1. Abre o terminal na pasta do cliente:
# cd ProjetoFinal-TaskManager-Client\React

2. Instala as dependências:
# npm install

3. Inicia o servidor de desenvolvimento:
# npm run dev

4. Abre no navegador:
# http://localhost:5173

# Verificar se o Node.js está instalado
cmd: node -v
cmd: npm -v

Se estes comandos devolvem versões, o ambiente está configurado corretamente.

# Caso apareça erro ao iniciar o projeto
- Verifica se o Node.js está instalado corretamente
- Executa novamente: npm install
- Confirma que o terminal está na pasta correta
- Se o projeto não abrir, pode ser necessário limpar a cache do npm:
# npm cache clean --force

# Conexão com o Backend
A aplicação Frontend comunica com a API Python/FastAPI do repositório do server.

No projeto atual, a API está em:
- http://127.0.0.1:8000

O cliente React está a correr em:
- http://localhost:5173

A comunicação do Frontend com o Backend é feita através de pedidos HTTP (fetch) e JSON, com rotas como:
- POST /auth/register
- POST /auth/login
- GET /tasks
- POST /tasks
- PATCH /tasks/{task_id}
- DELETE /tasks/{task_id}

# Boas práticas do Frontend
- manter a estrutura da pasta src organizada
- evitar ficheiros duplicados e pastas antigas
- manter apenas um package.json e um package-lock.json por projeto
- não enviar node_modules para o GitHub
- não enviar ficheiros de build (dist) para o GitHub

# Projeto React oficialmente ativo
O Frontend está configurado para funcionar em modo de desenvolvimento com Vite e para comunicar com o Backend FastAPI, seguindo a arquitetura definida para o projeto de gestão de tarefas.

# Organização final confirmada
A estrutura atual do cliente está correta e organizada:
- a pasta raiz do cliente contém apenas a estrutura principal do projeto
- a aplicação React encontra-se em React/
- não existem pastas duplicadas de projeto a mais
- há apenas um package.json e um package-lock.json no diretório funcional da aplicação
- os ficheiros gerados automaticamente (node_modules, dist) ficam em local de desenvolvimento e não são parte da entrega do projeto
