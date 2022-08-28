import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import {getFoodDetail} from '../redux/actions/index';


export default function Details (props){
   
    const dispatch = useDispatch();
useEffect(() => {
dispatch(getFoodDetail(props.match.params.id));

},[dispatch])

const myfoods = useSelector((state) => state.detail)

return(


<div className="card">
{
 myfoods.length>0 ?
 <div >
    <img src={myfoods[0].image} alt="img not found" width="200px" height="250px"/>
    <h1>NAME: {myfoods[0].title}</h1>
    <h2>DIET TYPE: {myfoods[0].diets} </h2>
    <h2>SUMMARY: {myfoods[0].summary.replace(/<[^>]*>?/g)}</h2>
    <h2>HealthScore: {myfoods[0].healthScore}</h2>
    <h5 >steps: {myfoods.steps || "not found"}</h5> 
    
    </div> :
    <p>LOADING...</p>


}
<Link to='/home'>
    <button>Volver</button>
</Link>
</div>
)

}





















