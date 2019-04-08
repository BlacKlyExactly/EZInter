<template>
    <div class="header">
      <vue-particles class="particles"
        color="#ffffff"
        :particleOpacity="0.9"
        :particlesNumber="40"
        shapeType="circle"
        :particleSize="3"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="0.4"
        :hoverEffect="false"
        :linesDistance="100"
        :moveSpeed="3"
      >
      </vue-particles>
      <img alt="xd"  src="https://i.imgur.com/3dQ0MME.png"/>
      <div class="subtitle">Najlepsze interiory <br/>
        do GTA V
        <div class="button" @click="interiorsScroll">Dalej</div></div>
      <div class="navigation">
        <ul>
          <li @click="interiorsScroll">Najnowsze interiory</li>
          <li @click="FAQScroll">FAQ </li>
          <li @click="sendScroll">Wyślij interior</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    interiorsScroll() {
      window.scrollTo(0, document.querySelector('.interiors').offsetTop);
    },
    FAQScroll() {
      window.scrollTo(0, document.querySelector('.FAQ').offsetTop);
    },
    sendScroll() {
      window.scrollTo(0, document.querySelector('.send').offsetTop);
    },
  },
};
</script>

<style lang="scss" scoped>
  .header{
    height:71.8vw;
    width: 98.68vw;
    display: flex;
    position: relative;
    background-size:10vw;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
    &:after{
      content: "";
      opacity:0.4;
      background: black;
      position: absolute;
      height: 100%;
      width:100%;
      z-index:10;
    }
    &:before{
      content: "";
      background: url("https://i.imgur.com/8LUm8id.jpg");
      position: absolute;
      width:100%;
      height:100%;
      z-index: 9;
    }
  }
  .title{
    color:black;
    position: relative;
    padding:3vw;
    align-items: center;
    display: flex;
    width:58vw;
    justify-content: center;
    font-size:5vw;
    font-weight:bold;
    margin-left:2vw;
    top: 4vw;
    background: white;
    box-shadow: 0vw 0vw 2vw .5vw black;
    z-index:21;
  }
  .subtitle{
    color:white;
    position: relative;
    align-self: center;
    z-index:21;
    top: 4vw;
    font-size:5vw;
    margin-left:-5vw;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .button{
    position: relative;
    transition: 0.2s;
    z-index:21;
    background: transparent;
    border-radius: 25vw;
    border:.2vw solid white;
    width:18vw;
    height: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 2.2vw;
    text-shadow: none;
    color: white;
    margin-top: 7vw;
    margin-bottom: 2vw;
    &:hover{
      background: white;
      color: black;
      cursor: pointer;
    }
  }
  .navigation{
    display: flex;
    position: relative;
    z-index:21;
    top: 4vw;
    margin-left: 2vw;
    align-self: center;
    font-weight: bold;
    border-left:.3vw solid white;
    ul{

      list-style: none;
    }
    li{
      transition: 0.2s;
      color: white;
      padding: 1.5vw;
      font-size: 2vw;
      &:hover{
        cursor: pointer;
        background: white;
        color: black;
      }
    }
  }
  .particles{
    position: absolute;
    z-index: 20;
    width:90vw;
    height:75vw;
  }
  img{
    padding:0;
   position: absolute;
    left:57vw;
    top: 10vw;
    z-index: 21;
    height:35vw;
    width:35vw;
  }
</style>
