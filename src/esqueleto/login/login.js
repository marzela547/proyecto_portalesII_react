import '../login/login.css';
import ReactDOM from 'react-dom';
import General from '../../General';
import avatar from '../../img/pandora-monograma.jpg';

const Llamado=(e)=>{
  ReactDOM.render(<General></General>, document.getElementById('root'));
}

function login() {
    return (
         <section className="cuerpo">
            <div class="login-box ">
            <img src={avatar} class="Persona" alt="Avatar" />
            <h1>Bienvenido(a)</h1>
            <br/>
              <label for="username">Usuario</label>
              <input type="text" placeholder="Enter Username"></input>
              <label for="password">Contraseña</label>
              <input type="password" placeholder="Enter Password"></input>
              <input type="submit" value="Ingresar" onClick={(e)=>Llamado(e)}></input>
              <a href="#">Olvido su contraseña?</a>
            </div>
         </section>
    );
  }

  export default login;