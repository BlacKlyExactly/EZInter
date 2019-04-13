import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Interiory from './views/Interiory.vue';
import Kontakt from './views/Kontakt.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/interiory',
      name: 'interiory',
      component: Interiory,
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Kontakt,
    },
  ],
});
