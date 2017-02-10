import yo from 'yo-yo'

module.exports = function landing (box) {
  return yo`
    <div class="container">
      <div class="row">
        <div class="col s10 push-s1">
          <div id="box" class="row">
            <div class="col m5 hide-on-small-only">
              <div class="about-box">
                Descripcion
              </div>
            </div>
            ${box}
          </div>
        </div>
      </div>
    </div>
  `
}
