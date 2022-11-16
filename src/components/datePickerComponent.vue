<template>
<div>
<div class="example">
  <h3>Date</h3>
  <cleave
    :options="{
      date: true,
      delimiter: '-',
      datePattern: ['Y', 'm', 'd']
    }"
    placeholder="YYYY-MM-DD"
    v-model="date"
  />
  <datepicker
    placeholder="날짜 선택"
    :value="date"
    name="uniqName"
    @selected="updateSelected"
    :language="ko"
    :format="dataPickerFormat"
  ></datepicker>
</div>
  <div>
    <input type="checkbox" v-model="arr" value="mine">
  </div>
</div>
</template>

<script>
import datepicker from 'vuejs-datepicker'
import { ko } from 'vuejs-datepicker/dist/locale'
// import * as inputDate from 'vue/src/core/instance/state'

export default {
  name: "datePickerComponent",
  components: {
    datepicker
  },
  data() {
    return {
      // appointment: {
      //   appointment_date: ''
      // },
      arr: [],
      cleaveDate: '',
      date: '',
      ko: ko,
      dataPickerFormat: 'yyyy-MM-dd',
      // cleaveDate: {
      //    delimiter: '-',
      //   delimiters: [' ']
      //  }
    }
  },
  methods: {
    updateSelected (datas) {
      // this.$nextTick(() => console.log(this.appointment.appointment_date))

      // let date, month, year
      let date = datas.getDate()
      let month = datas.getMonth() + 1
      let year = datas.getFullYear()

      this.date = year + '-' + month + '-' + date
      this.cleaveDate = year + '-' + month + '-' + date

      // return `${date}/${month}/${year}`
    }
    // dateCleave () {
    //   const cDate = this.date
    //   console.log('cDate :' + cDate)
    //
    //   let date =
    // }
  }
}
</script>

<style>
body {
  font-family: "Helvetica Neue Light", Helvetica, sans-serif;
}
input,
select {
  padding: 0.75em 0.5em;
  font-size: 100%;
  border: 1px solid #ccc;
  width: 100%;
}

select {
  height: 2.5em;
}

.example {
  background: #f2f2f2;
  border: 1px solid #ddd;
  padding: 0em 1em 1em;
}
</style>