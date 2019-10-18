<template>
  <div class="">
    <p>slot</p>
    <slot>ccc</slot>
    <!-- <slot name="old" /> -->
    <header>
      <slot name="header" testProps="子组件的值" />
    </header>
    <!-- <main>
      <slot />
    </main>
    <footer>
      <slot name="footer" />
    </footer> -->
  </div>
</template>

<script>
// slot v-slot 和作用域查抄 https://juejin.im/post/5cb0564e5188251acb530087
// slot  具名插槽 https://www.cnblogs.com/vickylinj/p/9578455.html
/*
2.6以前的slot
<slot /> 匿名插槽 一个不带 name 的 <slot> 出口会带有隐含的名字“default”。
编译作用域
后备内容 <slot>ccc</slot>
子<slot name="footer"> <h1 slot="header">Here might be a page title</h1> 具名插槽
作用域插槽 作用域插槽则是通过slot-scope获取子组件的信息，在内容中使用。这里可以用解构语法去直接获取想要的属性

2.6以后的v-slot
匿名插槽 v-slot
<template v-slot:header /> 具名插槽 具名插槽缩写  <template #header />  v-slot can only be used on components or <template>.
作用域插槽
动态插槽
独占默认插槽
结构插槽Prop
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

  },

  methods: {

  }
}
</script>

<style lang="" scoped>

</style>
