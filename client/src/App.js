
import { BrowserRouter as Router, Switch,Route, } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';

import {Inventory,MYSQL,MSsql, MongoDB,Oracle,Postgresql,Application} from './pages/Inventory';

const refreshPage = ()=>{
  window.location.reload();
}
function App() {
  return (
    <div className="App">
    
     <Router>
      <Navbar/>  
      <Switch>
        <Route path='/home'  component={Home} exact />
        <Route exact path='/application'  component={Application}/>
        <Route exact path='/inventory'  component={Inventory}/>
        <Route exact path='/inventory/MYSQL'  component={MYSQL} />
        <Route exact path='/inventory/MSsql'  component={MSsql} onClick={refreshPage}/>
        <Route exact path='/inventory/Oracle'  component={Oracle}/>
        <Route exact path='/inventory/MongoDB'  component={MongoDB}/>
        <Route exact path='/inventory/Postgresql'  component={Postgresql}/>
        
      </Switch>
     </Router>

 
     
    </div>
  );
}

export default App;
