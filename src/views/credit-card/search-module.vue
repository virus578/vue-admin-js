<template>
  <div class="search-module">
    <searchCard
      @search="$emit('search')"
      @reset="$emit('reset')"
      @clear="$emit('clear')"
    >
      <label for="">
        <span>卡号:</span>
        <!-- <orderInput v-model="searchInfo.card" class="input-m" /> -->
        <el-input v-model.number="searchInfo.card" v-floor type="number" class="input-m" />
        <el-input v-model.number="searchInfo.card" v-int:2="abs" type="number" class="input-m" />
        <el-button>{{ 5 | example(2) }}</el-button>
        <btn />
      </label>
    </searchCard>
  </div>
</template>

<script>
import searchCard from '@/components/searchCard'
import orderInput from '@/components/order-input'
export default {
  name: 'SearchModule',
  components: {
    searchCard,
    orderInput
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
      abs: true
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
