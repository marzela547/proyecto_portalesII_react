import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BrandHeader from './esqueleto/BrandHeader/BrandHeader';



function App() {
  return (
    
    
    <Router>
    <section>
    <BrandHeader></BrandHeader>
    </section>
      
    </Router>
    
    );
    
}

export default App;
