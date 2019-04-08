<template>
    <div class="contact">
      <Navbar></Navbar>
      <h1>Contact</h1>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Contact',
  components:{
    Navbar,
  },
};
</script>

<style scoped>
.contact{
  background: lightgray;
  height:75vw;
  width:100vw;
}
</style>
