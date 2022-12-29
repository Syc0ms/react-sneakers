import { useState } from "react";
import classes from "./Card.module.scss"


const Card = ({img, description, value, id, addToCard}) => {
    const [state, setState] = useState(true) 
    const removeItemFromBasket = () => {
        setState(state => !state)
    } 
    const onClickPlus = () => {
        setIsAdded(!isAdded)
        addToCard({img, description, value});
    }

    const [isAdded, setIsAdded] = useState(true)    
    return (
        <div key={id} className= {classes.card}>
            <div className={classes.favorite}>
                <img src="/img/liked-disactive.png" alt="" />
                </div>
                    <img src={img} alt="" />
                    <p> {description}</p>
                    <div className={classes.cardBottom}>
                        <div className={classes.cardInfo}>
                        <span>Gin:</span>
                        <b>{value} AMD</b>
                        </div>
                           <button onClick={onClickPlus}><img src= { isAdded ?  "/img/buttonPlus.svg" : "img/clickedPlus.png"} alt=""/></button>
                        </div>
                    </div>
        )
        
}
export default Card;
