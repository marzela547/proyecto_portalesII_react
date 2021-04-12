import '../login/login.css';

function login() {
    return (
          <div class="login-box">
            <img src="../img/pandora-monograma.jpg" class="Persona" alt="Avatar" />
            <h1>Bienvenido(a)</h1>
            <br/>
              <label for="username">Usuario</label>
              <input type="text" placeholder="Enter Username"></input>
              <label for="password">Contraseña</label>
              <input type="password" placeholder="Enter Password"></input>
              <input type="submit" value="Ingresar"></input>
              <a href="#">Olvido su contraseña?</a>
          </div>
    );
  }

  export default login;