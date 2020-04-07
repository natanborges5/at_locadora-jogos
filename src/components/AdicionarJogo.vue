<template>
  <section class="background">
  <div>
      <h1>Você pode adicionar o seu proprio jogo na biblioteca de jogos!!<a v-on:click='mostrarArq'><h2 class='textoAdd'> Clique aqui para adicionar o seu jogo </h2> </a></h1>

    <b-form @submit.prevent="onSubmit" v-if="mostrarJogos"  id="form">
      <div class="formatarinput">
        <label for="name">Nome do jogo: </label>
          
        <input type="text" id="name" name="name" v-model="addGame.name" required />
      </div>
      <div class="formatarinput2">
        <label for="dadosjogos">Sumario do jogo: </label>
          
        <input type="text" id="dadosjogos" name="dadosjogos" v-model="addGame.dadosjogo.sumario" required />
      </div>
      <div class="formatarinput3">
        <label for="categoria">Categoria do jogo: </label>
    
        <input type="text" min="0" max="100" id="categoria" name="categoria" v-model="addGame.dadosjogo.categoria" required/>
      </div>
      <div class="formatarinput4">
        <label for="data">Data de lançamento: </label>
        
        <input type="number" min="0"  id="data" name="data" v-model="addGame.dadosjogo.data" required/>
      </div>
      <div class="formatarinput5">
        <label for="nota">Nota: </label>
        
        <input type="number" min="0"  id="nota" name="nota" v-model="addGame.dadosjogo.nota" required/>
      </div>
      <div class="formatarinput6">
        <label for="img_url">Imagem do jogo: </label>
        
        <input type="url"  id="img_url" name="img_url" v-model="addGame.image.url" required/>
      </div>
        

        <button type='submit' id="botaoAdd">Adicionar </button>

    </b-form>

  </div>
  </section>
</template>

<script>
import {mapActions } from "vuex";

export default {
  name: 'AdicionarJogo',
  data(){
    return{
      mostrarJogos:false,
      addGame:{
        name:"",
        dadosjogo:{
          sumario:"",
          data:"",
          Categoria:"",
        },
        image:{
         url:"",
        }

      }
    }
  },
  methods: {
    ...mapActions(["addJogos"]),
    onSubmit() {
      this.addJogos(this.addGame);
    },
    mostrarArq() {
      this.mostrarJogos = this.mostrarJogos ? false : true;
    }
  }
};
</script>
// <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family:"GODOFWAR";
  src: url("../assets/GODOFWAR.TTF");
}
@font-face {
  font-family:"Berserker";
  src: url("../assets/Berserker-Regular.woff");
}
h1 {
  font-family: "Berserker";
  font-size:50px;
  color:black;
  padding: 20px;
  
}
.textoAdd{
  font-weight: bold;
  cursor: pointer;
}
.background{
  height: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
	-webkit-background-size: cover;
	-moz-background-size: cover;
  background: url("../assets/godofwar.jpg");
	-o-background-size: cover;
	background-size: cover;
	background-position-y: 0;
	opacity: 1;
  background-attachment: fixed;
}

#botaoAdd{
  padding: 5px 10px;
  font-size: 19px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #6c757d;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}
#botaoAdd:active {
  background-color: #4b4e50;
  box-shadow: 0 3px #666;
  transform: translateY(4px);
}
.botaofix{
  display: inline-flex;
  align-items: center;
}
input{
  border-radius: 8px;
  margin-left: 5px;
}
.formatarinput{
  margin-left: 46px;
}
.formatarinput2{
  margin-left: 28px;
}
.formatarinput3{
  margin-left: 16px;
}
.formatarinput4{
  margin-right: 0px;
}
.formatarinput5{
  margin-left: 128px;
}
.formatarinput6{
  margin-left: 30px;
}
label{
  font-size: 18px;
  font-weight: bold;
}




</style>