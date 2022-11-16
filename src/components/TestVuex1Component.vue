<template>
<div>
  <h2>todos</h2>
  <input type="text" v-model="filterText" />
  <span>입력 text : {{ filterText }}</span>
  <br>
  <span>{{ filterText | moneyFilter | unit }}</span>
</div>
</template>

<script>
export default {
  name: "TestVuex1Component",
  data() {
    return {
      arrText: ['korea', 'english', 'money', 'kor', 'kind'],
      filterText: '',
      arrNumbers: [1,2,3,4,5,6,7,8,9,10]
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>