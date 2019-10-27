import { isSameNode, isVnode } from './vnode'
export function mount(vnode, container) {
  let newDomElement = createDOMElementFromVnode(vnode) //根据虚拟节点创建真实的节点
  container.appendChild(newDomElement) //把真实的dom节点挂在在container上
}

//然后就是更新dom了，DOM-DIFF
/**
 * type
 * text
 * children
 */
export function patch(oldVnode, newVnode) {
  //1.比较type
  if (oldVnode.type !== newVnode.type) {
    oldVnode.domElement.parentNode.replaceChild(
      createDOMElementFromVnode(newVnode),
      oldVnode.domElement
    )
  }

  // 它可能是孩子节点也可能是最外面的一个节点 只要text是undefined ,就说么它是一个光的节点
  if (typeof newVnode.text != 'undefined') {
    oldVnode.domElement.textContent = newVnode.text
  }

  //2.比较属性 3.比较儿子
  let domElement = (newVnode.domElement = oldVnode.domElement) //老的虚拟阶段、新的虚拟节点给domElement,然后要更新老的真实dom的属性
  updateProperties(newVnode, oldVnode.props)
  let oldChildren = oldVnode.children
  let newChildren = newVnode.children
  if (oldChildren.length > 0 && newChildren.length > 0) {
    //debugger
    //TODO:儿子们
    // 增加元素
    updateChildren(domElement, oldChildren, newChildren)
  } else if (newChildren.length > 0) {
    for (i = 0; i < newChildren.length; i++) {
      oldVnode.domElement.appendChild(createDOMElementFromVnode(newChildren[i]))
    }
  } else if (oldChildren.length > 0) {
    oldVnode.domElement.innerHTML = ''
  }
}

function createKeyToIndexMap(children) {
  let map = {}
  for (let i = 0; i < children.length; i++) {
    let key = children[i].key
    if (key) {
      map[key] = i
    }
  }
  return map
}
// function updateChildren(parentDomElement, oldChildren, newChildren) {
//   let oldStartIndex = 0,
//     oldStartVnode = oldChildren[0]
//   let oldEndIndex = oldChildren.length - 1,
//     oldEndVnode = oldChildren[oldEndIndex]
//   let newStartIndex = 0,
//     newStartVnode = newChildren[0]
//   let newEndIndex = newChildren.length - 1,
//     newEndVnode = newChildren[newEndIndex]
//   // 两个队列的指针都没停下来
//   while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
//     //首先老的开始节点和新的开始节点比较;老的结束节点和新的结束节点比较
//     if (!oldStartVnode) {
//       oldStartVnode = oldChildren[++oldStartIndex]
//     } else if (!oldEndVnode) {
//       oldEndVnode = oldChildren[--oldEndIndex]
//     } else if (isSameNode(oldStartVnode, newStartVnode)) {
//       patch(oldStartVnode, newStartVnode)
//       oldStartVnode = oldChildren[++oldStartIndex]
//       newStartVnode = newChildren[++newStartIndex]
//     } else if (isSameNode((oldEndVnode = newEndVnode))) {
//       patch(oldEndVnode, newEndVnode)
//       oldEndVnode = oldChildren[--oldEndIndex]
//       newEndVnode = newChildren[--newEndIndex]
//     } else if (isSameNode(oldEndVnode, newStartVnode)) {
//       //ABCD && DABC
//       patch(oldEndVnode, newStartVnode)
//       parentDomElement.insertBefore(oldEndVnode.domElement, oldStartVnode.domElement)
//       oldEndVnode = oldChildren[--oldEndIndex]
//       newStartVnode = oldChildren[++oldStartIndex]
//     } else if (isSameNode(oldStartVnode, newEndVnode)) {
//       // ABCD && BCDA
//       patch(oldStartVnode, newEndVnode)
//       parentDomElement.insertBefore(oldStartVnode, oldEndVnode.nextSi)
//       oldStartVnode = oldChildren[++oldStartIndex]
//       newEndVnode = newChildren[--newEndIndex]
//     }
//   }
//   if (newStartIndex <= newEndIndex) {
//     //老的完了，新的还没
//     let beforeDOMElement =
//       newChildren[newEndIndex + 1] == null ? null : newChildren[newEndIndex + 1].domElement
//     for (let i = newStartIndex; i <= newEndIndex; i++) {
//       parentDomElement.insertBefore(createDOMElementFromVnode(newChildren[i]), beforeDOMElement)
//     }
//   }
//   if (oldStartIndex <= oldEndIndex) {
//     //新的完了，老的还没
//     for (let i = oldStartIndex; i <= oldEndIndex; i++) {
//       parentDomElement.removeChild(oldChildren[i].domElement)
//     }
//   }
// }

function updateChildren(parentDomElement, oldChildren, newChildren) {
  let oldStartIndex = 0,
    oldStartVnode = oldChildren[0] //老的开始索引和老的开始节点
  let oldEndIndex = oldChildren.length - 1,
    oldEndVnode = oldChildren[oldEndIndex] //老的结束索引和老的结束节点

  let newStartIndex = 0,
    newStartVnode = newChildren[0] //新的开始索引和新的开始节点
  let newEndIndex = newChildren.length - 1,
    newEndVnode = newChildren[newEndIndex] //新的结束索引和新的结束节点
  let oldKeyToIndexMap = createKeyToIndexMap(oldChildren)
  //两个队列都没有循环结束就要继续循环，如果有一个结束，就停止循环
  while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
    //老的开始节点和新的开始节点进行比较
    if (!oldStartVnode) {
      oldStartVnode = oldChildren[++oldStartIndex]
    } else if (!oldEndVnode) {
      oldEndVnode = oldChildren[--oldEndIndex]
    } else if (isSameNode(oldStartVnode, newStartVnode)) {
      //找到newStartVnode和oldStartVnode的的差异，并且更新到真实DOM上去oldStartVnode.domElement
      patch(oldStartVnode, newStartVnode)
      oldStartVnode = oldChildren[++oldStartIndex]
      newStartVnode = newChildren[++newStartIndex]
    } else if (isSameNode(oldEndVnode, newEndVnode)) {
      patch(oldEndVnode, newEndVnode)
      oldEndVnode = oldChildren[--oldEndIndex]
      newEndVnode = newChildren[--newEndIndex]
    } else if (isSameNode(oldEndVnode, newStartVnode)) {
      //老的结束和新的开始对应的把尾部的元素移动到头部   ABCD DABC
      patch(oldEndVnode, newStartVnode)
      parentDomElement.insertBefore(oldEndVnode.domElement, oldStartVnode.domElement)
      oldEndVnode = oldChildren[--oldEndIndex]
      newStartVnode = newChildren[++newStartIndex]
    } else if (isSameNode(oldStartVnode, newEndVnode)) {
      //老的结束和新的开始对应的把尾部的元素移动到头部
      patch(oldStartVnode, newEndVnode)
      parentDomElement.insertBefore(oldStartVnode.domElement, oldEndVnode.domElement.nextSi)
      oldStartVnode = oldChildren[++oldStartIndex]
      newEndVnode = newChildren[--newEndIndex]
      //进行DOM移动 把老的开始真实DOM移动真实DOM的尾部
    } else {
      let oldIndexByKey = oldKeyToIndexMap[newStartVnode.key]
      if (oldIndexByKey == null) {
        parentDomElement.insertBefore(
          createDOMElementFromVnode(newStartVnode),
          oldStartVnode.domElement
        )
      } else {
        let oldVnodeToMove = oldChildren[oldIndexByKey]
        if (oldVnodeToMove.type !== newStartVnode.type) {
          parentDomElement.insertBefore(
            createDOMElementFromVnode(newStartVnode),
            oldStartVnode.domElement
          )
        } else {
          patch(oldVnodeToMove, newStartVnode)
          oldChildren[oldIndexByKey] = undefined
          parentDomElement.insertBefore(oldVnodeToMove.domElement, oldStartVnode.domElement)
        }
      }
      newStartVnode = newChildren[++newStartIndex]
    }
  }
  if (newStartIndex <= newEndIndex) {
    //是老的队列 处理完了，新的队列没处理完
    //我要把这个节点插入到谁的前面
    let beforeDOMElement =
      newChildren[newEndIndex + 1] == null ? null : newChildren[newEndIndex + 1].domElement
    for (let i = newStartIndex; i <= newEndIndex; i++) {
      parentDomElement.insertBefore(createDOMElementFromVnode(newChildren[i]), beforeDOMElement)
    }
  }
  if (oldStartIndex <= oldEndIndex) {
    for (let i = oldStartIndex; i <= oldEndIndex; i++) {
      parentDomElement.removeChild(oldChildren[i].domElement)
    }
  }
}

//根据虚拟节点构建真实的节点 createDOMElementFromVnode
//无非就是 vnode 上的东西挂出来 type,props,text,children
//通过方法
/**
 * 1) document.creatElement(vnode.type)
 * 2) document.createTextNode(vnode.text)
 * 3) 更新属性烦一点，domElement.style[oldAttrName]
 * 4) children 递归
 */

function createDOMElementFromVnode(vnode) {
  let { type, children } = vnode
  if (type) {
    // 创建真实的dom元素挂载到  “vnode的domelement上”,然后更新
    let domElement = (vnode.domElement = document.createElement(type))
    updateProperties(vnode) //更新属性       “更新属性这边啊，比完自己的之后，就要开始比儿子了”
    if (Array.isArray(children)) {
      children.forEach(child => domElement.appendChild(createDOMElementFromVnode(child)))
    }
  } else {
    vnode.domElement = document.createTextNode(vnode.text)
  }
  return vnode.domElement
}

function updateProperties(vnode, oldProps = {}) {
  let newProps = vnode.props
  let domElement = vnode.domElement //真实的dom
  let oldStyle = oldProps.style || {}
  let newStyle = newProps.style || {}

  /** oldStyle = oldProps.style**/
  //两次循环 处理老的属性（oldPorps,oldStyle = oldProps.style）
  for (let oldAttrName in oldStyle) {
    if (!newStyle[oldAttrName]) {
      domElement.style[oldAttrName] = ''
    }
  }

  for (let oldPropName in oldProps) {
    if (!newProps[oldPropName]) {
      delete domElement[oldPropName]
    }
  }

  //一次循环 处理新的属性
  for (let newPropName in newProps) {
    if (newPropName === 'style') {
      let styleObject = newProps.style
      for (let newAttrName in styleObject) {
        // if (!oldStyle[newAttrName]) {
        domElement.style[newAttrName] = styleObject[newAttrName]
        //}
      }
    } else {
      domElement[newPropName] = newProps[newPropName]
    }
  }
}
