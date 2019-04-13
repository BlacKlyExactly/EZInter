<template>
  <div class="nav">
    <ul>
      <li class="logo"><router-link to="/">EZ INTERIORS</router-link></li>
      <li class="select"><router-link to="/interiory">Interiory</router-link></li>
      <li class="select"><router-link to="/kontakt">Kontakt</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  mounted() {
    const nav = document.querySelector('.nav');
    const selects = document.querySelector('ul');
    document.addEventListener('scroll', () => {
      if (window.scrollY == 0) {
        nav.style.background = 'transparent';
        selects.style.color = 'white';
        nav.style.boxShadow = 'none';
      } else {
        nav.style.background = 'white';
        selects.style.color = 'black';
        nav.style.boxShadow = '0vw 0vw 2vw .2vw gray';
      }
    });
  },
  methods: {

  },
  data(){
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
  .nav{
    position: fixed;
    top: 0;
    width: 100vw;
    height: 6vw;
    z-index:22;
    transition: 0.2s;
    ul{
      display: flex;
      justify-content: flex-end;
      list-style: none;
      align-items: center;
      color: white;
      height: 6vw;
      z-index:22;
        li{
         transition: 0.2s;
        padding:1vw;
          &:hover{
            cursor: pointer;
            background: white;
            color: black;
          }
        }
    }
  }
  .logo{
    position: relative;
    margin-right:auto;
    font-size: 2.1vw ;
    font-weight: bold;
    left:2vw;
  }
  .select{
    margin-right:4vw;
    font-size:1.5vw;

  }

</style>
