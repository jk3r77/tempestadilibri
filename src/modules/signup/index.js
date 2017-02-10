import page from 'page'
import empty from 'empty-element'
import element from './template'
import title from 'title'

page('/signup', (ctx, next) => {
  title('TDL - Signup')
  let main = document.getElementById('main-container')
  empty(main).appendChild(element)
})
