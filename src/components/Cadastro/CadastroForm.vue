<template>
  <div class="container">
    <div class="d-flex justify-center align-center">
      <v-card class="container__card d-flex flex-column">
        <div class="container__card__header">
          <v-card-title class="container__card__header__title"
            >Cadastro</v-card-title
          >
          <v-img
            height="70px"
            width="70px"
            class="container__card__header__img"
            src="../../assets/loginLogo.png"
          ></v-img>
        </div>
        <div class="container__card__body">
          <v-text-field
            label="Nome"
            outlined
            hide-details=""
            class="container__card__body__text"
            append-icon="mdi-account"
            color="purple darken-4"
            v-model="nome"
          ></v-text-field>
          <v-text-field
            label="Sobrenome"
            outlined
            hide-details=""
            class="container__card__body__text"
            append-icon="mdi-account"
            color="purple darken-4"
            v-model="sobrenome"
          ></v-text-field>
          <v-text-field
            label="Email"
            outlined
            hide-details=""
            class="container__card__body__text"
            append-icon="mdi-at"
            color="purple darken-4"
            v-model="email"
          ></v-text-field>
          <v-text-field
            label="Senha"
            outlined
            hide-details=""
            class="container__card__body__text"
            append-icon="mdi-key"
            color="purple darken-4"
            v-model="senha"
          ></v-text-field>
          <v-text-field
            label="Confirmar Senha"
            outlined
            hide-details=""
            class="container__card__body__text"
            append-icon="mdi-key-outline"
            color="purple darken-4"
            v-model="confirma"
          ></v-text-field>
        </div>
        <div class="container__card__btn">
          <v-btn @click="cadastrar" class="container__card__btn__vbtn"
            >Cadastrar</v-btn
          >
          <v-btn @click="goToMenu" class="container__card__btn__vbtn" outlined
            >Voltar</v-btn
          >
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      confirma: "",
    }
  },
  methods: {
    async cadastrar() {
      await axios.post("http://localhost:3000/usuarios",{
        nome: this.nome,
        sobrenome: this.sobrenome,
        email: this.email,
        senha: this.senha,
      });
      this.goToMenu();
    },
    goToMenu() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__card {
    width: 55%;
    background: #039be5;
    padding: 1rem;
    &__header {
      display: flex;
    }
    &__body {
      &__text {
        margin-top: 0.8rem;
      }
    }
    &__btn {
      display: flex;
      flex-direction: column;
      margin-top: 0.8rem;
      &__vbtn {
        margin-top: 0.8rem;
      }
    }
  }
}
</style>
