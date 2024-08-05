// app.js

require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const routes = require('./routes');
const swagger = require('./docs/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

// Configura o Swagger
swagger(app);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
