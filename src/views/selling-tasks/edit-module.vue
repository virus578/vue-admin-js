<template>
  <div class="edit-module">
    <el-dialog
      :title="editInfo.title"
      :visible.sync="editInfo.isOpen"
      width="28%"
      :before-close="handleClose"
      @close="close"
    >
      <el-form ref="ruleForm" :model="editInfo.data" :rules="rules" label-width="100px" class="el-form-e">
        <el-form-item label="asin：" prop="asin">
          <el-input v-model="editInfo.data.asin" size="mini" autofocus="true" style="width:350px" />
        </el-form-item>
        <el-form-item label="url：" prop="url">
          <el-input v-model="editInfo.data.url" size="mini" style="width:350px" />
        </el-form-item>
        <el-form-item label="保护店铺：" prop="includes">
          <div v-for="(item, index) in editInfo.data.includes" :key="index" class="i-l-b mr-sm">
            <el-input v-model="item.value" size="mini" class="input-ms includes" />
            <div v-if="editInfo.data.includes.length > 1" class="delete-icon cursor i-l-b" @click="deleteInput('includes',index)" />
            <div v-if="index === editInfo.data.includes.length -1" class="add-icon cursor i-l-b" @click="addInput('includes')" />
          </div>
        </el-form-item>
        <el-form-item label="清除店铺：" prop="excludes">
          <div v-for="(item, index) in editInfo.data.excludes" :key="index" class="i-l-b mr-sm">
            <el-input v-model="item.value" size="mini" class="input-ms excludes" />
            <div v-if="editInfo.data.excludes.length > 1" class="delete-icon cursor i-l-b" @click="deleteInput('excludes',index)" />
            <div v-if="index === editInfo.data.excludes.length -1" class="add-icon cursor i-l-b" @click="addInput('excludes')" />
          </div>
        </el-form-item>
        <!-- <el-form-item label="mode：">
          <el-input v-model="editInfo.data.mode" size="mini" />
        </el-form-item> -->
        <!-- <el-form-item label="orders：">
          <el-input v-model="editInfo.data.orders" size="mini" />
        </el-form-item> -->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="editInfo.isOpen = false">取 消</el-button>
        <el-button type="primary" size="mini" @click="submitForm('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { addTask } from '@/api/selling-tasks'
export default {
  name: 'EditModule',
  components: {

  },
  props: {
    // 必须写默认值和数据类型
    editInfo: {
      type: Object,
      required: true
    }
  },

  data() {
    const includes = (rule, value, callback) => {
      console.log(value)
      if (value[value.length - 1].value === '') {
        callback(new Error('请输入保护店铺'))
      } else {
        callback()
      }
    }
    const excludes = (rule, value, callback) => {
      console.log(value)
      if (value[value.length - 1].value === '') {
        callback(new Error('请输入清除店铺'))
      } else {
        callback()
      }
    }
    return {
      rules: {
        asin: [{ required: true, message: '请输入asin', trigger: 'change' }],
        url: [{ required: true, message: '请输入url', trigger: 'change' }],
        includes: [{ validator: includes, required: true, trigger: 'blur' }],
        excludes: [{ validator: excludes, required: true, trigger: 'blur' }]
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
    submitForm(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          const { asin, url, mode, orders } = this.editInfo.data
          const includes = this.editInfo.data.includes.map((item) => item.value)
          const excludes = this.editInfo.data.includes.map((item) => item.value)
          const _data = { asin, url, mode, orders, includes, excludes }
          console.log(_data)
          const _res = await addTask(_data)
          this.editInfo.isOpen = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    addInput(params) {
      this.editInfo.data[params].push({ value: '' })
      console.log(document.querySelectorAll(`.${params}`))
      console.log(document.querySelector(`.${params}`))
      this.$nextTick(() => {
        document.querySelectorAll(`.${params}`)[ document.querySelectorAll(`.${params}`).length - 1].querySelector('input').focus()
      })
    },
    deleteInput(params, index) {
      this.editInfo.data[params].splice(index, 1)
    },
    handleClose(done) {
      this.editInfo.isOpen = false
    },
    close() {
      this.editInfo.isOpen = false
      this.editInfo.isAdd = true
      this.editInfo.title = '添加任务'
      this.editInfo.data.asin = ''
      this.editInfo.data.url = ''
      this.editInfo.data.mode = ''
      this.editInfo.data.orders = ''
      this.editInfo.data.includes.splice(1)
      this.editInfo.data.excludes.splice(1)
      // this.editInfo.data.includes = [{ value: '' }]
      // this.editInfo.data.excludes = [{ value: '' }]
      this.editInfo.data.includes[0].value = ''
      this.editInfo.data.excludes[0].value = ''
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form-e {
    height :350px;
    overflow-y: auto
}
.add-icon {
  height: 20px;
  width: 20px;
  background: url('../../assets/common/add.png') no-repeat center center;
  background-size: contain;
  vertical-align: middle;
}
.delete-icon {
  height: 20px;
  width: 20px;
  background: url('../../assets/common/delete.png') no-repeat center center;
  background-size: contain;
  vertical-align: middle;
}
</style>
