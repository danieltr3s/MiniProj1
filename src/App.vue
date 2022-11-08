<template>
    <!-- Nav bar -->
    <div id="navbar">
        <img id="avatar" src="./assets/profile.jpg" alt="Avatar" />
        <ul>
            <li><a href="#about" id="about">Quem sou eu</a></li>
            <li><a href="#skills" id="skills">O que faço</a></li>
            <li><a href="#hobbies" id="hobbies">Hobbies</a></li>
        </ul>
    </div>
    <router-view />
    <!-- Footer -->
    <div id="footer">
        <p>Aluno 80178 - Daniel Gonçalves © {{currentYear}}</p>
        <div id="social">
            <a href="https://www.linkedin.com/in/daniel-gon%C3%A7alves-3b5b5884/" title="Linkedin" target="_blank" rel="noopener noreferrer"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
            <a href="https://www.instagram.com/danieltr3s/" title="Instagram" target="_blank" rel="noopener noreferrer"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            <a href="https://www.facebook.com/daniel.tr3s" title="Facebook" target="_blank" rel="noopener noreferrer"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
        </div>
    </div>
</template>

<script lang="js">

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
}
</script>

<style>

:root{
    --bgcolor: #112c38;
    --navbartext: #fff;
    --navbarentrybg: #008178;
    --navbarborder: rgb(196, 196, 196);
    --text: rgb(196, 196, 196);
}

html,
body {
    height: 100vh;
    margin: 0;
}

body{
    background:var(--bgcolor);
	background-image: linear-gradient(90deg, transparent, var(--bgcolor) 55%), url(./assets/cb2.jpg);
    background-repeat: no-repeat;
    background-size: contain auto;
}

#app {
  font-family: "brandon grotesque", brandon, helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
  height: 100vh;
}

#navbar{
    height: 15vh;
    border-bottom: 0.2rem solid var(--navbarborder);
    display: block;
}

#avatar{
    border-radius: 50%;
    border: 0.2rem solid var(--navbarborder);
    width: 10vw;
    position: absolute;
    top: 4vh;
    left: 10vw;
}

ul{
  margin:0;
  padding:0;
  padding-right: 5vw;
  padding-top: 6vh;
  display:flex;
  justify-content: flex-end;
}

ul li{
  list-style:none;
  margin:0 20px;
  transition:0.5s;
}

ul li a{
  display: block;
  position:relative;
  text-decoration:none;
  padding:5px;
  font-size:18px;
  font-family: sans-serif;
  color: var(--navbartext);
  text-transform:uppercase;
  transition:0.5s;
  opacity: 0.5;
}

#about:target{
    opacity: 1;
}

#skills:target{
    opacity: 1;
}

#hobbies:target{
    opacity: 1;
}

ul:hover li a{
  transform:scale(1.5);
  opacity:0.2;
  filter:blur(5px);
}

ul li a:hover{
  transform:scale(2);
  opacity:1;
  filter:blur(0);
  text-decoration:none;
  color: var(--navbartext);
}

ul li a:before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:var(--navbarentrybg);
  transition:0.5s;
  transform-origin:right;
  transform:scaleX(0);
  z-index:-1;
}

ul li a:hover:before{
  transition:transform 0.5s;
  transform-origin:left;
  transform:scaleX(1);
}

#footer{
    position: absolute;
    bottom: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    height: 8vh;
}

#footer p{
    text-shadow: 0 0 0.5rem var(--bgcolor);
    padding-left: 5vw;
}

#social{
    align-self: center;
    padding-right: 5vw;
}

#social a{
    padding-left: 1rem;
    text-decoration: none;
    color: inherit;
}

</style>
