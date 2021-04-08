import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BrandHeader from './esqueleto/BrandHeader/BrandHeader';
import Contacto from './esqueleto/Pages/Contact';



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
        </Switch>
      </section>
    </section>
      
    </Router>
    
    );
    
}

export default App;
