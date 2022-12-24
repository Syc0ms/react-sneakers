import classes from "./Content.module.scss"
import Card from "./Card"

const Content = () => {
    return (
        <div className={classes.content}>
             <div className={classes.test}>
                <div className={classes.contentInput}>
                    <h1>All Trexner</h1>
                    <div className={classes.imgInput}>
                        <form action="">
                            <img src="/img/search.svg" alt="Search" />
                            <input placeholder="Search..." type="text" name="" id="" />
                        </form>
                    </div>
                </div>
                <div className={classes.mainSneakers}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    
                    
                </div>
            </div>
            
        </div>
    )
}
export default Content