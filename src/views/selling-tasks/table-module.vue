<template>
  <div class="table-module">
    <el-table
      v-loading="tableInfo.loading"
      element-loading-text="拼命加载中"
      :data="tableInfo.data"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="asin"
        label="asin"
        width="180"
      />
      <el-table-column
        prop="url"
        label="url"
        width="180"
      />
      <el-table-column
        label="保护店铺"
        width="180"
      />
      <template slot-scope="">
        <!-- {{ scope.row.protectShop }} -->
      </template>
      <el-table-column
        prop="clearShop"
        label="清除店铺"
        width="180"
      />
      <el-table-column
        prop="mode"
        label="模式"
        width="180"
      />
      <el-table-column
        prop="status"
        label="状态"
        width="180"
      />
      <el-table-column
        label="操作"
      />
      <template slot-scope="scope">
        <!-- <el-button>编辑</el-button> -->
        <el-button type="primary" size="mini" @click="perform(scope.row)">执行</el-button>
        <el-button type="warning" size="mini" @click="perform(scope.row)">日志</el-button>
        <el-button type="danger" size="mini" @click="del(scope.row)">删除</el-button>
      </template>
    </el-table>
    <div class="pagination">
      <el-pagination
        :current-page="searchInfo.page"
        :page-size="searchInfo.pageSize"
        layout="total, prev, pager, next"
        :total="tableInfo.count"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableModule',
  components: {

  },
  props: {
    // 必须写默认值和数据类型
    tableInfo: {
      type: Object,
      default: () => {}
    },
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
    perform(data) {

    },
    del(data) {

    },
    handleSizeChange(val) {
      this.searchInfo.pageSize = val
      this.$emit('init')
    },
    handleCurrentChange(val) {
      this.searchInfo.page = val
      this.$emit('init')
    }
  }
}
</script>

<style lang="" scoped>

</style>
