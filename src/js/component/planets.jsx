import React from "react";
import { Link } from "react-router-dom";

const Planet=(props)=>{
    return(
    <>
    <div className="card mx-1 rounded my-3">
            <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">{props.title}</h5>
                <p className="card-text d-flex text-center">{props.text}</p>
                <Link to= {props.link}className="btn btn-primary mx-4">Learn more</Link>
                <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-heart"></i></button>
            </div>
    </div>
    </>
    )
}
const Planets=()=>{
    return(
        <>
        
        <Planet 
            title="Geonosis" 
            text="Population last year: 215875616
            Description: Land of oceans"
            link= "/geonosis"/>

        <Planet 
            title="Cantonica" 
            text="Population last year: 4574516
            Description: House of Leia"
            link="/cantonica"/>
            

        <Planet 
            title="Anoat"
            text="Population last year: 54678416+0
            Description: Cheewaka territory"
            link="/anoat"/>

        <Planet 
            title="Crait" 
            text="Population last year: 200000
            Description: Land of Robots"
            link="/crait"/>
        
        </>
    )
}


export default Planets;