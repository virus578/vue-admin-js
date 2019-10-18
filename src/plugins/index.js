// https://yq.aliyun.com/articles/70997
// https://www.cnblogs.com/libin-1/p/6254390.html
// https://blog.csdn.net/hjh15827475896/article/details/78207066
/* 插件:通常为vue做全局功能
  1.添加全局方法或者属性  vue-custom-element
  2.添加全局资源  vue-touch
  2.通过全局混入组件选项 vue-router
  3.添加vue实例方法 Vue.prototype
  5.一个库 提供自己得api 同事提供一个或者多个功能 如vue-router
 vueRouter
 axios https://www.npmjs.com/package/axios http://axios-js.com/docs/index.html https://www.jianshu.com/p/7a9fbcbb1114
 element
*/
// 突破本地离线存储5M限制的JS库localforage https://www.zhangxinxu.com/wordpress/2018/06/js-localforage-localstorage-indexdb/
// HTML5 indexedDB前端本地存储数据库实例教程 http://www.zhangxinxu.com/wordpress/2017/07/html5-indexeddb-js-example/
// worker https://www.ibm.com/developerworks/cn/web/1301_jiangjj_html5message/index.html
//  问题插件使用全局混入
import Vue from 'vue'
export default {
  install(Vue, options) {
    Vue.mixin({
      created() {
        console.log('插件')
      }
    })
  }
}
// myPlugin.install = function(Vue,options){
//   // 全局方法/属性
//   Vue.myGlobalMethod = () =>{//...}
//   // 全局指令
//   Vue.directive('my-directive',bing(){})
//   //3.全局混入
//   Vue.mixin({created(){}})
//   //4.添加实例方法/属性
//   Vue.prototype.$myMethod = ()=>{}
// }
