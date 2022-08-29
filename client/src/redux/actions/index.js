import axios from "axios";

export function getAllfood () {
    return async (dispatch) =>{
      try{
      let data = await  axios.get("http://localhost:3001/recipes", {
        
      });
    return dispatch({

        type: "GET_FOOD",
        payload: data.data
    })
    }catch( error){
    console.log(error)
    }
  }
  };

  export function getFoodName (name){
return async (dispatch) => {
  try {
    const data = await axios.get(`http://localhost:3001/recipes/?title=${name}`);
    return dispatch({
      type: "GET_NAME",
      payload: data.data,
    })
  } catch (error) {
    console.log(error);
  }
}

  };

  export function getFoodDetail (id){
    return async (dispatch) => {
      try {
        const data = await axios.get(`http://localhost:3001/recipes/${id}`);
        return dispatch ({
          type: "GET_DETAIL",
          payload: data.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  };

  export function getDiet (){
    return async (dispatch) => {
      try {
        const data = await  axios.get("http://localhost:3001/types", {});
      console.log(data)
        return dispatch({
          type: "GET_DIET",
          payload: data.data.map(p => p.Dname)
        })      
      } catch (error) {
        console.log(error);
      }
    }
  };

  export function postDiets(payload){
    return async function (dispatch){
try{
      const databonita = await axios.post('http://localhost:3001/postRecipe', payload)

      return dispatch({
        type: "CREATE_R",
        payload: databonita.data
      })
    }catch(error){
      console.log(error);
    }
    }
  }

  export function FilterByName (payload){
return{
  type: "ORDER_NAME",
  payload
}
  };


   export function FilterByDiet (payload){
    
    return {
      type: "FILTER_TYPE_DIET",
      payload
    }
  };
  export function filterbyorientation(payload){
    
return{
  type: "FILTER_ORIENTATION",
  payload
}

  }

  export function filterhealtScore(payload){
   
    return{
    type: "FILTER_SCORE",
    payload
  }
  }
  
 