// import React from "react";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
	


function Character(props) {
    // listCharacters = [
    //     {

    //     }
    // ]


    const { store, actions } = useContext(Context);
    // store.demo

    const heart=()=>{
        // actions.addDemo('tala', 'vera')
        // console.log(store.demo) 
        fetch('https://swapi.dev/api/people/1')
        .then(resp=>resp.json())
        .then(data=>console.log(data))
    };
    return (
        <>
            <div className="card mx-1 rounded my-3">
                <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt="Card image cap" />
                <div className="card-body bg-black text-white">
                    <h5 className="card-title d-flex justify-content-center">{props.title}</h5>
                    <p className="card-text d-flex text-center">{props.text}</p>
                    <Link to={props.link} className="btn btn-dark mx-4">Learn more</Link>
                    <button 
                    type="button" 
                    onClick={()=>heart()} 
                    className="btn btn-outline-danger">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </>
    );
}
const Characters=()=>{
    return(
        <>
        
        <Character 
            title="R2-D2" 
            text="Gender: male, Eye Color: Blue, Hair Color:Brown"
            buttom="Learm more"
            link="r2d2"/>

        <Character 
            title="C-3PO" 
            text="Gender: male, Eye Color: Blue, Hair Color:Brown"
            buttom="Learn more"
            link="c3po"/>
            
        <Character 
            title="LUCK"
            text="Gender: male, Eye Color: Blue, Hair Color:Brown"
            buttom="Learn more"
            link="/luck"/>

        <Character 
            title="LEIA" 
            text="Gender: male, Eye Color: Blue, Hair Color:Brown"
            buttom="Learn more"
            link="/leia"/>
        
        </>
    )
}


export default Characters;