const express = require("express");

const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The user ID.
 *           example: 0
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: Leanne Graham
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: List of users 
 *     tags:
 *     - Users
 *     description: List of users who uses an application
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 */
router.get("/", function (req, res, next) {
  console.log("get users api");
  res.send([
    { id: 1, name: "Jan Kowalski" },
    { id: 2, name: "Ola N" },
  ]);
});

module.exports = router;
