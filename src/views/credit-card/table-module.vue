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
        prop="name"
        label="姓名"
        width="180"
        align="center"
      />
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        align="center"
      />
      <el-table-column
        prop="card"
        label="卡号"
        align="center"
      />
      <el-table-column
        prop="country"
        label="国家"
        align="center"
      />
      <el-table-column
        prop="类型"
        label="地址"
        align="center"
      />
      <el-table-column
        prop="is-use"
        label="是否被使用"
        align="center"
      />
      <el-table-column
        label="操作"
      >
        <template>
          <el-button
            type="warning"
            size="mini"
            @click="edit(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            type="danger"
            size="mini"
            @click="del"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
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
      required: true
    },
    searchInfo: {
      type: Object,
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
    del() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    edit() {
      this.$emit('editCredit')
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

<style lang="scss" scoped>
</style>
