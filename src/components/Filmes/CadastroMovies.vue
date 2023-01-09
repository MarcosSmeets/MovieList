<template>
  <div class="container">
    <div class="container__content">
      <v-card class="container__content__card">
        <v-card-title>Cadastro de Filmes</v-card-title>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="titulo"
              outlined
              label="Titulo"
              append-icon="mdi-filmstrip"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="tituloOriginal"
              outlined
              label="Titulo Original"
              append-icon="mdi-filmstrip"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="sinopse"
              outlined
              label="Sinopse"
              append-icon="mdi-clipboard-text"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="anoLancamento"
              outlined
              label="Ano de Lançamento"
              append-icon="mdi-calendar"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="duracao"
              outlined
              label="Duração"
              append-icon="mdi-av-timer"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="categoria"
              outlined
              label="Categoria"
              append-icon="mdi-list-box"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="rating"
              outlined
              label="Rating"
              append-icon="mdi-numeric"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="poster"
              outlined
              label="Poster url"
            ></v-text-field>
          </v-col>
        </v-row>
        <div class="container__content__btns d-flex justify-space-between">
          <v-btn @click="cadastrar" dark>
            Cadastrar
            <v-icon></v-icon>
          </v-btn>
          <v-btn @click="goToHome" outlined>
            <v-icon class="pr-2">mdi-home</v-icon>
            Voltar
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      titulo: "",
      tituloOriginal: "",
      sinopse: "",
      anoLancamento: "",
      duracao: "",
      categoria: "",
      rating: "",
      poster: "",
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/filmes");
    },
    async cadastrar() {
      await axios.post("http://localhost:3000/filmes", {
        titulo: this.titulo,
        tituloOriginal: this.tituloOriginal,
        sinopse: this.sinopse,
        anoLancamento: parseInt(this.anoLancamento),
        duracao: this.duracao,
        categoria: this.categoria,
        rating: parseFloat(this.rating),
        poster: this.poster,
      });
      this.$router.push('/filmes')
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 75%;
  &__content {
    &__card {
      padding: 1.5rem;
    }
  }
}
</style>
