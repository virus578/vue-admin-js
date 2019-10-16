<template>
  <div class="selling-tasks">
    <searchModule :search-info="searchInfo" @search="search" @reset="reset" @clear="clear" />
    <div>
      <el-button type="success" size="mini" @click="addTaskSwitch">添加</el-button>
    </div>
    <editModule :edit-info="editInfo" />
    <tableModule :table-info="tableInfo" :search-info="searchInfo" @init="init" />
  </div>
</template>

<script>
import searchModule from './search-module'
import editModule from './edit-module'
import tableModule from './table-module'
export default {
  name: 'SellingTasks',
  components: {
    searchModule,
    editModule,
    tableModule
  },
  props: {
    // 必须写默认值和数据类型
  },

  data() {
    return {
      searchInfo: {
        asin: '',
        status: '',
        page: 1,
        pageSize: 50
      },
      cloneSeachInfo: {},
      tableInfo: {
        loading: false,
        data: [{
        }],
        count: 0
      },
      editInfo: {
        isOpen: false,
        isAdd: true,
        title: '添加任务',
        data: {
          asin: '',
          includes: [{ value: '' }],
          excludes: [{ value: '' }],
          url: '',
          mode: 1,
          orders: []
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
    addTaskSwitch() {
      this.editInfo.isOpen = true
    },
    clear() {
      this.searchInfo.page = 1
      this.searchInfo.pageSize = 50
      this.searchInfo.asin = ''
      this.searchInfo.status = ''
    },
    reset() {
      this.searchInfo = { ...this.cloneSeachInfo }
    },
    search() {
      this.searchInfo.page = 1
      this.cloneSeachInfo = JSON.parse(JSON.stringify(this.searchInfo))
      this.init()
    },
    init() {
    }
  }
}
</script>

<style lang="" scoped>

</style>
