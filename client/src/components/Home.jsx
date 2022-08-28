import React from "react";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllfood,FilterByDiet,filterhealtScore, filterbyorientation} from '../redux/actions/index';
import Paginado from "./Paginado";
import Card from "./Card";
import './estilos/Home.css';


export default function Home(){
    
    const dispatch = useDispatch();
    const allfood = useSelector((state) => state.allrecipes);
    const [order, setOrder] = useState('');
    const [currentPage, setcurrentPage] = useState(1); // creamos un estado local para saber por donde va a comenzar el paginado
    const [foodpages, setFoodpages] = useState(9); //cuantas recetas vamos a tener en cada paginado
    const indicelast = currentPage * foodpages; 
    const indicefirst = indicelast - foodpages; 
    const currentfood = allfood.slice(indicefirst, indicelast);//aqui se va guardando cada receta que se renderiza en cada pagina especifica

    const paginado = (npage) =>{
        setcurrentPage(npage)
    }

    useEffect(()=>{

        dispatch(getAllfood());

    }, [dispatch])

    function handleClick(e){
e.preventDefault();
dispatch (getAllfood());
    }


 function handleFilterByTypeDiet  (e) {
    e.preventDefault();
     dispatch(FilterByDiet(e.target.value));
    setcurrentPage(1)
    }

    function handlesort (e){
        e.preventDefault();
        dispatch(filterbyorientation(e.target.value))
        setcurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }
    function handleScore(e){
        e.preventDefault();
        dispatch(filterhealtScore(e.target.value))
        setcurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }

    return (
        <div>
            <Link to="/recipe"> CREAR RECETA</Link>
            <h1 className="elacheuno">PI FOODS</h1>
            <button onClick={e=> {handleClick(e)}}> REFRESH</button>
        
        <div>
                        <select onChange={e => handlesort(e)} className="orientation">
            <option value="none" selected disabled hidden> ORIENTATION </option>
            <option value="asc"> A-Z </option>
            <option value="des"> Z-A </option>
                        </select>
                        <select onChange={e => handleScore(e)} className="healt" >
            <option value="none" selected disabled hidden> HEALTSCORE </option>
            <option value="max"> Hight </option>
            <option value="min"> Low </option>
                        </select>

                        <select onChange={e => handleFilterByTypeDiet(e)} className="dietss">
            <option value="All"> Todos </option>
            <option value="vegetarian">vegetarian</option>
            <option value="vegan">vegan</option>
            <option value="whole 30">Whole30</option>
            <option value="gluten free">gluten free</option>
            <option value="ketogenic">ketogenic</option>
            <option value="lacto vegetarian">lacto vegetarian</option>
            <option value="lacto ovo vegetarian">ovo Vegetarian</option>
            <option value="pescatarian">pescetarian</option>
            <option value="paleo">paleo</option>
            <option value="primal">primal</option>
            <option value="low fodmap">low fodmap</option>
                        </select>

                        
                     <br></br><br></br>
                     
                        <Paginado
                            foodpages = {foodpages}
                            allfood = {allfood.length}
                            paginado = {paginado}
                            
                         />
                        <SearchBar/><br></br><br></br>     
                     <div className="cartitas">
                        {
currentfood?.map((e) =>{
                    return(       
                     
                         <Link to={"/home/" + e.id}>    
                         
<Card title={e.title} image={e.image} diets={e.diets} id={e.id} healthScore={e.healthScore}  />
</Link>

                           ) })
                        }
                         </div><br></br><br></br>
                         <Paginado
                            foodpages = {foodpages}
                            allfood = {allfood.length}
                            paginado = {paginado}/>
 
        </div>
        </div>
      
    )
}