import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Navigation from './misc/Navigation';
import Home from './components/Home';
import Injection from './components/Injection';
import Moldes from './components/Moldes';
import News from './components/News';
import Accesories from './components/Accesories';
import Contact from './components/Contact';
import ModalNavigation from './misc/ModalNavgations';

const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <ModalNavigation/>

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/injection' component={Injection}/>
        <Route exact path='/molds' component={Moldes}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/accesories' component={Accesories}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </div>
  )
}

export default App;
