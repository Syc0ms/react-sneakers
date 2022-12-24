import Header from './components/Header/Header';
import Content from './components/Content/Content';
import classes from './App.module.scss';
import Basket from './components/basketTable/Basket';

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Basket />
      <Header />
      <hr />
      <Content />
    </div>
  );
}

export default App;
