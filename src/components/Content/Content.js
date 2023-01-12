import classes from "./Content.module.scss"
import Card from "./Card"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"




const Content = ({test}) => {
   
    const [shoes, setShoes] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000')
        .then(response => response.json())
        .then(data => setShoes(data));
    }, []);

    const addToCard = (obj) => {
        test(obj)
    }   
    const deleteSearchValue = () => {
        setSearchValue("")
    } 

    const [searchValue, setSearchValue] = useState("")
    const checkInputValue = (event) => {
            setSearchValue(event.target.value)
           
            
        
    }
    return (
        <div className={classes.content}>
             <div className={classes.test}>
                <div className={classes.contentInput}>
                    <h1>{searchValue ? `Searching for your: "${searchValue}"` : "All sneakers"}</h1>
                    <div className={classes.imgInput}>
                        <form className={classes.form} action="">
                            <img className={classes.searchBtn} src="/img/search.svg" alt="Search" />
                            <input className={classes.searchBar} onChange={checkInputValue} value={searchValue} placeholder="Search..." type="text" name="" id="" />
                            {searchValue ? <img className={classes.imgClose} onClick={deleteSearchValue} src="/img/close.svg" alt="" /> : null}

                        </form>
                    </div>
                </div>
                <div className={classes.mainSneakers}>
                
                    {
                    
                    shoes.filter((item) => item.description.toLowerCase().includes(searchValue.toLowerCase())).map((arrayObjOfShoes) =>
                        <Card
                            key={arrayObjOfShoes.id}
                            description = {arrayObjOfShoes.description}
                            value = {arrayObjOfShoes.value}
                            img = {arrayObjOfShoes.img}
                            id = {arrayObjOfShoes.id}
                            addToCard = {addToCard}
                        />
                    
                    )} 
                    
                    
                    
                </div>                    
                   
                    
                    
                </div>
            </div>
            
    )
}
export default Content