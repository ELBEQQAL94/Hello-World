import vue from 'vue';
import Router from 'vue-router';

// Our Routers
import Home from './views/Home.vue';
import About from './views/About.vue';

vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/About',
            component: About
        },
    ]
})

