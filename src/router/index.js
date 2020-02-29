import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultSlot from '../views/defaultslot'
import bakslot from '../views/bakslot'
import nameSlot from '../views/nameSlot'
import scopeSlot from '../views/scopeslot'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        redirect: '/defaultSlot'
    }, {
        path: '/defaultSlot',
        component: defaultSlot
    }, {
        path: '/bakslot',
        component: bakslot
    }, {
        path: '/nameSlot',
        component: nameSlot
    }, {
        path: '/scopeSlot',
        component: scopeSlot
    }]
})