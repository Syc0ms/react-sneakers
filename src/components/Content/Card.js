import classes from "./Card.module.scss"
const Card = () => {
    return (
        <div className= {classes.card}>
            <div className={classes.favorite}>
                <img src="/img/liked-disactive.svg" alt="" />
                </div>
                    <img src="/img/koshik1.jpg" alt="" />
                    <p>I die on your body samiy klasniy trex iz vsex trexov</p>
                    <div className={classes.cardBottom}>
                        <div className={classes.cardInfo}>
                        <span>Gin:</span>
                        <b>122.999 AMD</b>
                        </div>
                           <button><img src="/img/buttonPlus.svg" alt="" /></button>
                        </div>
                    </div>
)}
export default Card;
