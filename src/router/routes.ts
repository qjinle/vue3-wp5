const home = () => import('../views/home/index.vue');
const demo = () => import('../views/demo/index.vue');

export const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/*',
        redirect: '/',
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/demo',
        name: 'demo',
        component: demo
    },
];
