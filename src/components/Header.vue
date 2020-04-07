<template>
  <div>
    <div class="header">
      <b-navbar id="navbar" toggleable="lg" type="dark" variant="info">
        <b-navbar-brand id="Logo-titulo" href="/"><img src="../assets/logog.jpg" id="logo"> Biblioteca de Jogos</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="/cadastro">Cadastro</b-nav-item>
            <b-nav-item href="/Login">Login</b-nav-item>

        
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Header',
}
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("Logo-titulo").style.fontSize = "26px";
    document.getElementById("logo").style.width = "30px";
  } else {
    document.getElementById("navbar").style.padding = "15px 10px";
    document.getElementById("Logo-titulo").style.fontSize = "30px";
    document.getElementById("logo").style.width = "65px";
  }
}
</script>

<style scoped>
.header{
  display: flex;
  transition: 0.5s; /* Adds a transition effect when the padding is decreased */
  width: auto;
  height: auto;
}
#logo{
  width:65px;
  margin-left: 0;
  border-radius: 9%;
  align-items:left;
  transition: 0.5s;
}
.navbar{
  background-color: #202020!important;
  overflow: hidden;
  padding: 15px 10px; /* Large padding which will shrink on scroll (using JS) */
  transition: 0.5s; /* Adds a transition effect when the padding is decreased */
  position: fixed; /* Sticky/fixed navbar */
  width: 100%;
  height: auto;
  top: 0; /* At the top */
  z-index: 99;
}
ul.navbar-nav {
  display: flex;
  justify-content: space-around;
  width: 80%;
  align-items:center; 
  font-size: 21px
}
a{
  float: left;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
}
.navbar-dark .navbar-nav .nav-link{
  color: whitesmoke;
}
#nav-collapse{
  font-family: berserker;
  justify-content: space-around;
}
#Logo-titulo{
  font-family: Berserker;
  font-size: 30px;
  padding: 10px;
  transition: 0.5s;
}
</style>