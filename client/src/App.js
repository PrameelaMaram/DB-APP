//import Axios from "axios";
import { BrowserRouter as Router, Switch,Route, } from 'react-router-dom';
import './App.css';
//import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import Home from './pages/Home';
//import {Inventory,MYSQL,MongoDB,Oracle,Postgresql,MsSQL,Application} from './pages/Inventory';
import {Inventory,MYSQL,MSsql, MongoDB,Oracle,Postgresql,Application} from './pages/Inventory';
//import {useState} from "react";

/*const [details,setDetails] = useState([]);

const getDetails = () => {
  Axios.get("http://localhost:8000/retrieve").then((response) => {
    setDetails(response.data)
  })
}*/
//import Analytics from './pages/Analytics';
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
