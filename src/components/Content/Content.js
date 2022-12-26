import classes from "./Content.module.scss"
import Card from "./Card"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"




const Content = () => {
    const [shoes, setShoes] = useState([])
    useEffect(() => {
        fetch('https://63aa0107594f75dc1dc68e02.mockapi.io/shoes')
        .then(response => response.json())
        .then(data => setShoes(data));
    }, []);
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
                
                    {
                    
                    shoes.map((arrayObjOfShoes, ) =>
                        <Card 
                            key={arrayObjOfShoes.id}
                            description = {arrayObjOfShoes.description}
                            value = {arrayObjOfShoes.value}
                            img = {arrayObjOfShoes.img}
                            id = {arrayObjOfShoes.id}
                        />
                    
                    )} 
                    
                    
                    
                </div>                    
                   
                    
                    
                </div>
            </div>
            
    )
}
export default Content