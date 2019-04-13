<template>
    <div id="posts">
    <Navbar></Navbar>
      <div id="postsList"></div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
  name: 'Interiory',
  components:{
    Navbar,
  },
  mounted() {
    this.loadPosts();
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
  methods: {
    loadPosts() {
      const axios = require('axios');
      axios({
        url: 'https://api-euwest.graphcms.com/v1/cjtbifzq24mrq01dnnylqtp1q/master',
        method: 'post',
        data: {
            query: `
             query{
               interiorses {
                  name
                  date
                  image
                  description
                  author {
                    nickname
                  }
               }
           }`,
        },
      })
        .then((response) => {
          this.posts = response.data.data.interiorses;
          this.posts.forEach((item) => {
            console.log(item.date);
            const container = document.getElementById('postsList');
            const postEntry = document.createElement('post');
            postEntry.innerHTML = ` <div class="post">
              <div class="pName">${item.name}</div>
                <div class="pDescription">${item.description}</div>
                <div class="pAuthor">autor: <span>${item.author.nickname}</span></div><br/>
                <div class="pDate">data: <span>${item.date}</span></div>
                <img alt="xd" src=${item.image}/>
                <div class="btt">Pobierz</div>
                </div>`;
            container.innerHTML += postEntry.innerHTML;
          });
        });
    },
  },
};
</script>

<style lang="scss">
.post {
  display: flex;
  background-size: 200%;
  border:.112vw solid black;
  background: white;
  height: 35vw;
  flex-wrap: wrap;
  width: 85vw;
  border-radius: .5vw;
  align-items: center;
  position: relative;
  margin: 20vw 5vw 10vw 5vw;
  .pDate{
    font-size: 1.8vw;
    align-self: flex-end;
    position: absolute;
    top:110%;
    left:40%;
    span{
      font-weight: bold;
    }
  }
  .pAuthor{
    font-size: 1.8vw;
    align-self: flex-end;
    position: absolute;
    top:120%;
    left:40%;
    span{
      font-weight: bold;
    }
  }
  img {
    height: 35vw;
    width: 35vw;
    margin-top: 5vw;
    box-shadow: 0vw 0vw 4vw .3vw gray;
    left:8vw;
    position: relative;
    background: white;
    }

  .pDescription {
    position: relative;
    width: 45vw;
    font-size: 1.5vw;
    left: 4vw;
    margin-top: -3vw;
  }

  .pName {
    font-size: 2.2vw;
    font-weight: bold;
    position: relative;
    width: 80vw;
    margin-bottom: -6vw;
    margin-top: 5vw;
    left: 4vw;
  }

  .btt {
    position: relative;
    transition: 0.2s;
    z-index: 21;
    background: transparent;
    border-radius: 25vw;
    border: .1vw solid black;
    width: 18vw;
    height: 5vw;
    top:-10vw;
    left: 15vw;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1.5vw;
    color: black;
    &:hover {
      background: black;
      color: white;
      cursor: pointer;
    }
  }
}
  #posts{
    background-size:100%;
    height:290vw;
    width:98.71vw;
    position: absolute;
    top:0;
  }
</style>
