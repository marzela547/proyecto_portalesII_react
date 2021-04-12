import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BrandHeader from './esqueleto/BrandHeader/BrandHeader';
import Contacto from './esqueleto/Pages/Contact';
import Footer from  './esqueleto/Footer/Footer';
import History from './esqueleto/History/History';
import Index from './esqueleto/index/indexhtml';
import Catalogo from './esqueleto/Catalogos/Catalogos';
import Relojes from './esqueleto/Catalogos/relojes';
import Pulseras from './esqueleto/Catalogos/pulseras';
import Collares from './esqueleto/Catalogos/collares';
import Add from './esqueleto/Addproduct/Addproduct';
import Detalles from './esqueleto/detalles/detalles';

function App() {

 /* const [typePage, setTypePage]= useState(data);

  const setPages= (data) =>{
    setTypePage({...typePage, data})
  }*/
  //const setPages;

  return (

    <Router>
    <section>
    <BrandHeader ></BrandHeader>
    <section>
      <Switch>
          <Route path="/index" exact>
            <Index></Index>
          </Route>
          <Route path="/Contact" exact>
              <Contacto></Contacto>
          </Route>
          <Route path="/Meet" exact>
              <History></History>
          </Route>
          <Route path="/Add" exact>
            <Add></Add>
          </Route>
          <Route path="/Details" exact>
            <Detalles></Detalles>
          </Route>
          <Route path="/Collares" exact>
            <Collares></Collares>
          </Route>
          <Route path="/Pulseras" exact>
            <Pulseras></Pulseras>
          </Route>
          <Route path="/Relojes" exact>
            <Relojes></Relojes>
          </Route>
        </Switch>
      </section>
      <Footer></Footer>
    </section>
    </Router>
    );
}

export default App;
