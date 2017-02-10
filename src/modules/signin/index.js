import page from 'page'
import empty from 'empty-element'
import element from './template'
import title from 'title'

page('/signin', (ctx, next) => {
  title('TDL - Signin')
  let main = document.getElementById('main-container')
  empty(main).appendChild(element)
})
