const VNODE_TYPE = 'VNODE_TYPE'
export function isSameNode(oldNode, newNode) {
  return oldNode.key === newNode.key && oldNode.type === newNode.type
}

export function isVnode(vnode) {
  return vnode && vnode._type === VNODE_TYPE
}

//domElement 是此虚拟节点对应的真实的节点，是个常量
function vnode(type, key, props = {}, children = [], text, domElement) {
  //虚拟节点就是一个对象，只不过有一个_type
  let _type = VNODE_TYPE
  return {
    _type,
    type,
    key,
    props,
    children,
    text,
    domElement
  }
}

export default vnode
