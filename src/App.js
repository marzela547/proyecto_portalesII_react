import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './esqueleto/login/login';


function App() {

 /*

  const setPages= (data) =>{
    setTypePage({...typePage, data})
  }*/
  //const setPages;
 /* const [inter, setInter]= useState("");
  if(prueba==1){
    //
    console.log("Aqui");
    console.log(prueba);
    //setInter(inter + "hidden");
    //const settings = <Add interno="hidden"
    //     externo="lg:h-28"/>
    ReactDOM.render(<App/>, document.getElementById('root'));
  }*/
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
