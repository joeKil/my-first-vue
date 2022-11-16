<template>
<div>
  로그인 회원 레벨 : {{ $options.filters.levelCheck(userList, loginUser.id) }}
  <div v-if="$options.filters.levelCheck(userList, loginUser.id) === 2">
    안녕하세요! 정회원이시네요!
  </div>
  <div v-else>
    안녕하세요! 준회원이시네요!
  </div>
</div>
</template>

<script>
export default {
  name: "AmuTestComponent",
  data() {
    return {
      userList: [
        { id:1, name: 'NCT', leve:1 },
        { id:2, name: 'BlackPink', leve:2 },
        { id:3, name: 'GirlsGeneration', leve:2 }
      ],
      loginUser: ''
    }
  },
  mounted() {
    this.loginUser = this.userList[0]
  },
  filters: {
    levelCheck(object, id)
    {
      if (object === undefined || object === null || object === "") {
        return -1
      }
      else {
        let target = object.filter(object => object.id === id)
        if (target.length === 0) {
          return
        }
        else {
          return target[0].level
        }
      }
    },
  },
}
</script>

<style scoped>

</style>