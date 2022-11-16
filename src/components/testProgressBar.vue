<template>
<div>
<!--  <b-progress :value="value" :max="max" show-progress animated></b-progress>-->
<!--  <b-progress class="mt-2" :max="max" show-value>-->
<!--    <b-progress-bar class="back_class" :value="value * (6 / 10)" variant="success"></b-progress-bar>-->
<!--    <b-progress-bar class="back_class" :value="value * (2.5 / 10)" variant="warning"></b-progress-bar>-->
<!--    <b-progress-bar class="back_class" :value="value * (1.5 / 10)" variant="danger"></b-progress-bar>-->
<!--  </b-progress>-->

<!--  <b-button class="mt-3" @click="randomValue">클릭!</b-button>-->
<!--  <button @click="start">start</button>-->
  <button @click="pctStop">멈춰</button>
  <button @click="testInterval">시작</button>
<!--  <br>-->
  <div>
      <h2>Real-time updating</h2>
    <div>
      <div>Increasing percent (stops at 100%): {{increasing_pct}}%<strong></strong></div>
      <progress-bar size="large" :val="increasing_pct" :text="increasing_pct + '%'" />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "testProgressBar",
  data() {
    return {
      value: 0,
      max: 100,
      increasing_pct: 0,
      modula: null
    }
  },
  methods: {
    // randomValue() {
    //   this.value = Math.random() * this.max
    // },
    // start() {
    //   this.$Progress.start()
    // },
    // set(num) {
    //   this.$Progress.set(num)
    // },
    // increase(num) {
    //   this.$Progress.increase(num)
    // },
    // decrease(num) {
    //   this.$Progress.decrease(num)
    // },
    // finish() {
    //   this.$Progress.finish()
    // },
    // fail() {
    //   this.$Progress.fail()
    // },
    // test() {
    //   this.$Progress.start()
    //
    //   this.$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz')
    //       .then((response) => {
    //         console.log(response)
    //         this.$Progress.finish()
    //       }, (response) => {
    //         console.log(response)
    //         this.$Progress.fail()
    //       })
    // },
    pctStop() {
      clearInterval(this.modula)
    },
    move() {
      this.increasing_pct = Math.min(this.increasing_pct + 1, this.max)
    },
    testInterval() {
      this.modula = setInterval(this.move, 100);
    }
  },
  computed: {
    // 심플 프로그레스 영역
  },
  mounted() {
    this.testInterval()
    }
}
</script>

<style scoped>
.back_class {
  background-color: tomato;
  /*폰트 색깔 바꿀 때..*/
  color: chartreuse;

}

</style>
