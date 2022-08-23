import classes from "./Header.module.scss"

const Header = () => {
    return (
        <div className={classes.main}> 
            <header>
                <div className = {classes.mainHeader}>
                    <div className={classes.headerLeft}>
                        <img src="/img/logo.png" alt="" />
                        <div className={classes.headerInfo}>
                            <h3>React Sneakers</h3>
                            <span>Ամենալավ տրեխների խանութ</span>
                        </div>
                        </div>
                        <div className= {classes.headerRight}>
                            <ul>
                                <li className={classes.profileKorzina}>
                                    <img src="/img/Korzina.svg" alt="" />
                                    <span>1200 rub</span>
                                </li>
                                <li>
                                    <img src="/img/Like.svg" alt="" />

                                </li>
                                <li>
                                    <img src="/img/Profile.svg" alt="" />

                                </li>
                            </ul>

                        </div>
                    </div>
            </header>
        </div>
    )
}

export default Header;
