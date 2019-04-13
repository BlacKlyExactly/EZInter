<template>
<div class="kontakt">
  <Navbar></Navbar>
  <img alt="xd"  src="https://i.imgur.com/3dQ0MME.png"/>
  <div class="discord">
    <div id="discord" class="name">Discord</div>
    <iframe class="widget" src="https://discordapp.com/widget?id=566661645821018133&theme=dark"  allowtransparency="true" frameborder="0"></iframe>
  </div>
  <div class="discord">
    <div id="gmail" class="name">Email</div>
    <div class="send">
      <form method="POST" action="https://formspree.io/supreme24d@gmail.com">
        <input type="email" name="email" placeholder="Twój email">
        <textarea name="wiadomosc" placeholder="Coś od siebie"></textarea>
        <button  class="btt" type="submit">Wyślij</button>
      </form>
    </div>
  </div>
</div>
</template>


<script>
import Navbar from '../components/Navbar.vue';
export default {
    name: 'Kontakt',
  components:{
      Navbar
  },
  mounted() {
    const nav = document.querySelector('.nav');
    const selects = document.querySelector('ul');
    selects.style.color = 'black';
    document.addEventListener('scroll', () => {
      if (window.scrollY == 0) {
        nav.style.background = 'transparent';
        selects.style.color = 'black';
        nav.style.boxShadow = 'none';
      } else {
        nav.style.background = 'white';
        selects.style.color = 'black';
        nav.style.boxShadow = '0vw 0vw 2vw .2vw gray';
      }
    });
  },
};
</script>

<style scoped lang="scss">
.widget{
  width:50vw;
  height: 45vw;
  background: #7289da;
  box-shadow:0vw 0vw 2vw .2vw black;
}
.discord{
  display: flex;
  margin-top: 12vw;
}
  .name{
    font-size: 5vw;
    width:50vw;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .kontact{
    display: flex;
    height:500vw;
  }
  #discord{
    background: #7289da;
    color: white;
  }
  #gmail{
    background: #D44638;
    color: white;
    width: 70;
  }
  form{
    box-shadow:0vw 0vw 2vw .2vw black;
    height: 35vw;
  }
 input[type='email']{
   position: relative;
   border:none;
   border-bottom: .1vw solid #D44638;
   width: 50vw;
   height: 5vw;
   margin-bottom: 2vw;
   left:5vw;
   font-size:1.5vw;
 }
textarea{
  position: relative;
  border: .1vw solid #D44638;
  width: 50vw;
  height: 20vw;
  left:5vw;
  font-size:1.5vw;
}

.btt {
  position: relative;
  transition: 0.2s;
  z-index: 21;
  border-radius: 25vw;
  border: .1vw solid #D44638;
  width: 18vw;
  height: 5vw;
  top:1vw;
  left: 5vw;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.5vw;
  color: #D44638;
  &:hover {
    background: #D44638;
    color: white;
    cursor: pointer;
  }
}
img{
left:58.7vw;
  position: relative;
  box-shadow:0vw 0vw 5vw .4vw gray;
  top: 14vw;
  width:40vw;
  margin-bottom: 10vw;
  background: #7289da;

}
</style>
