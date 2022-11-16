<template>
<div v-cloak>
  <p>
    <button @click="locateMe">get location</button>
  </p>

  <div v-if="errorStr">
    error
  </div>

  <div v-if="gettingLocation">
    <i>getting your location</i>
  </div>

<!--  기초값을 다 세팅하는 방법, 그리고 지금처럼 하는 방법이 있다 -->
  <div v-if="location">
    your location data is 위도 : {{ location.coords.latitude }}, 경도 : {{ location.coords.longitude }}
  </div>
</div>
</template>

<script>
export default {
  name: "mapLocation",
  data() {
    return {
      location: null,
      gettingLocation: true,
      errorStr: null
    }
  },
  methods: {
    async getLocation() {
      // promise(executor(실행자)의 resolve, reject는 콜백 함수의 인자
      return new Promise((resolve, reject) => {
        // if(!("geolocation" in navigator )) {
        if(!(navigator.geolocation )) {
          reject (new Error('geolocation is not available'))
        }
        navigator.geolocation.getCurrentPosition(pos => {
          resolve(pos)
        }, err => {
          reject(err)
        })
      })
    },
    async locateMe() {
      this.gettingLocation = true
      try {
        this.gettingLocation = false
        this.location = await this.getLocation()
      } catch(e) {
        this.gettingLocation = false
        this.errorStr = e.message
      }
    }
  }
}
</script>

<style scoped>

</style>
