import Header from './components/Header/Header';
import Content from './components/Content/Content';
import './App.scss';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <hr />
      <Content />
    </div>
  );
}

export default App;
