/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vdom */ \"./src/vdom/index.js\");\n\r\nconst root = document.getElementById('root')\r\n\r\nconst newVnode = Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\r\n  'ul',\r\n  { id: 'container' },\r\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', { style: { backgroundColor: '#110000' }, key: 'A' }, 'A'),\r\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', { style: { backgroundColor: '#440000' }, key: 'B' }, 'B'),\r\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', { style: { backgroundColor: '#770000' }, key: 'C' }, 'C'),\r\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', { style: { backgroundColor: '#AA0000' }, key: 'D' }, 'D')\r\n)\r\nconst oldVnode = Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\r\n  'ul',\r\n  { id: 'container' },\r\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', { style: { backgroundColor: '#110000' }, key: 'A' }, 'A1'),\r\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', { style: { backgroundColor: '#440000' }, key: 'B' }, 'B1'),\r\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', { style: { backgroundColor: '#770000' }, key: 'C' }, 'C1'),\r\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', { style: { backgroundColor: '#990000' }, key: 'D' }, 'D1'),\r\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', { style: { backgroundColor: '#AA0000' }, key: 'E' }, 'E'),\r\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', { style: { backgroundColor: '#EE0000' }, key: 'F' }, 'F')\r\n)\r\nconsole.log(oldVnode)\r\nObject(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"mount\"])(oldVnode, root)\r\n\r\n//DOM-DIFF\r\n// 1)当老的新的type不一样时，直接替换\r\nsetTimeout(function() {\r\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"patch\"])(oldVnode, newVnode)\r\n}, 2000)\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/vdom/h.js":
/*!***********************!*\
  !*** ./src/vdom/h.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"./src/vdom/vnode.js\");\n\r\nconst hasOwnProperty = Object.prototype.hasOwnProperty\r\nfunction h(type, config, ...children) {\r\n  //h 从一个dom中（或者说是一个html片段更形象）拿到type,key,props,children，用vnode来构造虚拟节点\r\n  const props = {}\r\n  let key\r\n\r\n  if (config) {\r\n    if (config.key) {\r\n      key = config.key\r\n    }\r\n  }\r\n\r\n  for (let propName in config) {\r\n    if (hasOwnProperty.call(config, propName) && propName != key) {\r\n      props[propName] = config[propName]\r\n    }\r\n  }\r\n\r\n  return Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    type,\r\n    key,\r\n    props,\r\n    children.map((child, index) =>\r\n      typeof child == 'string' || typeof child == 'number'\r\n        ? Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(undefined, undefined, undefined, undefined, child)\r\n        : child\r\n    )\r\n  )\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (h);\r\n\n\n//# sourceURL=webpack:///./src/vdom/h.js?");

/***/ }),

/***/ "./src/vdom/index.js":
/*!***************************!*\
  !*** ./src/vdom/index.js ***!
  \***************************/
/*! exports provided: h, mount, patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ \"./src/vdom/h.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return _h__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patch */ \"./src/vdom/patch.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mount\", function() { return _patch__WEBPACK_IMPORTED_MODULE_1__[\"mount\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"patch\", function() { return _patch__WEBPACK_IMPORTED_MODULE_1__[\"patch\"]; });\n\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/vdom/index.js?");

/***/ }),

/***/ "./src/vdom/patch.js":
/*!***************************!*\
  !*** ./src/vdom/patch.js ***!
  \***************************/
/*! exports provided: mount, patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mount\", function() { return mount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"patch\", function() { return patch; });\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"./src/vdom/vnode.js\");\n\r\nfunction mount(vnode, container) {\r\n  let newDomElement = createDOMElementFromVnode(vnode) //根据虚拟节点创建真实的节点\r\n  container.appendChild(newDomElement) //把真实的dom节点挂在在container上\r\n}\r\n\r\n//然后就是更新dom了，DOM-DIFF\r\n/**\r\n * type\r\n * text\r\n * children\r\n */\r\nfunction patch(oldVnode, newVnode) {\r\n  //1.比较type\r\n  if (oldVnode.type !== newVnode.type) {\r\n    oldVnode.domElement.parentNode.replaceChild(\r\n      createDOMElementFromVnode(newVnode),\r\n      oldVnode.domElement\r\n    )\r\n  }\r\n\r\n  // 它可能是孩子节点也可能是最外面的一个节点 只要text是undefined ,就说么它是一个光的节点\r\n  if (typeof newVnode.text != 'undefined') {\r\n    oldVnode.domElement.textContent = newVnode.text\r\n  }\r\n\r\n  //2.比较属性 3.比较儿子\r\n  let domElement = (newVnode.domElement = oldVnode.domElement) //老的虚拟阶段、新的虚拟节点给domElement,然后要更新老的真实dom的属性\r\n  updateProperties(newVnode, oldVnode.props)\r\n  let oldChildren = oldVnode.children\r\n  let newChildren = newVnode.children\r\n  if (oldChildren.length > 0 && newChildren.length > 0) {\r\n    //debugger\r\n    //TODO:儿子们\r\n    // 增加元素\r\n    updateChildren(domElement, oldChildren, newChildren)\r\n  } else if (newChildren.length > 0) {\r\n    for (i = 0; i < newChildren.length; i++) {\r\n      oldVnode.domElement.appendChild(createDOMElementFromVnode(newChildren[i]))\r\n    }\r\n  } else if (oldChildren.length > 0) {\r\n    oldVnode.domElement.innerHTML = ''\r\n  }\r\n}\r\n\r\nfunction createKeyToIndexMap(children) {\r\n  let map = {}\r\n  for (let i = 0; i < children.length; i++) {\r\n    let key = children[i].key\r\n    if (key) {\r\n      map[key] = i\r\n    }\r\n  }\r\n  return map\r\n}\r\n// function updateChildren(parentDomElement, oldChildren, newChildren) {\r\n//   let oldStartIndex = 0,\r\n//     oldStartVnode = oldChildren[0]\r\n//   let oldEndIndex = oldChildren.length - 1,\r\n//     oldEndVnode = oldChildren[oldEndIndex]\r\n//   let newStartIndex = 0,\r\n//     newStartVnode = newChildren[0]\r\n//   let newEndIndex = newChildren.length - 1,\r\n//     newEndVnode = newChildren[newEndIndex]\r\n//   // 两个队列的指针都没停下来\r\n//   while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {\r\n//     //首先老的开始节点和新的开始节点比较;老的结束节点和新的结束节点比较\r\n//     if (!oldStartVnode) {\r\n//       oldStartVnode = oldChildren[++oldStartIndex]\r\n//     } else if (!oldEndVnode) {\r\n//       oldEndVnode = oldChildren[--oldEndIndex]\r\n//     } else if (isSameNode(oldStartVnode, newStartVnode)) {\r\n//       patch(oldStartVnode, newStartVnode)\r\n//       oldStartVnode = oldChildren[++oldStartIndex]\r\n//       newStartVnode = newChildren[++newStartIndex]\r\n//     } else if (isSameNode((oldEndVnode = newEndVnode))) {\r\n//       patch(oldEndVnode, newEndVnode)\r\n//       oldEndVnode = oldChildren[--oldEndIndex]\r\n//       newEndVnode = newChildren[--newEndIndex]\r\n//     } else if (isSameNode(oldEndVnode, newStartVnode)) {\r\n//       //ABCD && DABC\r\n//       patch(oldEndVnode, newStartVnode)\r\n//       parentDomElement.insertBefore(oldEndVnode.domElement, oldStartVnode.domElement)\r\n//       oldEndVnode = oldChildren[--oldEndIndex]\r\n//       newStartVnode = oldChildren[++oldStartIndex]\r\n//     } else if (isSameNode(oldStartVnode, newEndVnode)) {\r\n//       // ABCD && BCDA\r\n//       patch(oldStartVnode, newEndVnode)\r\n//       parentDomElement.insertBefore(oldStartVnode, oldEndVnode.nextSi)\r\n//       oldStartVnode = oldChildren[++oldStartIndex]\r\n//       newEndVnode = newChildren[--newEndIndex]\r\n//     }\r\n//   }\r\n//   if (newStartIndex <= newEndIndex) {\r\n//     //老的完了，新的还没\r\n//     let beforeDOMElement =\r\n//       newChildren[newEndIndex + 1] == null ? null : newChildren[newEndIndex + 1].domElement\r\n//     for (let i = newStartIndex; i <= newEndIndex; i++) {\r\n//       parentDomElement.insertBefore(createDOMElementFromVnode(newChildren[i]), beforeDOMElement)\r\n//     }\r\n//   }\r\n//   if (oldStartIndex <= oldEndIndex) {\r\n//     //新的完了，老的还没\r\n//     for (let i = oldStartIndex; i <= oldEndIndex; i++) {\r\n//       parentDomElement.removeChild(oldChildren[i].domElement)\r\n//     }\r\n//   }\r\n// }\r\n\r\nfunction updateChildren(parentDomElement, oldChildren, newChildren) {\r\n  let oldStartIndex = 0,\r\n    oldStartVnode = oldChildren[0] //老的开始索引和老的开始节点\r\n  let oldEndIndex = oldChildren.length - 1,\r\n    oldEndVnode = oldChildren[oldEndIndex] //老的结束索引和老的结束节点\r\n\r\n  let newStartIndex = 0,\r\n    newStartVnode = newChildren[0] //新的开始索引和新的开始节点\r\n  let newEndIndex = newChildren.length - 1,\r\n    newEndVnode = newChildren[newEndIndex] //新的结束索引和新的结束节点\r\n  let oldKeyToIndexMap = createKeyToIndexMap(oldChildren)\r\n  //两个队列都没有循环结束就要继续循环，如果有一个结束，就停止循环\r\n  while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {\r\n    //老的开始节点和新的开始节点进行比较\r\n    if (!oldStartVnode) {\r\n      oldStartVnode = oldChildren[++oldStartIndex]\r\n    } else if (!oldEndVnode) {\r\n      oldEndVnode = oldChildren[--oldEndIndex]\r\n    } else if (Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"isSameNode\"])(oldStartVnode, newStartVnode)) {\r\n      //找到newStartVnode和oldStartVnode的的差异，并且更新到真实DOM上去oldStartVnode.domElement\r\n      patch(oldStartVnode, newStartVnode)\r\n      oldStartVnode = oldChildren[++oldStartIndex]\r\n      newStartVnode = newChildren[++newStartIndex]\r\n    } else if (Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"isSameNode\"])(oldEndVnode, newEndVnode)) {\r\n      patch(oldEndVnode, newEndVnode)\r\n      oldEndVnode = oldChildren[--oldEndIndex]\r\n      newEndVnode = newChildren[--newEndIndex]\r\n    } else if (Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"isSameNode\"])(oldEndVnode, newStartVnode)) {\r\n      //老的结束和新的开始对应的把尾部的元素移动到头部   ABCD DABC\r\n      patch(oldEndVnode, newStartVnode)\r\n      parentDomElement.insertBefore(oldEndVnode.domElement, oldStartVnode.domElement)\r\n      oldEndVnode = oldChildren[--oldEndIndex]\r\n      newStartVnode = newChildren[++newStartIndex]\r\n    } else if (Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"isSameNode\"])(oldStartVnode, newEndVnode)) {\r\n      //老的结束和新的开始对应的把尾部的元素移动到头部\r\n      patch(oldStartVnode, newEndVnode)\r\n      parentDomElement.insertBefore(oldStartVnode.domElement, oldEndVnode.domElement.nextSi)\r\n      oldStartVnode = oldChildren[++oldStartIndex]\r\n      newEndVnode = newChildren[--newEndIndex]\r\n      //进行DOM移动 把老的开始真实DOM移动真实DOM的尾部\r\n    } else {\r\n      let oldIndexByKey = oldKeyToIndexMap[newStartVnode.key]\r\n      if (oldIndexByKey == null) {\r\n        parentDomElement.insertBefore(\r\n          createDOMElementFromVnode(newStartVnode),\r\n          oldStartVnode.domElement\r\n        )\r\n      } else {\r\n        let oldVnodeToMove = oldChildren[oldIndexByKey]\r\n        if (oldVnodeToMove.type !== newStartVnode.type) {\r\n          parentDomElement.insertBefore(\r\n            createDOMElementFromVnode(newStartVnode),\r\n            oldStartVnode.domElement\r\n          )\r\n        } else {\r\n          patch(oldVnodeToMove, newStartVnode)\r\n          oldChildren[oldIndexByKey] = undefined\r\n          parentDomElement.insertBefore(oldVnodeToMove.domElement, oldStartVnode.domElement)\r\n        }\r\n      }\r\n      newStartVnode = newChildren[++newStartIndex]\r\n    }\r\n  }\r\n  if (newStartIndex <= newEndIndex) {\r\n    //是老的队列 处理完了，新的队列没处理完\r\n    //我要把这个节点插入到谁的前面\r\n    let beforeDOMElement =\r\n      newChildren[newEndIndex + 1] == null ? null : newChildren[newEndIndex + 1].domElement\r\n    for (let i = newStartIndex; i <= newEndIndex; i++) {\r\n      parentDomElement.insertBefore(createDOMElementFromVnode(newChildren[i]), beforeDOMElement)\r\n    }\r\n  }\r\n  if (oldStartIndex <= oldEndIndex) {\r\n    for (let i = oldStartIndex; i <= oldEndIndex; i++) {\r\n      parentDomElement.removeChild(oldChildren[i].domElement)\r\n    }\r\n  }\r\n}\r\n\r\n//根据虚拟节点构建真实的节点 createDOMElementFromVnode\r\n//无非就是 vnode 上的东西挂出来 type,props,text,children\r\n//通过方法\r\n/**\r\n * 1) document.creatElement(vnode.type)\r\n * 2) document.createTextNode(vnode.text)\r\n * 3) 更新属性烦一点，domElement.style[oldAttrName]\r\n * 4) children 递归\r\n */\r\n\r\nfunction createDOMElementFromVnode(vnode) {\r\n  let { type, children } = vnode\r\n  if (type) {\r\n    // 创建真实的dom元素挂载到  “vnode的domelement上”,然后更新\r\n    let domElement = (vnode.domElement = document.createElement(type))\r\n    updateProperties(vnode) //更新属性       “更新属性这边啊，比完自己的之后，就要开始比儿子了”\r\n    if (Array.isArray(children)) {\r\n      children.forEach(child => domElement.appendChild(createDOMElementFromVnode(child)))\r\n    }\r\n  } else {\r\n    vnode.domElement = document.createTextNode(vnode.text)\r\n  }\r\n  return vnode.domElement\r\n}\r\n\r\nfunction updateProperties(vnode, oldProps = {}) {\r\n  let newProps = vnode.props\r\n  let domElement = vnode.domElement //真实的dom\r\n  let oldStyle = oldProps.style || {}\r\n  let newStyle = newProps.style || {}\r\n\r\n  /** oldStyle = oldProps.style**/\r\n  //两次循环 处理老的属性（oldPorps,oldStyle = oldProps.style）\r\n  for (let oldAttrName in oldStyle) {\r\n    if (!newStyle[oldAttrName]) {\r\n      domElement.style[oldAttrName] = ''\r\n    }\r\n  }\r\n\r\n  for (let oldPropName in oldProps) {\r\n    if (!newProps[oldPropName]) {\r\n      delete domElement[oldPropName]\r\n    }\r\n  }\r\n\r\n  //一次循环 处理新的属性\r\n  for (let newPropName in newProps) {\r\n    if (newPropName === 'style') {\r\n      let styleObject = newProps.style\r\n      for (let newAttrName in styleObject) {\r\n        // if (!oldStyle[newAttrName]) {\r\n        domElement.style[newAttrName] = styleObject[newAttrName]\r\n        //}\r\n      }\r\n    } else {\r\n      domElement[newPropName] = newProps[newPropName]\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/vdom/patch.js?");

/***/ }),

/***/ "./src/vdom/vnode.js":
/*!***************************!*\
  !*** ./src/vdom/vnode.js ***!
  \***************************/
/*! exports provided: isSameNode, isVnode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isSameNode\", function() { return isSameNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isVnode\", function() { return isVnode; });\nconst VNODE_TYPE = 'VNODE_TYPE'\r\nfunction isSameNode(oldNode, newNode) {\r\n  return oldNode.key === newNode.key && oldNode.type === newNode.type\r\n}\r\n\r\nfunction isVnode(vnode) {\r\n  return vnode && vnode._type === VNODE_TYPE\r\n}\r\n\r\n//domElement 是此虚拟节点对应的真实的节点，是个常量\r\nfunction vnode(type, key, props = {}, children = [], text, domElement) {\r\n  //虚拟节点就是一个对象，只不过有一个_type\r\n  let _type = VNODE_TYPE\r\n  return {\r\n    _type,\r\n    type,\r\n    key,\r\n    props,\r\n    children,\r\n    text,\r\n    domElement\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vnode);\r\n\n\n//# sourceURL=webpack:///./src/vdom/vnode.js?");

/***/ })

/******/ });