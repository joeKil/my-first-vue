<template>
<div>
  <h1>전화번호</h1>
  <br>
  <cleave v-model="type" :options="cleaveOptions"></cleave>
</div>
</template>

<script>
export default {
  name: "phoneNumberComponent",
  data() {
    return {
      cardNumber: null,
      options: {
        creditCard: true,
        delimiter: '-',
      },
      type: 'cleave',
      cleaveOptions: {
        phone: true,
        phoneRegionCode: 'kr',
        delimiter: '-',
        delimiters: [' '],
        date: new Date()
      }
    }
    }
  }
</script>

<style scoped>

</style>