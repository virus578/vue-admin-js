<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <prop :prop="prop" attr="attr" />
    <styless />
    <sslot>
      <!-- <old slot="old" /> -->
      <old v-slot />
      <!-- <h1 slot="header" slot-scope="testProps">Here might be a page title  {{ testProps.testProps }}</h1> -->
      <!-- <p>A paragraph for the main content.</p>
      <p>And another one.</p>
      <p slot="footer">Here's some contact info</p> -->
      <!-- <template #header>
        <div>Here might be a page title</div>
      </template> -->
      <template #header="testProps">
        <div>Here might be a page title {{ testProps.testProps }}</div>
      </template>
    </sslot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import prop from '@/prop'
import styless from '@/styless'
import mixin from '@/mixin/mixin'
import sslot from '@/slot/study'
import old from '@/slot/study/old'

export default {
  name: 'Dashboard',
  components: {
    prop,
    styless,
    sslot,
    old
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
