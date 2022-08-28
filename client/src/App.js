import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Start from './components/Start';
import Creater from './components/Creater';
import Details from './components/Details';



function App() {

  return (
  <BrowserRouter>
    <div className='App'>
 
  <Switch>
  <Route exact path={'/'} component ={Start}/>
  <Route path={'/home'}  exact component={Home}/>
  <Route path={'/home/:id'} component={Details}/>
  <Route path={'/recipe'} component={Creater}/>
  </Switch>
 
  
  </div>
  </BrowserRouter>
  );

}

export default App;
