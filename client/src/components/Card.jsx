import React from "react";
import './estilos/Cartita.css'

export default function Card({image, title, diets, healthScore, id}){
    const dietsss = [];
    for(let i = 0; i < diets.length; i++){
        dietsss.push(diets[i]);
    }
return (
    <div className="containerr">

<div className="card">
    <h2>{id}</h2>


        <img src={image} alt="img not found" width="100px" height="100px"/>



<h2>NOMBRE:</h2>
<h5>{title}</h5>
<p>Tipo de dieta</p>
<div >
{
     dietsss.map(el => (
        <div >
            <h5 key={el}><li>
                {el}</li>
            </h5>
        </div>
    ))}
 </div>

<h2>HEALTSCORE:</h2>
<h5>{healthScore}</h5>


</div>


   </div>
);

}