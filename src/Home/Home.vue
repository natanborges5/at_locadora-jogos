<template>
   <div id='Home'>
      <Header/>
      <AreaJogos/>
      <AdicionarJogo/>
    </div>

</template>

<script>
import Header from '../components/Header'
import AreaJogos from '../components/AreaJogos'
import AdicionarJogo from '../components/AdicionarJogo'


export default {
  name: 'Home',
  components: {
    Header,
    AreaJogos,
    AdicionarJogo
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Home{
  background-color: #202020;
}
</style>