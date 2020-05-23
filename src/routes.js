import VueRouter from 'vue-router';

const routes = [
  {
    path: '/', component: () => import('./layouts/Main.vue'),
    children: [
      { path: '/', component: () => import('./pages/Home.vue') },
      { path: '/users', component: () => import('./pages/Users.vue') },
      { path: '/posts/:page', component: () => import('./pages/Posts.vue') },
    ],
  },
];

const router = new VueRouter({ routes });

export default router;