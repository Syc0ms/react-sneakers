import classes from "./Basket.module.scss"
import BasketItem from "./BasketItem";
const Basket = ({onClick, items = [] }) => {

    return (
    <div className={classes.overlay} >
        <div  className={classes.drawer}>
            <div className={classes.itemName}>
                <h2>Zambyux</h2>
                <div className={classes.close}>
                    <img onClick={onClick} src="/img/close.svg" alt="" />
                </div>
            </div>
            <div className={classes.mainItems}>
                {
                    items.map((obj, index) => 
                        <BasketItem key={index} obj={obj}/>
                    )
                    
                }
            </div>
            
            <div key={items.id} className={classes.orderResult}>
                <div>
                        {
                            items.map((obj, index) =>
                                <ul key={index} className={classes.ulInBasket}>
                                    <li className={classes.liInBasket}>
                                        <span>Ընդհանուր</span>
                                        <div><img src="img/breakLines.svg" alt="" /></div>
                                        <b>{obj.value} AMD</b>
                                    </li>
                                    <li className={classes.liInBasket}>
                                        <span>Հարկ: 5%</span>
                                        <div><img src="img/breakLines.svg" alt="" /></div>
                                        <b>1049.95 rub.</b>
                                    </li>
                                </ul>

                            )
                        }
                        

                </div>

                <button className={classes.btn}>Զակազ բիշիմյորում
                    <img src="img/arrow.svg" alt="" />
                </button>
            </div>
        
        </div>
  </div> 
)}


export default Basket;