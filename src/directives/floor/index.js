import Vue from 'vue'
export default Vue.directive('floor', {
  inserted(el, binding, vnode) {
    console.log(el.querySelector('input'))
    const input = el.querySelector('input') // querySelector 返回一个元素 querySelector返回所有元素
    input.addEventListener('blur', e => {
      // binding.value = Math.floor(binding.value)
      // binding.value.set(1)
      console.log(vnode)
      if (isNaN(input.value)) {
        vnode.data.model.callback(0)
      } else {
        // vnode.data.model.callback(Number(element.value).toFixed(len))
        vnode.data.model.callback(Math.floor(input.value))
      }
    }, false)
  }
})
// https://www.jb51.net/article/148657.htm
