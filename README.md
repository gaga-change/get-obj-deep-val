> 获取一个对象不论多少层级的属性值，如有多个只取一个，不存在则返回`undefined`

案例：
```js
const getObjDeepVal = require('get-obj-deep-val')
let x = { a: { b: { c: { d: 1 } } } };
Object.prototype.getObjVal = function(key) {
 return getObjDeepVal(this, key)
}
console.log(x.getObjVal('a')) // { b: { c: { d: 1 } } }
console.log(getObjDeepVal(x, 'a')) // { b: { c: { d: 1 } } } 
console.log(x.getObjVal('c')) // { d: 1 }
console.log(x.getObjVal('d')) // 1
console.log(x.getObjVal('g')) // undefined
```