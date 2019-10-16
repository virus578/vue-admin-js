import Vue from 'vue'
import { Message } from 'element-ui'
export default Vue.directive('int', {
  inserted(el, bingding, vnode) {
    const element = el.querySelector('input')
    const len = bingding.arg
    element.addEventListener('blur', () => {
      console.log(bingding.value)
      // console.log(element.value)
      // console.log(bingding.expression)
      // console.log(bingding.arg)
      // console.log(bingding.modifiers)
      // binding.value.set(1)
      if (isNaN(element.value)) {
        vnode.data.model.callback(0)
      } else {
        console.log(bingding.expression)
        if (bingding.expression === 'abs' && Number(element.value) < 0) {
          Message.error('请输入大于0的数值')
          vnode.data.model.callback(Math.abs(Number(element.value)).toFixed(len))
        } else {
          vnode.data.model.callback(Number(element.value).toFixed(len))
        }
      }
    }, false)
  }
})
// addEventListener(type, listener[options,useCapture, wantsUntrusted  ])
// type 监听事件名称
// listener监听的事件
// options listener 的属性
// capture listener会在该类型的时间捕获阶段EventTarget 时触发。
// once true 只调用一次就移除
// passive: boolean true 永远不调用 preventDefault()
// useCapture true 事件捕获 false 事件冒泡
// wantsUntrusted  如果为 true , 则事件处理程序会接收网页自定义的事件。
// 此参数只适用于 Gecko（chrome的默认值为true，其他常规网页的默认值为false），主要用于附加组件的代码和浏览器本身。
// https://www.jb51.net/article/148657.htm
// Vue.directive('focus', {
//   inserted: () => {}
// })
// directives:{
//   focus:{
//     inserted:() =>{}
//   }
// }
// 使用 v-focus
/*
指令的五个钩子: bind inserted update componentUpdated unbind
bind: 指令第一次插入元素时
inserted: 被绑定元素插入父节点时 (父节点存在, 但不一定被插入文档中)
update 所在组件的vnode更新时 (可能发生在其子vnode指令之后)
componentUpdated 指令所在组件vnode以及子组件vnode全部更新完后调用
unbind 指令与元素解绑时

指令钩子函数参数: el binding vnode oldVnode
el:绑定的元素可以操作dom
binding:指令对象(包含对象下的属性)
vnode:虚拟dom
oldVnode:上一个虚拟dom(仅在update, componentUpated 使用)

bingding的六个参数: name value oldValue expression arg modifiers
name:指令名称
value:指令绑定的值 例如：v-my-directive="1 + 1" 中，绑定值为 2。
oldValue:上一个指令绑定的值 仅在 update 和 componentUpdated 钩子中可用
expresion:指令的表达式(v-my-directive="1 + 1") "1+1" 即属性名称
arg:指令的参数 v-my-directive:foo
modifiers:修饰符对象
*/
// 除了 el 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行。
// 函数简写
// bing和updated相同行为时 可以省略函数/方法名
// Vue.directive('xxx',() =>{})

// 对象字面量
/* <div v-demo="{ color: 'white', text: 'hello!' }"></div> */
// Vue.directive('demo', function (el, binding) {
//   console.log(binding.value.color) // => "white"
//   console.log(binding.value.text)  // => "hello!"
// })
