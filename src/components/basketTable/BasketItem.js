import { useState } from "react"
import classes from "./BasketItem.module.scss"
const BasketItem = (props) => {
const [state, setState] = useState(true) 
const removeItemFromBasket = () => {
    setState(state => !state)
} 
    
    return (
        <div>
            {
                state ? <div key={props.obj.id} className={classes.items}>
                    <img src={props.obj.img} alt="" />
                    <div className={classes.text}>
                        <span>{props.obj.description}</span>
                        <b>{props.obj.value} AMD</b>
                    </div>
                    <div className={classes.close}>
                        <img onClick={removeItemFromBasket} src="/img/close.svg" alt="" />
                    </div>
                </div> : null
            }
        </div>
    )
        
}
export default BasketItem