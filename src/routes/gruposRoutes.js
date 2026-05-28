const express = require("express");
const router = express.Router();

const {
  obtenerGrupos,
  obtenerGrupoPorId,
  crearGrupo,
  actualizarGrupo,
  eliminarGrupo
} = require("../controllers/gruposController");

/**
 * @swagger
 * tags:
 *   name: Grupos
 *   description: Operaciones sobre grupos de estudio
 */

/**
 * @swagger
 * /api/grupos:
 *   get:
 *     summary: Listar todos los grupos
 *     tags: [Grupos]
 *     responses:
 *       200:
 *         description: Lista de grupos
 *         content:
 *           application/json:
 *             example:
 *               ok: true
 *               total: 2
 *               datos:
 *                 - id: 1
 *                   nombre: "Grupo Redis"
 *                   materia: "Programación IV"
 */
router.get("/", obtenerGrupos);

/**
 * @swagger
 * /api/grupos/{id}:
 *   get:
 *     summary: Obtener un grupo por ID
 *     tags: [Grupos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del grupo
 *     responses:
 *       200:
 *         description: Grupo encontrado
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               nombre: "Grupo Redis"
 *               materia: "Programación IV"
 *       404:
 *         description: Grupo no encontrado
 */
router.get("/:id", obtenerGrupoPorId);

/**
 * @swagger
 * /api/grupos:
 *   post:
 *     summary: Crear un nuevo grupo
 *     tags: [Grupos]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nombre]
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Grupo Node.js"
 *               materia:
 *                 type: string
 *                 example: "Programación IV"
 *               descripcion:
 *                 type: string
 *                 example: "Aprender Node.js y Redis"
 *     responses:
 *       201:
 *         description: Grupo creado exitosamente
 *       400:
 *         description: Campos inválidos o faltantes
 *       401:
 *         description: Token JWT no proporcionado o inválido
 */
router.post("/", crearGrupo);

/**
 * @swagger
 * /api/grupos/{id}:
 *   put:
 *     summary: Actualizar un grupo existente
 *     tags: [Grupos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del grupo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Grupo actualizado"
 *               materia:
 *                 type: string
 *                 example: "Programación Avanzada"
 *               descripcion:
 *                 type: string
 *                 example: "Nuevo contenido del grupo"
 *     responses:
 *       200:
 *         description: Grupo actualizado exitosamente
 *       400:
 *         description: Campos inválidos
 *       401:
 *         description: Token JWT no proporcionado o inválido
 *       403:
 *         description: No tienes permiso para actualizar este grupo
 *       404:
 *         description: Grupo no encontrado
 */
router.put("/:id", actualizarGrupo);

/**
 * @swagger
 * /api/grupos/{id}:
 *   delete:
 *     summary: Eliminar un grupo existente
 *     tags: [Grupos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del grupo a eliminar
 *     responses:
 *       200:
 *         description: Grupo eliminado exitosamente
 *       401:
 *         description: Token JWT no proporcionado o inválido
 *       403:
 *         description: No tienes permiso para eliminar este grupo
 *       404:
 *         description: Grupo no encontrado
 */
router.delete("/:id", eliminarGrupo);

module.exports = router;