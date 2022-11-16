import Vue from 'vue'
import Vuex from 'vuex'
import book from './book/book'
import test1 from './pracVuex/test1'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        book: book,
        test1: test1
    }
})