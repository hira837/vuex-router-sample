import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        message: '初期メッセージ'
    },
    getters: {
        //messgageを使用するgetter
        message(state) { return state.message }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
export default store