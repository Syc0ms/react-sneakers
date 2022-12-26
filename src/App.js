import Header from './components/Header/Header';
import Content from './components/Content/Content';
import classes from './App.module.scss';
import Basket from './components/basketTable/Basket';
import { useState } from 'react';

const App = () => {
  const [basketOpened, setBasketOpened] = useState(false)
  function onClickBasket () {
    setBasketOpened(!basketOpened)
  }
  return (
    <div className={classes.wrapper}>
      {basketOpened ? <Basket onClick = {onClickBasket}/> : null}
      <Header onClick = {onClickBasket}/>
      <hr />
      <Content />
    </div>
  );
}

export default App;
