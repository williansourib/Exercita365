// routes/trainingLocationRoutes.js

/**
 * @swagger
 * components:
 *   schemas:
 *     TrainingLocation:
 *       type: object
 *       required:
 *         - name
 *         - latitude
 *         - longitude
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do local de treino
 *         name:
 *           type: string
 *           description: Nome do local de treino
 *         description:
 *           type: string
 *           description: Descrição do local de treino
 *         latitude:
 *           type: number
 *           description: Latitude do local de treino
 *         longitude:
 *           type: number
 *           description: Longitude do local de treino
 *         userId:
 *           type: integer
 *           description: ID do usuário que criou o local
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data e hora de criação
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Data e hora de última atualização
 *       example:
 *         id: 1
 *         name: Parque Ibirapuera
 *         description: Um ótimo lugar para correr e relaxar
 *         latitude: -23.587416
 *         longitude: -46.657634
 *         userId: 1
 *         createdAt: 2024-08-05T00:42:38.233Z
 *         updatedAt: 2024-08-05T00:42:38.233Z
 */

/**
 * @swagger
 * /local:
 *   post:
 *     summary: Cria um novo local de treino
 *     tags: [TrainingLocation]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TrainingLocation'
 *     responses:
 *       201:
 *         description: Local de treino criado com sucesso
 *       400:
 *         description: Erro de validação
 */

/**
 * @swagger
 * /local:
 *   get:
 *     summary: Lista todos os locais de treino do usuário autenticado
 *     tags: [TrainingLocation]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Uma lista de locais de treino
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TrainingLocation'
 */

/**
 * @swagger
 * /local/{local_id}:
 *   put:
 *     summary: Atualiza um local de treino existente
 *     tags: [TrainingLocation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: local_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do local de treino
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TrainingLocation'
 *     responses:
 *       200:
 *         description: Local de treino atualizado com sucesso
 *       404:
 *         description: Local não encontrado ou não autorizado
 */

/**
 * @swagger
 * /local/{local_id}:
 *   delete:
 *     summary: Exclui um local de treino existente
 *     tags: [TrainingLocation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: local_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do local de treino
 *     responses:
 *       204:
 *         description: Local de treino excluído com sucesso
 *       404:
 *         description: Local não encontrado ou não autorizado
 */

/**
 * @swagger
 * /local/{local_id}/maps:
 *   get:
 *     summary: Gera um link do Google Maps para o local de treino
 *     tags: [TrainingLocation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: local_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do local de treino
 *     responses:
 *       200:
 *         description: Link do Google Maps gerado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 googleMapsLink:
 *                   type: string
 *                   description: Link do Google Maps
 *       404:
 *         description: Local não encontrado ou não autorizado
 */

const express = require('express');
const { createLocation, getLocations, updateLocation, deleteLocation, getLocationMapLink } = require('../controllers/trainingLocationController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/local', authMiddleware, createLocation);
router.get('/local', authMiddleware, getLocations);
router.put('/local/:local_id', authMiddleware, updateLocation);
router.delete('/local/:local_id', authMiddleware, deleteLocation);
router.get('/local/:local_id/maps', authMiddleware, getLocationMapLink);

module.exports = router;
