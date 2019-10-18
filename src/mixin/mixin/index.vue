<script>
/* 混入(mixin)提供非常灵活的方式 分发vue组件的复用功能
一个混合对象可以包含组件的任意选项
当组件和混入重名时遵循合并策略
*/
/*
选项合并
data在对象中递归合并 冲突时已组件数据优先
同名钩子函数合并为一个数组 都会调用 但是 混入对象的钩子函数会先执行
对象下的methods, components deirectives 对象合并冲突时 取组件对象的键值对
 */
/* 场景 组件任一项的复用 methods 模态框  */
// https://segmentfault.com/a/1190000015698391
import Vue from 'vue'
Vue.mixin({
  created() {
    console.log('我是全局混入')
  }
})
// 每个vue实例都会受影响(包括第三方组件) 谨慎使用 推荐使用 插件
/* 自定义选项合并策略
默认值为覆盖已有值
vue.config.optionMergeStrategies.myOption = (toval, fromVal) => //但会合并的值
*/
export default {
  name: '',
  components: {

  },
  props: {
    // 必须写默认值和数据类型
  },

  data() {
    return {

    }
  },

  computed: {

  },

  watch: {

  },

  mounted() {
    console.log('hello, minxin')
  },

  methods: {

  }
}
</script>

<style lang="" scoped>

</style>
