import React from "react";
import { Link } from "react-router-dom";

const Character=(props)=>{
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
const Characters=()=>{
    return(
        <>
        
        <Character 
            title="R2-D2" 
            text="No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, 
            simplemente porque es el dolor."
            buttom="Learm more"
            link="r2d2"/>

        <Character 
            title="C3PO" 
            text="No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, 
            simplemente porque es el dolor."
            buttom="Learn more"
            link="c3po"/>
            

        <Character 
            title="LUCK"
            text="No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, 
            simplemente porque es el dolor."
            buttom="Learn more"
            link="/luck"/>

        <Character 
            title="LEIA" 
            text="No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, 
            simplemente porque es el dolor."
            buttom="Learn more"
            link="/leia"/>
        
        </>
    )
}


export default Characters;