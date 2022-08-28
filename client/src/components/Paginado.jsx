import React from "react";import './estilos/Paginado.css';

export default function Paginado({foodpages, allfood, paginado}){

    const pagenumbers = [];

    for (let index = 1; index <= Math.ceil(allfood/foodpages); index++) {
        pagenumbers.push(index);
        

    }

    return(

        <nav className="paginacion">

            <ul >
                {pagenumbers && 
                pagenumbers.map(number =>(
                    <li key={number}>
                    <a onClick={() => paginado(number)}>{number} </a>
                    </li>
                    ))}
            </ul>
        </nav>
    )
}