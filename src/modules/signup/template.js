import yo from 'yo-yo'
import landing from '../landing'

let element = yo`
  <div class="col s12 m7">
    <div class="row">
      <div class="signup-box">
        <h1 class="tempesta">Tempesta Di Libri</h1>
        <form action="#" class="signup-form">
          <h2 class="hide-on-small-only">Registrate para una mejor experiencia y beneficios</h2>
          <div class="section">
            <a href="" class="btn btn-fb hide-on-small-only">
              Iniciar con Facebook
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="" class="btn btn-fb hide-on-med-and-up">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              Iniciar Sesión
            </a>
          </div>
          <div class="divider"></div>
          <div class="section">
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="name" placeholder="Nombre Completo" />
            <input type="text" name="username" placeholder="Nombre Usuario" />
            <input type="password" name="password" placeholder="Contraseña" />
            <button class="btn waves-effect waves-light btn-signup" type="submit">Registrate</button>
          </div>
        </form>
      </div>
    </div>

    <div class="row">
      <div class="login-box">
        ¿Tienes una cuenta? <a href="/signin">Entrar</a>
      </div>
    </div>
  </div>
`
module.exports = landing(element)
