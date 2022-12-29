import Header from './components/Header/Header';
import Content from './components/Content/Content';
import classes from './App.module.scss';
import Basket from './components/basketTable/Basket';
import { useState } from 'react';

const App = () => {
  const [basketOpened, setBasketOpened] = useState(false)
  const [cartShoes, setCartShoes] = useState([])

  const onClickBasket = () => {
    setBasketOpened(!basketOpened)
  }

  const test = (obj) => {
    setCartShoes(prev => prev ? [...prev, obj]: null )
  }

  return (
    <div className={classes.wrapper}>
      {basketOpened ? <Basket key={"aa"} items={cartShoes} onClick = {onClickBasket}/> : null}
      <Header onClick = {onClickBasket}/>
      <hr />
      <Content test = {test} />
    </div>
  );
}

export default App;
