
import { BrowserRouter as Router, Switch,Route, } from 'react-router-dom';
import './App.css';
//import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Inventory,MYSQL,MongoDB,Oracle,Postgresql,MsSQL,Application} from './pages/Inventory';
import Analytics from './pages/Analytics';
function App() {
  return (
    <div className="App">
    
     <Router>
      <Navbar/>  
      <Switch>
        <Route path='/home'  component={Home} exact />
        <Route exact path='/inventory'  component={Inventory}/>
        <Route exact path='/application'  component={Application}/>
        <Route exact path='/inventory/MYSQL'  component={MYSQL}/>
        <Route exact path='/inventory/MsSQL'  component={MsSQL}/>
        <Route exact path='/inventory/Oracle'  component={Oracle}/>
        <Route exact path='/inventory/MongoDb'  component={MongoDB}/>
        <Route exact path='/inventory/Postgresql'  component={Postgresql}/>
        <Route exact path='/analytics'  component={Analytics}/>
      </Switch>
     </Router>

 
     
    </div>
  );
}

export default App;
