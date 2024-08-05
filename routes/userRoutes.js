// routes/userRoutes.js

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - cpf
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: Nome do usuário
 *         email:
 *           type: string
 *           description: Email do usuário
 *         cpf:
 *           type: string
 *           description: CPF do usuário
 *         password:
 *           type: string
 *           description: Senha do usuário
 *         birthdate:
 *           type: string
 *           format: date
 *           description: Data de nascimento do usuário
 *         address:
 *           type: string
 *           description: Endereço do usuário
 *       example:
 *         name: João da Silva
 *         email: joao.silva@example.com
 *         cpf: "12345678901"
 *         password: senha123
 *         birthdate: 1980-01-01
 *         address: Rua Exemplo, 123
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: Email do usuário
 *         password:
 *           type: string
 *           description: Senha do usuário
 *       example:
 *         email: joao.silva@example.com
 *         password: senha123
 */

/**
 * @swagger
 * /usuario:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro de validação
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza o login de um usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Login realizado com sucesso, retorna o token JWT
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT para autenticação
 *       400:
 *         description: Email ou senha inválidos
 */

const express = require('express');
const { createUser, loginUser } = require('../controllers/userController');
const router = express.Router();

router.post('/usuario', createUser);
router.post('/login', loginUser);

module.exports = router;
