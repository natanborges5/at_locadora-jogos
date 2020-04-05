<template>
  <section class="background">
            <h1>Jogos Disponiveis</h1>
        <!-- //////////////////////////////Botao//////////////////////////////// -->
      <b-row class="botaoFiltrar">
        <div>
          <b-dropdown id="dropdown-buttons" text="Filtrar Jogos" class="m-2">
            <b-dropdown-item-button >RPG</b-dropdown-item-button>
            <b-dropdown-item-button >Ação</b-dropdown-item-button>
            <b-dropdown-item-button >FPS</b-dropdown-item-button>
            <b-dropdown-item-button>Estrategia</b-dropdown-item-button>
          </b-dropdown>
        </div>
      </b-row>
    <div class="areajogos">
                <!-- //////////////////////Jogos////////////////////////// -->
        <div v-for ="jogo in allJogos" :key="jogo.id" class="Cartas">
      
        <b-card
          :title="jogo.name"
          :id="jogo.id"
          :img-src="jogo.image.url"
          :img-alt="jogo.name"
          img-top
          tag="article"
          style="max-width: 13rem; border: 2px solid black;max-height: 26rem"
          class="md-2"
        >
          <div class="botaofix">
            <b-button  @click="$bvModal.show(jogo.id)" id='bot_detalhes'>Detalhes</b-button>
            <b-button  @click="mostrarCarrinho" id='bot_detalhes'>Comprar</b-button>
          </div>

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
                Categoria: {{jogo.dadosjogo.categoria}}<br>
                Data de lançamento: {{jogo.dadosjogo.data}}<br>
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
import { mapGetters, mapActions } from "vuex";
import AddJogo from './AddJogo.vue'

export default {
  name: 'AreaJogos',
  props: { },
  components:{AddJogo},
  
  computed: mapGetters(["allJogos"]),
  created() {
    this.fetchJogos();
  },
  
  data: function() {
   return {
     modalShow: false,
     carrinho: [],
   }
 },
 
  methods: { 
    ...mapActions(["fetchJogos" , "deleteJogo"]),

    
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