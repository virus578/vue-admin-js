<template>
  <el-card>
    <slot />
    <el-button
      class="ml-ms"
      type="primary"
      size="mini"
      @click="init"
    >
      搜索
    </el-button>
    <el-button
      :type="!chagne?'info':'primary'"
      size="mini"
      :disabled="!chagne"
      @click="restore"
    >
      还原修改
    </el-button>
    <el-button
      type="warning"
      size="mini"
      @click="clear"
    >
      清空条件
    </el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      chagne: false
    }
  },
  methods: {
    init() {
      this.chagne = true
      this.$emit('search')
    },
    restore() {
      this.chagne = false
      this.$emit('reset')
    },
    clear() {
      this.$emit('clear')
    }
  }
}
</script>

<style lang="scss">
  .el-card{
    overflow: inherit;
  }
  .ml-ms{
    margin-left: 15px
  }
</style>
