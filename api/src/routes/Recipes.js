//---OBTENER RECIPES POR QUERY---//
const { getall, getidbd, getidapi} = require ('../controllers/Recipe');
const { Router } = require ('express');


const router = Router();

router.get('/', async(req,res) =>{
    const{title} = req.query;
    
     const allr = await getall();
     
if (title) {
    const rnombre = await allr.filter(p => p.title.toLowerCase().includes(title.toLowerCase()));
    rnombre.length ?
       
        res.status(200).send(rnombre):
        res.status(404).send("no esta la receta");

    }
   
else{
        return res.status(200).send(allr);}
 })


   



//-----------------GET ID----------------//
router.get('/:id', async(req,res)=>{
    
    const id = req.params.id;
    const getallrecepes = await getall()
    if (id) {
        let recipeid = await getallrecepes.filter(el => el.id == id)
        recipeid.length?
        res.status(200).json(recipeid) :
        res.status(404).send("no existe la ruta")
    }
})

module.exports  = router;