//----POSTS-----//

const {Router} = require ('express');
const { Recipe, Diets} = require ('../db');


const router = Router();


router.post('/', async(req,res) =>{
 
    const {title, summary, healthScore, image, steps, diets, createdInBd} = req.body;

    try {
        const nuevo = await Recipe.create({
            title, 
            summary,
            healthScore,
            image,
            steps,
            diets,
            createdInBd,
    
        })
        const dieta = await Diets.findAll({
            where : { 
                Dname: diets
            }
        })
    
     nuevo.addDiets(dieta);
     res.status(200).send(nuevo);    

    } catch (error) {

        res.status(400).json(error.message)
    }
    })


module.exports =router;