<template>
  <div class="credit-card">
    <searchModule
      :search-info="searchInfo"
      @reset="reset"
      @clear="clear"
      @search="search"
    />
    <div class="index-button-cell">
      <!-- <el-button type="success" size="mini" @click.native="addSwitch">添加</el-button> -->
    </div>
    <tableModule
      :table-info="tableInfo"
      :search-info="searchInfo"
      @editCredit="editCredit"
      @init="init"
    />
    <editModule
      :edit-info="editInfo"
      @editCredit="editCredit"
    />
  </div>
</template>

<script>
import searchModule from './search-module'
import tableModule from './table-module'
import editModule from './edit-module'
export default {
  name: 'CreditCard',
  components: {
    searchModule,
    tableModule,
    editModule
  },
  props: {
    // 必须写默认值和数据类型
  },

  data() {
    return {
      searchInfo: {
        card: '',
        page: 1,
        pageSize: 50
      },
      cloneSeachInfo: {},
      tableInfo: {
        loading: false,
        data: [{
          name: 'wqj',
          data: '2019-08-09',
          card: '123456',
          country: '中国',
          type: '储蓄卡',
          is_use: '是'
        }],
        count: 0
      },
      editInfo: {
        isAdd: 0, // 1是添加 0是编辑
        dialog: false,
        data: {
          name: '',
          card: '',
          country: '',
          type: '',
          is_use: '是'
        }

      }
    }
  },

  computed: {

  },

  watch: {

  },

  mounted() {

  },

  methods: {
    clear() {
      this.searchInfo.page = 1
      this.searchInfo.pageSize = 50
      this.searchInfo.card = ''
    },
    reset() {
      this.searchInfo = { ...this.cloneSeachInfo }
    },
    search() {
      this.searchInfo.page = 1
      console.log(this.searchInfo.card)
      this.cloneSeachInfo = JSON.parse(JSON.stringify(this.searchInfo))
      this.init()
    },
    init() {
    },
    addSwitch() {
      this.editInfo.isAdd = 1
      this.editInfo.dialog = true
      this.editCredit()
    },
    editCredit(data = {}) {

    }
  }
}
</script>

<style lang="scss" scoped>
.index-button-cell{
  padding: 10px 0 20px;
}
</style>
