import Vue from 'vue'
Vue.filter('example', function(val, num) {
  return val * num
  // 与computed类似返回结果
})
// 过滤器的使用场景
// {{message | exmaple}}
/* <div :id="message | exmaple"></div> */
// filters:{
//   example: (val,num) => {
//     return val * num
//   }
// }

// 过滤器可以串联
// {{ message | filterA | filterB }}
// 过滤器是 JavaScript 函数
// { { message | filterA('arg1', arg2) } }
// 其中 message 的值作为第一个参数，普通字符串 'arg1' 作为第二个参数， 与$emit相同
