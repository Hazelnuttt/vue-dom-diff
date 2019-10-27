import vnode from './vnode'
const hasOwnProperty = Object.prototype.hasOwnProperty
function h(type, config, ...children) {
  //h 从一个dom中（或者说是一个html片段更形象）拿到type,key,props,children，用vnode来构造虚拟节点
  const props = {}
  let key

  if (config) {
    if (config.key) {
      key = config.key
    }
  }

  for (let propName in config) {
    if (hasOwnProperty.call(config, propName) && propName != key) {
      props[propName] = config[propName]
    }
  }

  return vnode(
    type,
    key,
    props,
    children.map((child, index) =>
      typeof child == 'string' || typeof child == 'number'
        ? vnode(undefined, undefined, undefined, undefined, child)
        : child
    )
  )
}
export default h
