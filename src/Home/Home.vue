<template>
   <div id='Home'>
      <Header/>
      <AreaJogos/>
    </div>

</template>

<script>
import Header from '../components/Header'
import AreaJogos from '../components/AreaJogos'


export default {
  name: 'Home',
  components: {
    Header,
    AreaJogos,
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Home{
  background-color: #202020;
}
</style>