<template>
    <div class="content">
        <div class="interiors">
          <div class="title" @load="loadPosts">Najnowsze interiory</div>
          <div class="interior">
            <div class="interiorTitle">{{post.name}} <div class="author">autor: {{post.author}}</div></div>
            <div class="interiorDescription">{{post.description}}</div>
            <img :src="post.img" alt="">
          </div>
          <div class="interior">
            <div class="interiorTitle">{{post2.name}} <div class="author">autor: {{post2.author}}</div></div>
            <div class="interiorDescription">{{post2.description}}</div>
            <img :src="post2.img" alt="">
          </div>
          <div class="interior">
            <div class="interiorTitle">{{post3.name}}<div class="author">autor: {{post3.author}}</div></div>
            <div class="interiorDescription">{{post3.description}}</div>
            <img :src="post3.img" alt="">
          </div>
          <div class="FAQ">
            <div class="title">FAQ - Najczęstsze pytania</div>
            <ul>
              <li>
                <span class="question">Czy interiory są darmowe</span><br/>
                <span class="answer">TAK</span>
              </li>
              <li>
                <span class="question">Czy interiory można wykorzystywać w pracach komercyjnych</span><br/>
                <span class="answer">TAK pod warunkiem, że zostanie dodane źródło w pracy</span>
              </li>
              <li>
                <span class="question">Czy jest możliwość dodania swojego interioru?</span><br/>
                <span class="answer">Oczywiście. Jest do tego specjalne miejsce. Wysyłając interior wyrażasz zgodę na jego darmowe wykorzystywanie.</span>
              </li>
            </ul>
          </div>
          <div class="send">
            <div class="title">Wyślij interior</div>
            <form method="POST" action="https://formspree.io/supreme24d@gmail.com">
             email <input type="email" name="email" placeholder="Twój email">
              interior <input type="text" name="interior" placeholder="Nazwa interioru"/>
              opis <input type="text" name="opis" placeholder="Opis interioru"/>
              link do zdjęcia<input type="text" name="zdjęcie" placeholder="Link do zdjęcia"/>
              link do interioru<input type="text" name="link" placeholder="Link do interioru"/>
              wiadomość<textarea name="wiadomosc" placeholder="Coś od siebie"></textarea>
              <button type="submit">Wyślij</button>
            </form>
          </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Content',
  data() {
    return {
      post: {
        name: '',
        description: '',
        author: '',
        img: '',
      },
      post2: {
        name: '',
        description: '',
        author: '',
        img: '',
      },
      post3: {
        name: '',
        description: '',
        author: '',
        img: '',
      },
    };
  },
  mounted(){
    this.loadPosts();
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
          image
          description
          author {
            nickname
          }
          }
          }`,
        },
      })
        .then((response) =>{
          const lenght = response.data.data.interiorses.length - 1;
          this.post = {
            name: response.data.data.interiorses[lenght].name,
            img: response.data.data.interiorses[lenght].image,
            description: response.data.data.interiorses[lenght].description,
            author: response.data.data.interiorses[0].author.nickname,
          };
          this.post2 = {
            name: response.data.data.interiorses[lenght - 1].name,
            img: response.data.data.interiorses[lenght - 1].image,
            description: response.data.data.interiorses[lenght - 1].description,
            author: response.data.data.interiorses[lenght - 1].author.nickname,
          };
          this.post3 = {
            name: response.data.data.interiorses[lenght - 2].name,
            img: response.data.data.interiorses[lenght - 2].image,
            description: response.data.data.interiorses[lenght - 2].description,
            author: response.data.data.interiorses[lenght - 2].author.nickname,
          };
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.content{
 height: 460vw;
  width: 98.7vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.title{
  font-size:6vw;
  border-bottom: .2vw solid black;
  padding-bottom: 2vw;
  margin-bottom:5vw;
  margin-top:15vw;
  display: flex;
}
.interiors {
  width: 100vw;
  height: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .interior {
    position: relative;
    margin-top: 20vw;
    display: flex;
    justify-content: flex-end;
    height: 50vw;
    width: 98vw;
    img{
      width:45vw;
      height: 45vw;
      margin-right:4vw;
      box-shadow:0vw 0vw 5vw .3vw gray ;
    }
  }
}
.interiorTitle{
position: absolute;
margin-right: auto;
  width:41vw;
  margin-top: 4vw;
  z-index: 10;
  text-align: center;
  font-size: 4vw;
  left:4.5vw;
  height: 5vw;
}
.interiorDescription{
  position: relative;
  margin-right:7vw;
  font-size: 1.6vw;
  width:35vw;
  text-align: center;
  align-self: flex-start;
  margin-top:15vw;
}
.author{
  font-size: 2vw;
  margin-top:1vw;
}
.question{
  position: relative;
  font-size: 2.5vw;
  margin-bottom: 5vw;
}
.answer{
 position: relative;
 top: 2vw;
  font-size: 1.5vw;
  width: 80vw;
 margin-top: 2vw;
}
.FAQ{
  ul{
    li{
      margin-top: 15vw;
    }
  }
}
.send{
height: 80vw;
margin-top:10vw;
  .title{
    margin-bottom:5vw;
  }
}
form{
  display: flex;
  flex-direction: column;
}
input[type="email"]{
  height: 4vw;
  width:60vw;
  margin-bottom:5vw;
  border:.1vw solid black;
  font-size:1.5vw;
  border-left: none;
  border-right: none;
  border-top:none;
}
input[type="text"]{
  height: 4vw;
  width:60vw;
  margin-bottom:5vw;
  border:.1vw solid black;
  font-size:1.5vw;
  border-left: none;
  border-right: none;
  border-top:none;
}
button{
width:20vw;
height: 5vw;
background: transparent;
border:.1vw solid black;
font-size:1.5vw;
  margin-bottom: 5vw;
font-weight: bold;
margin-top: 5vw;
  transition:0.2s;
border-radius: 25vw;
  &:hover{
    cursor: pointer;
    background: black;
    color: white;
  }
}
textarea{
height: 40vw;
  font-size:1.5vw;
border:.1vw solid black;
}
::-webkit-input-placeholder{
  font-size:1.5vw;
  padding: 1vw;
}
</style>
