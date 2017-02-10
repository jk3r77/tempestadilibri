import page from 'page'
import empty from 'empty-element'
import element from './template'
import title from 'title'

page('/', (ctx, next) => {
  title('Tempesra Di Libri')
  let main = document.getElementById('main-container')
  empty(main).appendChild(element)
})
