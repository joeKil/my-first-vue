<template>
<div>안녕하세요 뷰2 입니다
  <button @click='movePage'>파라미터</button>
<br>
    액시오스
    <button @click='axData'>액시오스 버튼</button>
  <button @click='axPut'>액시오스 풋 버튼</button>
  <button @click='axDelete'>액시오스 삭제 버튼</button>
  <button @click='test'>코딩공부버튼</button>
  <br>
  <table>
    <thead>
    <tr>
        <th>json</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>
<!--          <h1 v-for="(item, index) in test1Data" :key="index">{{ item.title }}</h1>-->
        </td>
      </tr>
     </tbody>
  </table>
  <div>
    필터연습1
    <input type="number" v-model="num" placeholder="숫자를 입력하세요"/><br>
    {{ num | money }}<br>
    {{ num | money | won }}
  </div>
</div>
</template>


<script>
import axios from 'axios'
import { createNamespacedHelpers } from 'vuex'
const test1 = createNamespacedHelpers('test1')

export default {
  name: "HomeComponent",
  data() {
    return {
      jsData: [],
      title: '바뀜',
      id: 1,
      num: 100,
    }
  },
  filters: {
    money: function (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },

  },
  mounted() {
    this.loadT1Data()
  },
  computed: {
    ...test1.mapState([
        'test1Data'
    ])
  },
  methods: {
    ...test1.mapActions([
      'loadT1Data'
    ]),
    movePage: function () {
      this.$router.push({name: 'about', params: {'userName': 'test'}})
    },
    axData: function () {
      axios.get('http://jsonplaceholder.typicode.com/posts')
          .then((response) => {
            this.jsData = response.data
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error)
          })
    },
    axPut: function () {
      axios.put(`http://jsonplaceholder.typicode.com/posts/${this.id}`, {
        title: this.title
      }).then(() => {
        alert('수정 완료')
      }).catch(() => {
        alert('에러')
      })
    },
    axDelete: function () {
      axios.delete(`http://jsonplaceholder.typicode.com/posts/${this.id}`)
          .then(() => {
            alert('삭제 되었습니다.')
            this.$router.push('/about')
          }).catch(() => {
        alert('에러')
      })
    },
    test: function() {
      const array1 = ['a', 'b', 'c'];

      array1.forEach(x => console.log(x));
    }
    }
  }
</script>

<style scoped>

</style>