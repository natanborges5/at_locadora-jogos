<template>
  <section class="background">
          <AdicionarJogo/>
      <h1 id="h1teste">Jogos Disponiveis</h1>
        <!-- //////////////////////////////Botao//////////////////////////////// -->
      <b-row class="botaoFiltrar">
        <div>
          <b-dropdown id="dropdown-buttons" text="Filtrar Jogos" class="m-2">
            <b-dropdown-item-button >RPG</b-dropdown-item-button>
            <b-dropdown-item-button >Ação</b-dropdown-item-button>
            <b-dropdown-item-button >FPS</b-dropdown-item-button>
            <b-dropdown-item-button>Corrida</b-dropdown-item-button>
            <b-dropdown-item-button>Terror</b-dropdown-item-button>
          </b-dropdown>
        </div>
      </b-row>
      <div class="areajogos">
                  <!-- //////////////////////Jogos////////////////////////// -->
          <div v-for ="jogo in allJogos" :key="jogo.id" class="Cartas">
        
          <b-card
            :style="jogo.dadosjogo.nota>89?'border:2px solid whitesmoke;'
            :jogo.dadosjogo.nota<80?' border:2px solid red;'
            :'border:2px solid black;'"

      
            :title="jogo.name"
            :id="jogo.id"
            :img-src="jogo.image.url"
            :img-alt="jogo.name"
            img-top
            tag="article"
            style="max-width: 13rem; border: 2px solid black;max-height: 28rem;"
            class="md-2"
          >
            <div class="botaofix">
              <b-button  @click="$bvModal.show(jogo.id)" id='botaojogos'>Detalhes</b-button>
              <b-button  @click="mostrarCarrinho" id='botaojogos'>Comprar</b-button>
            </div>
            <b-button class="botaodelete" @click='deleteJogo(jogo.id)'>deletar</b-button>

            <b-modal  :key="jogo.id" :id="jogo.id" :title='jogo.name' centered ok-only ok-title="Fechar" ok-variant="danger " auto-focus-button="ok">

            <div id='info_card'>        
              <b-card
                :img-src ="jogo.image.url"
                :img-alt="jogo.name"
                img-top
                tag="article"
                style="max-width: 21rem; margin-left: 55px; "
                class="md-2"
              >
                <b-card-text>
                  Sumario: {{jogo.dadosjogo.sumario}} <br>
                  Data de lançamento: {{jogo.dadosjogo.data}}<br>
                  Categoria: {{jogo.dadosjogo.categoria}}<br>
                  Metacritic: {{jogo.dadosjogo.nota}}<br>
                </b-card-text>
              </b-card>
              </div>
            </b-modal>
            
            
          </b-card>  
          
        </div>
      </div>
  </section>
</template>

<script>
import AdicionarJogo from '../components/AdicionarJogo'
import { mapGetters, mapActions } from "vuex";


export default {
  name: 'AreaJogos',
  components: {
    AdicionarJogo,
  },
  computed:{
    ...mapGetters(["allJogos"]),
  },
 
  methods: { 
    ...mapActions(["deleteJogo"]),

    mostrarCarrinho() {
      this.$router.push({name : "form"})
    },
  },

}
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

h4{
  color: whitesmoke;
}
.background{
  margin-top: 117px;
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
.areajogos{
  display: flex;
  margin-left:5px;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 117px;
}
.botaofix{
  display: inline-flex;
  justify-content: space-between;
}
.botaodelete{
  padding: 1px 5px;
  margin-top: 5px;
}
#botaojogos{
  border: 1px solid #202020;
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
.card-body{
  background-color: #202020;
}
button{
  border: 10px black;
}
#info_card{
  align-content: center;
}
p.card-text{
  color: whitesmoke;
}




</style>