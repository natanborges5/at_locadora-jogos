<template>
  <section class="background">
            <h1>Adicione o seu jogo a biblioteca</h1>
        <!-- //////////////////////////////Botao//////////////////////////////// -->
    <div>
      <form @submit.prevent="onSubmit">
        <div><h2>Title:</h2></div>
        <div><input type="text" v-model="jogo_add.name" placeholder="Add title"></div>
        <div><h2>Description:</h2></div>
        <div><input type="text" v-model="jogo_add.dadosjogo" placeholder="Add title"></div>
        <div><input type="submit" value="Submit"></div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'AdicionarJogo',
  data() {
    return {
      jogo_add :{
        name: "",
        dadosjogo: ""
      }
    };
  },
  methods: {
    ...mapActions(["addJogo"]),
    onSubmit() {
      this.addJogo(this.jogo_add);
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
  margin-top:10px;
  color:black;
  padding: 20px;
  
}
.background{
  margin-top: 117px;
  height: 100%;
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
.areajogos{
  display: flex;
  margin-left:5px;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 117px;
}
.botaofix{
  display: inline-flex;
  align-items: center;
}
.divider{
    width:2px;
    height:auto;
    display:inline-block;
}

.botaoFiltrar{
  margin-left: 8px;
}
.Cartas{
  display: flex;
  margin:5px;
  text-align:center;
  height:410px;
}

#info_card{
  align-content: center;
}




</style>