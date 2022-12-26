import { useState } from "react";
import classes from "./Card.module.scss"


const Card = (props) => {
    const onClickPlus = () => {
        setIsAdded(!isAdded)
    } 
    const [isAdded, setIsAdded] = useState(true)    
    return (
        
        <div key={props.id} className= {classes.card}>
            <div className={classes.favorite}>
                <img src="/img/liked-disactive.png" alt="" />
                </div>
                    <img src={props.img} alt="" />
                    <p> {props.description}</p>
                    <div className={classes.cardBottom}>
                        <div className={classes.cardInfo}>
                        <span>Gin:</span>
                        <b>{props.value} AMD</b>
                        </div>
                           <button onClick={onClickPlus}><img src={ isAdded ?  "/img/buttonPlus.svg" : "img/clickedPlus.png"} alt=""/></button>
                        </div>
                    </div>
        )
        
}
export default Card;
