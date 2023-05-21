import { createWebHistory, createRouter } from 'vue-router'


import Home from "../pages/HomePage.vue";
import Test from "../pages/Test.vue";
import Login from "../pages/auth/Login.vue"
import TripsAndEvents from "../pages/TripsAndEvents.vue"

//ADMIN
import AdminDashboard from "../pages/admin/Dashboard.vue";

const USER_ROLES = {
    ADMIN: 'admin',
    USER: 'user',
    MANAGER: 'manager'
}


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/trips',
        name: 'TripsAndEvents',
        component: TripsAndEvents,
    },
    {
        path: '/test',
        name: 'Test',
        component: Test,
    },
    {
        path: '/admin-dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard,
        meta: { requiresAuth: true, roles: [USER_ROLES.ADMIN] }
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


  
export default router