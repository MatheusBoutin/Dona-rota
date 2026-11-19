# Controle de Excursões

Estrutura inicial do sistema de gerenciamento de excursões. Nesta etapa, a aplicação contém somente uma página de boas-vindas e uma rota de verificação. Nenhuma tabela é criada.

## Pré-requisitos

- Node.js 20.19+ ou 22.12+ e npm
- PostgreSQL local, com `psql` disponível no terminal

Execute os comandos abaixo no PowerShell, a partir da pasta `controle-excursoes`, salvo quando indicado.

## Banco de dados

Entre no PostgreSQL como administrador (ajuste o nome do usuário, se necessário):

```powershell
psql -U postgres -h localhost
```

No prompt do `psql`, execute:

```sql
CREATE USER controle_excursoes_app WITH PASSWORD 'escolha_uma_senha_forte';
CREATE DATABASE controle_excursoes OWNER controle_excursoes_app;
```

O comando `CREATE DATABASE ... OWNER` associa o banco ao usuário da aplicação. Saia com `\q`. Esses comandos não criam tabelas.

## Backend

```powershell
cd backend
npm install
Copy-Item .env.example .env
```

Edite `backend/.env` e substitua `DB_PASSWORD` pela senha escolhida no SQL. Ajuste `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER` e `PORT` se necessário. O arquivo `.env` está ignorado pelo Git.

Inicie o backend:

```powershell
npm run dev
```

Para iniciar sem Nodemon, use `npm start`. A mensagem `Conexão com PostgreSQL estabelecida.` confirma a conexão. Se houver erro, o processo informa a causa e termina.

Para testar a conexão diretamente com o banco em outro terminal:

```powershell
psql -U controle_excursoes_app -h localhost -d controle_excursoes -c "SELECT current_database(), current_user;"
```

Para confirmar que nenhuma tabela da aplicação foi criada:

```powershell
psql -U controle_excursoes_app -h localhost -d controle_excursoes -c "SELECT tablename FROM pg_tables WHERE schemaname = 'public';"
```

Para testar a rota do backend:

```powershell
Invoke-RestMethod http://localhost:3000/api/health
```

A resposta deve conter `status: ok` e `message: Backend funcionando` (HTTP 200).

## Frontend

Em outro terminal, a partir de `controle-excursoes`:

```powershell
cd frontend
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite, normalmente `http://localhost:5173/`. O proxy do Vite encaminha `/api` para `http://localhost:3000`. Com os dois servidores ativos, também é possível testar `http://localhost:5173/api/health`.
