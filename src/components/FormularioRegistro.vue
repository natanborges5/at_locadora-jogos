<template>
  <div class="background">
    <b-form id="FormCadastro" @submit="onSubmit" @reset="onReset" v-if="show">
      <h1>Criar uma conta</h1>
      <b-form-group
        id="input-group-1"
        label="Endereço de email:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Digite aqui seu email"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Senha:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.senha"
          type="password"
          required
          placeholder="Digite sua senha"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Nome:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.name"
          required
          placeholder="Digite seu nome"
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
      <b-row>
        <p class="jatemconta">Ja possui uma conta? clique <a href="/Login">Aqui</a></p>
      </b-row>
    </b-form>

  </div>
</template>

<script>
  export default {
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
        this.$router.push({name : "formLogin"})
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
.jatemconta{
  margin-left: 41%;
}
h1 {
  font-size:50px;
  margin-top:100px;
  color:black;
  font-family: "theboldfont";
  text-align:center;
}
.background{
  margin-top: 110px;
  height: 100vh;
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