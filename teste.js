const { Client } = require('pg');

// Configuração da string de conexão com a senha codificada
const connectionString = 'postgres://postgres:7WG9X9zJ%23651g%25z9@localhost:5432/postgres';

// Criar uma nova instância do cliente
const client = new Client({
  connectionString: connectionString,
});

// Conectar ao banco de dados
client.connect()
  .then(() => {
    console.log('Conectado ao banco de dados PostgreSQL com sucesso!');
    // Aqui você pode realizar consultas ao banco de dados
  })
  .catch(err => console.error('Erro ao conectar ao banco de dados', err.stack))
  .finally(() => client.end());
