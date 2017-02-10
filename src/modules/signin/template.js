import yo from 'yo-yo'
import landing from '../landing'

let element = yo`
  <div class="col s12 m7">
    <div class="row">
      <div class="signin-box">
        <h1 class="tempesta">Tempesta Di Libri</h1>
        <form action="#" class="signin-form">
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
            <input type="text" name="username" placeholder="Nombre Usuario" />
            <input type="password" name="password" placeholder="Contraseña" />
            <button class="btn waves-effect waves-light btn-signin" type="submit">Iniciar Sesion</button>
          </div>
        </form>
      </div>
    </div>

    <div class="row">
      <div class="login-box">
        ¿No Tienes una cuenta? <a href="/signup">Registrate</a>
      </div>
    </div>
  </div>
`
module.exports =landing(element)
