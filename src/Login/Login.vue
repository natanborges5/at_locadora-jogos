<template>
   <div id="Login">
      <Header/>

      <FormularioLogin/>

    </div>

</template>

<script>
import Header from '../components/Header'
import FormularioLogin from '../components/FormularioLogin'
export default {
  name: 'Login',
  components: {
    Header,
    FormularioLogin,
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Login{
  background-color: #202020;
}
</style>