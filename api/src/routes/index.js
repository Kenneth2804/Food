const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const recipe = require('./Recipe');
const diet = require ('./Diet');
const recipes = require ('./Recipes');



router.use('/postRecipe', recipe);
router.use('/recipes', recipes);
router.use('/types', diet);


module.exports = router;


