<template>
  <div class="">
    <div>
      <h3>class</h3>
      <hr>
      <p :class="{classR: isAcitve}">对象</p>
      <p :class="classObject">对象</p>
      <p :class="clo">对象</p>
      <!-- :class="classR"错误 -->
      <p :class="[active, top]">数组</p>
      <p :class="[ isAcitve ? top: '', active]">数组</p>
      <p :class="[ {top: fasle},active]">数组</p>
    </div>
    <div>
      <h3>style</h3>
      <hr>
      <p :style="{color: activeC}">对象</p>
      <p :style="[activeB]">数组</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {

  },
  props: {
  // 必须写默认值和数据类型
  },

  data() {
    return {
      classObject: {
        // classR: true,
        'class-y': true
      },
      isAcitve: true,
      active: 'classR',
      top: 'class-y',
      activeC: '#0ff',
      activeB: {
        color: '#0f0'
      }
    }
  },

  computed: {
    clo() {
      return { classR: true }
    }
  },

  watch: {

  },

  mounted() {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
.classR {
  color:red
}
.class-y {
  color: yellow
}
</style>
