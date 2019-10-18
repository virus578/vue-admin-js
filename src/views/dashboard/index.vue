<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <prop :prop="prop" attr="attr" />
    <styless />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import prop from '@/prop'
import styless from '@/styless'
import mixin from '@/mixin/mixin'

export default {
  name: 'Dashboard',
  components: {
    prop,
    styless
  },
  mixins: [mixin],
  data() {
    return {
      prop: 'prop',
      attr: 'attr'
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
