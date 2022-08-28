// aquí vamos  a traer todos los tipos de dietas que hay,
const { Router } = require('express');
const {Diets} = require ('../db');
const {typesdiets} = require('../controllers/Diet');

const router = Router();
router.get('/', async (req,res, next) =>{

    try {
        typesdiets.forEach(async p => {
            await Diets.findOrCreate({
                where: { Dname: p}
            })
        });
        const ediets = await Diets.findAll();
        res.send(ediets);
    } catch (error) {
       next(error);
    }
})



module.exports = router;