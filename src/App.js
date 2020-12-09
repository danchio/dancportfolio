import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import './components/home.css';

function App() {
  return (
   <BrowserRouter>
    <Switch>
      <div className='test'>
        <Route exact path='/' component={Home}/>
        <Route exact path='/projects' component={Projects}/>
      </div>
    </Switch>
   </BrowserRouter>
  )
}

export default App;
