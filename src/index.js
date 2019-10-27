import { h, mount, patch } from './vdom'
const root = document.getElementById('root')

const newVnode = h(
  'ul',
  { id: 'container' },
  h('li', { style: { backgroundColor: '#110000' }, key: 'A' }, 'A'),
  h('li', { style: { backgroundColor: '#440000' }, key: 'B' }, 'B'),
  h('li', { style: { backgroundColor: '#770000' }, key: 'C' }, 'C'),
  h('li', { style: { backgroundColor: '#AA0000' }, key: 'D' }, 'D')
)
const oldVnode = h(
  'ul',
  { id: 'container' },
  h('li', { style: { backgroundColor: '#110000' }, key: 'A' }, 'A1'),
  h('li', { style: { backgroundColor: '#440000' }, key: 'B' }, 'B1'),
  h('li', { style: { backgroundColor: '#770000' }, key: 'C' }, 'C1'),
  h('li', { style: { backgroundColor: '#990000' }, key: 'D' }, 'D1'),
  h('li', { style: { backgroundColor: '#AA0000' }, key: 'E' }, 'E'),
  h('li', { style: { backgroundColor: '#EE0000' }, key: 'F' }, 'F')
)
console.log(oldVnode)
mount(oldVnode, root)

//DOM-DIFF
// 1)当老的新的type不一样时，直接替换
setTimeout(function() {
  patch(oldVnode, newVnode)
}, 2000)
