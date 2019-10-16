<template>
  <div class="search-module">
    <searchCard @search="$emit('search')" @reset="$emit('reset')" @clear="$emit('clear')">
      <label for="">
        <span>asin:</span>
        <el-input v-model="searchInfo.asin" size="mini" class="input-s" />
      </label>
      <label for="">
        <span>状态:</span>
        <el-input v-model="searchInfo.status" size="mini" class="input-s" />
      </label>
    </searchCard>
  </div>
</template>

<script>
import searchCard from '@/components/searchCard'
export default {
  name: 'SearchModule',
  components: {
    searchCard
  },
  props: {
    // 必须写默认值和数据类型
    searchInfo: {
      type: Object,
      default: () => {}
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
