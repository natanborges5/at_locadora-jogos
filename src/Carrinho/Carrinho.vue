<template>
   <div id="Carrinho">
      <Header/>

      <FormularioCarrinho/>

    </div>

</template>

<script>
import Header from '../components/Header'
import FormularioCarrinho from '../components/FormularioCarrinho'
export default {
  name: 'Carrinho',
  components: {
    Header,
    FormularioCarrinho,
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Carrinho{
  background-color: #202020;
}
</style>