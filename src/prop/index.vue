<template>
  <div class="">
    <p>{{ `${prop} ${$attrs.attr}` }}</p>
  </div>
</template>

<script>
export default {
  name: '',
  components: {

  },
  props: {
    // 必须写默认值和数据类型
    prop: {
      type: String,
      required: true
    }
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
