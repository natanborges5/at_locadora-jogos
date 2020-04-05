<template>
   <div id="Cadastro">
      <Header/>

      <FormularioRegistro/>

    </div>

</template>

<script>
import Header from '../components/Header'
import FormularioRegistro from '../components/FormularioRegistro'
export default {
  name: 'Cadastro',
  components: {
    Header,
    FormularioRegistro,
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Cadastro{
  background-color: #202020;
}
</style>