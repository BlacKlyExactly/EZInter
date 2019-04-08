<template>
  <div class="home">
    <Navbar/>
    <Header/>
    <Content/>
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
import Content from '../components/Content.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    Header,
    Content,
  },
};
</script>

