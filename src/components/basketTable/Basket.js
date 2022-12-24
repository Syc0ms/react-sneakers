import classes from "./Basket.module.scss"
const Basket = () => {
    return (
    <div className={classes.overlay} style={{display: "none"}}>
        <div  className={classes.drawer}>
            <div className={classes.itemName}>
                <h2>Zambyux</h2>
                <div className={classes.close}>
                    <img src="/img/close.svg" alt="" />
                    </div>
            </div>
            <div className={classes.mainItems}>
                <div className={classes.items}>
                    <img src="/img/sneaker2.jpg" alt="" />
                    <div className={classes.text}>
                    <span>Мужские Кроссовки Nike Air Max 270</span>
                    <b>12 999 rub.</b>
                    </div>
                    <div className={classes.close}>
                    <img src="/img/close.svg" alt="" />
                    </div>
                </div>
                <div className={classes.items}>
                    <img src="/img/sneaker3.jpg" alt="" />
                    <div className={classes.text}>
                    <span>Мужские Кроссовки Nike Air Max 270</span>
                    <b>8 000 rub.</b>
                    </div>
                    <div className={classes.close}>
                    <img src="/img/close.svg" alt="" />
                    </div>
                </div>
                <div className={classes.items}>
                    <img src="/img/sneaker3.jpg" alt="" />
                    <div className={classes.text}>
                    <span>Мужские Кроссовки Nike Air Max 270</span>
                    <b>8 000 rub.</b>
                    </div>
                    <div className={classes.close}>
                    <img src="/img/close.svg" alt="" />
                    </div>
                </div>
                <div className={classes.items}>
                    <img src="/img/sneaker3.jpg" alt="" />
                    <div className={classes.text}>
                    <span>Мужские Кроссовки Nike Air Max 270</span>
                    <b>8 000 rub.</b>
                    </div>
                    <div className={classes.close}>
                    <img src="/img/close.svg" alt="" />
                    </div>
                </div>
                <div className={classes.items}>
                    <img src="/img/sneaker3.jpg" alt="" />
                    <div className={classes.text}>
                    <span>Мужские Кроссовки Nike Air Max 270</span>
                    <b>8 000 rub.</b>
                    </div>
                    <div className={classes.close}>
                    <img src="/img/close.svg" alt="" />
                    </div>
                </div>
    
                
            </div>
            <div className={classes.orderResult}>
                <ul className={classes.ulInBasket}>
                    <li className={classes.liInBasket}>
                        <span>Ընդհանուր</span>
                        <div><img src="img/breakLines.svg" alt="" /></div>
                        <b>20999 rub.</b>
                    </li>
                    <li className={classes.liInBasket}>
                        <span>Հարկ: 5%</span>
                        <div><img src="img/breakLines.svg" alt="" /></div>
                        <b>1049.95 rub.</b>
                    </li>
                </ul>
                <button className={classes.btn}>Զակազ բիշիմյորում
                    <img src="img/arrow.svg" alt="" />
                </button>
            </div>
        </div>
  </div> 
)}


export default Basket;