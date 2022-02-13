import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        peopleList: [],
        pageNum: 1,
        totalNum: 0,
        finished: false,
    },
    mutations: {
        setPageNum(state) {
            state.pageNum += 1
        },
        getTotalNum(state, num) {
            state.totalNum = num
        },
        setLoading(state) {
            state.finished = true
        },
        setPeopleList(state, value) {
            state.peopleList = value
        },
        deletePerson(state, id) {
            var item = state.peopleList.find(item => item.id === id)
            var index = state.peopleList.indexOf(item)
            state.peopleList.splice(index, 1)
        },
        addPerson(state, data) {
            state.peopleList.push(data)
        }
    },
    actions: {},
    modules: {}
})