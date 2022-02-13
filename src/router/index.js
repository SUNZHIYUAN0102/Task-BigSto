import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import PersonalDetail from '../views/PersonalDetail.vue'
import AddPerson from '../views/AddPerson.vue'
import store from '../store'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Main
}, {
    path: '/detail/:userId',
    component: PersonalDetail
}, {
    path: '/add',
    component: AddPerson
}]

const router = new VueRouter({
    routes
})

export default router

router.beforeEach((to, from, next) => {
    if (to.path === '/') return next()
    if (store.state.peopleList.length === 0) return next('/')
    next()
})