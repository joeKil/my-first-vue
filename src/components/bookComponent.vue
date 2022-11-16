<template>
<div>
  <div>
    {{ message }} || AA
  </div>
  <div>
    <button @click="changeText">mutation</button>
  </div>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const bookHelper = createNamespacedHelpers('book')

export default {
  name: "bookComponent",
  data() {
    return {
    }
  },
  computed: {
    ...bookHelper.mapState({
      message: state => state.message
    })
  },
  methods: {
    ...bookHelper.mapMutations([
        'changeMessage'
    ]),
    changeText () {
      this.changeMessage('AAAA')
    }
  }
}
</script>

<style scoped>

</style>