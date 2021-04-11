import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BrandHeader from './esqueleto/BrandHeader/BrandHeader';
import Contacto from './esqueleto/Pages/Contact';
import Footer from  './esqueleto/Footer/Footer';
import History from './esqueleto/History/History';
import Index from './esqueleto/index/indexhtml';
import Relojes from './esqueleto/Catalogos/relojes';
import Pulseras from './esqueleto/Catalogos/pulseras';
import Collares from './esqueleto/Catalogos/collares';

function App() {
  return (

    <Router>
    <section>
    <BrandHeader></BrandHeader>
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
          <Route path="/relojes" exact>
            <Relojes></Relojes>
          </Route>
          <Route path="/pulseras" exact>
            <Pulseras></Pulseras>
          </Route>
          <Route path="/collares" exact>
            <Collares></Collares>
          </Route>
        </Switch>
      </section>
      <Footer></Footer>
    </section>
    </Router>
    );
}

export default App;
