import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BrandHeader from './esqueleto/BrandHeader/BrandHeader';
import Contacto from './esqueleto/Pages/Contact';
import Footer from './esqueleto/Footer/Footer';
import History from './esqueleto/History/History';
import Detalles from './esqueleto/detalles/detalles';

function App() {
  return (
    <Router>
      <section>
        <BrandHeader></BrandHeader>
        <section>
          <Switch>
            <Route path="/Contact" exact>
              <Contacto></Contacto>
            </Route>
            <Route path="/Meet" exact>
              <History></History>
            </Route>
            <Route path="/detalles" exact>
              <Detalles></Detalles>
            </Route>
          </Switch>
        </section>
        <Footer></Footer>
      </section>
    </Router>
  );
}

export default App;
