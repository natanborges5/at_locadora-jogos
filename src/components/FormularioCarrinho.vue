<template>
  <div class="background">
      <b-form id="FormLogin" @submit="onSubmit" @reset="onReset" v-if="show">
        <h1>Carrinho</h1>
        <b-form-group
          id="input-group-1"
          label="Nome completo:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.nome"
            type="text"
            required
            placeholder="Digite aqui seu nome completo"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Endereço:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.endereço"
            type="text"
            required
            placeholder="Digite seu endereço"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Cidade:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="form.cidade"
            type="text"
            required
            placeholder="Digite sua cidade"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-4"
          label="Numero do cartão:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="form.cartao"
            type="number"
            required
            placeholder="Digite o numero do cartão"
          ></b-form-input>

        </b-form-group>
        <b-form-group
          id="input-group-5"
          label="Data de vencimento do cartão:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="form.cartaodata"
            type="date"
            required
            placeholder=""
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Codigo de segurança do cartão:"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model="form.cvv"
            type="number"
            required
            placeholder="CVV"
          ></b-form-input>
        </b-form-group>

        










      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Lembrar dos meus dados na proxima compra</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary" v-on:click="myFunction">Comprar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: 'Carrinho',
    data() {
      return {
        form: {
          email: '',
          name: '',
          senha: '',
          checked: []
        },
        show: true
      }
      
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.senha = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>
h1 {
  font-size:50px;
  margin-top:100px;
  color:black;
  font-family: "theboldfont";
  text-align:center;
}
.background{
  margin-top: 110px;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	-webkit-background-size: cover;
	-moz-background-size: cover;
  background: url("../assets/godofwar.jpg");
	-o-background-size: cover;
	background-size: cover;
	background-position-y: 0;
	opacity: 1;
  background-attachment: fixed;
}
#FormCadastro{
  color: white;
  text-align: center;
}
#FormLogin{
    color: white;
  text-align: center;
}

#form{
    border: 1px white;
    width:50%;
    font-size:20px;
    margin:0 auto;
    max-width: 500px;
    text-align:center;
    color:black;
   font-family: "Beckman-free";
   font-size:1.1EM;
}
#b_login{
  font-size: 20px;
  width:200px;
  background-color: green;
}
#b_recuperar{
  font-size: 20px;
  width:200px;
}
#botões{
  max-width:500px;
  margin:0 auto;
}
input{
  width: 35%;
  margin-left:33%;
}
</style>