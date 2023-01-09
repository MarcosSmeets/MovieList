<template>
  <div class="container">
    <div class="container__div">
      <v-card color="cyan darken-1" class="containter__div__apresentacao d-flex flex-column justify-center" elevation="5">
        <v-card-text class="containter__div__apresentacao__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          porro non eius ipsa labore? Vitae possimus dolorum, sit dolores error
          ab eum, qui quod commodi quaerat saepe nulla sunt eaque?
        </v-card-text>
        <div class="containter__div__apresentacao__btn d-flex align-center justify-center">
          <v-btn @click="goToCadastro" color="cyan darken-4" rounded
            >Cadastrar-se</v-btn
          >
        </div>
      </v-card>
    </div>
    <div class="container__div">
      <v-card class="container__div__card" elevation="5">
        <v-img
          height="70px"
          width="70px"
          class="container__div__card__img"
          src="../../assets/loginLogo.png"
        ></v-img>
        <v-card-title class="container__div__card__title"
          >Welcome Back</v-card-title
        >
        <v-card-text class="container__div__card__body"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit.</v-card-text
        >
        <v-text-field v-model="email" append-icon="mdi-account" label="Email"></v-text-field>
        <v-text-field v-model="senha" append-icon="mdi-key" :type="show ? 'text' : 'password'" label="Senha"></v-text-field>
        <div class="container__div__card__btn">
          <v-btn @click="login" outlined>Login</v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      email: "",
      senha: "",
      show: false,
      password: "Password"
    }
  },
  methods: {
    goToCadastro() {
      this.$router.push("/cadastro");
    },
    async login() {
      const { data } = await axios.get('http://localhost:3000/usuarios',{
        params:{
          email: this.email,
          senha: this.senha,
        }
      });
      if(data.length > 0){
        this.$router.push('/filmes')
      }else{
        alert('Usuario ou senha incorreto!')
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap");
* {
  font-family: "Roboto", sans-serif;
}
.container {
  display: flex;
  width: 75%;
  margin-left: 10rem;
  margin-top: 8rem;
  &__div {
    display: flex;
    justify-content: center;
    &__card {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      background: #E1F5FE;
      &__img {
        align-self: center;
      }
      &__title {
        align-self: center;
      }
      &__btn {
        align-self: center;
      }
    }
    &__apresentacao {
      display: flex;
      align-content: center;
      &__btn {
        align-self: center;
      }
    }
  }
}
</style>
