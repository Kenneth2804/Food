const axios = require("axios");
const {Recipe, Diets} = require('../db');

const getidapi = async(id)=>{
    const idapi = await axios.get(`https://api.spoonacular.com/recipes/${id}/information&addRecipeInformation=trueapiKey=16c82f06a75c4c7e93fe05a63d1d1796`);
   
    return idapi.data;
}

const getidbd = async(id)=>{
    return await Recipe.findByPk(id, {
        include: {
            model: Diets,
            attributes: ['Dname'],
            throught:{ 
                attributes: [],
            }
        }
    })
}
const getapi = async()=>{
    const apiurl = await axios.get("https://api.spoonacular.com/recipes/complexSearch?&addRecipeInformation=true&apiKey=16c82f06a75c4c7e93fe05a63d1d1796&number=100");


const apibfo = await apiurl.data.results.map((c)=> {
    return{
    id: c.id,
    title: c.title,
    summary: c.summary,
    healthScore: c.healthScore,
    image: c.image,
    steps: c.analyzedInstructions[0]?.steps.map((p) =>{
        return  (p.step)
          
        
    }),
    diets: c.diets,
}
})
return apibfo;
};

const getbd = async()=>{
    const recipeDb = await Recipe.findAll({
        include: {
            model: Diets, 
            attributes: ['Dname'],
            throught: { attributes: [],
            }
        }
    });
    return recipeDb.map(e => {
        return{
            id: e.id,
            title: e.title,
            image: e.image,
            summary: e.summary,
            healthScore: e.healthScore,
            diets: e.diets.map(e => e.Dname),
            steps: e.steps,
            createdInBd: e.createdInBd,
        
        }
    })
};


const getall = async ()=>{
    const getapii = await getapi();
    const getbdd = await getbd();
    const allr = getapii.concat(getbdd);
    return allr;
}
module.exports = {getall, getbd, getapi, getidapi, getidbd}

