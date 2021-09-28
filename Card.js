import React from "react";
import "tachyons";
import "./Card.css";



const Card = (props) => {
    return ( < span > <
        div className = "Card tc" >
        <
        h1 > Property - { props.id } < /h1>  <
        h5 > { props.name } < /h5>  < /
        div >
        <
        /span>

    )


}

export default Card;