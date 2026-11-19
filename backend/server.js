import 'dotenv/config';
import app from './app.js';
import sequelize from './src/config/database.js';

const port = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com PostgreSQL estabelecida.');

    const server = app.listen(port, () => {
      console.log(`Backend disponível em http://localhost:${port}`);
    });

    server.on('error', (error) => {
      console.error('Não foi possível iniciar o servidor:', error.message);
      process.exitCode = 1;
    });
  } catch (error) {
    console.error('Não foi possível conectar ao PostgreSQL:', error.message);
    process.exitCode = 1;
  }
}

start();
