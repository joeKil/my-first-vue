import Vue from 'vue'
import filter from 'vue-filter'

Vue.use(filter)

Vue.filter('moneyFilter', function (value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
})

Vue.filter('unit', function (value) {
    return `${value} 원`;
})

Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase()
})