import classes from "./Content.module.scss"

const Content = () => {
    return (
        <div className={classes.content}>
            <div>
                <h1>All Trexner</h1>
                <div className={classes.mainSneakers}>
                    <div className= {classes.card}>
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
                    <div className= {classes.card}>
                        <img src="/img/sneaker2.jpg" alt="" />
                        <p>I die on your body samiy klasniy trex iz vsex trexov</p>
                            <div className={classes.cardBottom}>
                                <div className={classes.cardInfo}>
                                    <span>Gin:</span>
                                    <b>122.999 AMD</b>
                                </div>
                                <button><img src="/img/buttonPlus.svg" alt="" /></button>
                        </div>
                    </div>
                    <div className= {classes.card}>
                        <img src="/img/sneaker3.jpg" alt="" />
                        <p>I die on your body samiy klasniy trex iz vsex trexov</p>
                            <div className={classes.cardBottom}>
                                <div className={classes.cardInfo}>
                                    <span>Gin:</span>
                                    <b>122.999 AMD</b>
                                </div>
                                <button><img src="/img/buttonPlus.svg" alt="" /></button>
                        </div>
                    </div>
                    <div className= {classes.card}>
                        <img src="/img/sneaker4.jpg" alt="" />
                        <p>I die on your body samiy klasniy trex iz vsex trexov</p>
                            <div className={classes.cardBottom}>
                                <div className={classes.cardInfo}>
                                    <span>Gin:</span>
                                    <b>122.999 AMD</b>
                                </div>
                                <button><img src="/img/buttonPlus.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Content