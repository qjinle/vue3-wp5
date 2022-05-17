import {
    createRouter, createWebHistory, Router, RouterHistory
} from 'vue-router';
import { routes } from './routes';

const routerHistory: RouterHistory = createWebHistory();

const router: Router = createRouter({
    history: routerHistory,
    routes
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
    // console.log(to, from)
    if (to.meta.title) {
        document.title = `${to.meta.title}`;
    }
    next();
});

router.afterEach((to, from) => {
    // console.log(to, from)
    console.log('afterEach', to, from);
});

export default router;
