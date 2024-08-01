const { Sequelize } = require('sequelize');

// Configuração da string de conexão
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:7WG9X9zJ%23651g%25z9@172.22.174.197:5432/postgres';

// Inicializando o Sequelize
const sequelize = new Sequelize(connectionString);

// Exportando a instância do Sequelize
module.exports = sequelize;
