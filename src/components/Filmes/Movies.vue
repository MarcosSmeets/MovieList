<template>
  <div class="container mt-15">
    <div class="container__cadastrar d-flex justify-center align-center">
      <v-card-title>Não Encontrou O Filme Que Procurava?</v-card-title>
      <v-btn @click="goToCadastro" dark>Cadastrar</v-btn>
    </div>
    <div class="container__search d-flex align-center">
      <v-text-field
        v-model="search"
        class="container__search__bar"
        prepend-inner-icon="mdi-magnify"
        label="Procurar por filme"
        solo
      ></v-text-field>
      <v-btn
        @click="searchMovie"
        class="container__search__btn ml-5 mb-7"
        rounded
        dark
        elevation="0"
        >Procurar</v-btn
      >
    </div>
    <div class="container__sort mb-5 d-flex align-center">
      <h3>Sort By: </h3>
      <v-chip class="ml-3" @click="sortByRating" dark color="blue-grey darken-4">Rating</v-chip>
      <v-chip class="ml-3" @click="sortByLancamento" dark color="blue-grey darken-4">Ano de lançamento</v-chip>
    </div>
    <v-simple-table class="container__table">
      <template>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Rating</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in movies" :key="index">
            <td><v-img max-width="15%" min-width="15%" :src="item.poster"></v-img></td>
            <td>{{ item.titulo }}</td>
            <td>{{ item.rating.toFixed(1) }}/10</td>
            <td>
              <v-btn @click="loadMovie($event, item)" elevation="0" dark
                >See more</v-btn
              >
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <Details v-if="modal === true">
      <div class="d-flex justify-end">
        <v-btn icon @click="modal = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <v-card class="pa-2 d-flex flex-column" flat>
        <div class="pl-4">
          <v-img
            :src="detail.poster"
            width="25%"
            v-model="detail.poster"
          ></v-img>
        </div>
        <div>
          <v-card-title v-model="detail.titulo">{{
            detail.titulo
          }}</v-card-title>
          <v-card-subtitle v-model="detail.original"
            >Titulo Original: {{ detail.original }}</v-card-subtitle
          >
          <v-btn outlined rounded disabled v-model="detail.categoria">{{
            detail.categoria
          }}</v-btn>
          <div id="info">
            <v-card-subtitle v-model="detail.ano">{{
              detail.ano
            }}</v-card-subtitle>
            <v-card-subtitle v-model="detail.duracao">{{
              detail.duracao
            }}</v-card-subtitle>
          </div>
          <v-card-text v-model="detail.sinopse">{{
            detail.sinopse
          }}</v-card-text>
        </div>
      </v-card>
    </Details>
  </div>
</template>

<script>
import axios from "axios";
import Details from "@/components/Filmes/MoviesDetails.vue";
export default {
  components: {
    Details,
  },
  data() {
    return {
      search: "",
      movies: [],
      modal: false,
      detail: {
        id: "",
        poster: "",
        titulo: "",
        sinopse: "",
        original: "",
        ano: "",
        duracao: "",
        rating: "",
        categoria: "",
      },
    };
  },
  methods: {
    async getMovies() {
      const { data } = await axios.get("http://localhost:3000/filmes");
      this.movies = data;
    },
    loadMovie(e, item) {
      e.preventDefault();
      this.detail.id = item.id;
      this.detail.poster = item.poster;
      this.detail.titulo = item.titulo;
      this.detail.original = item.tituloOriginal;
      this.detail.sinopse = item.sinopse;
      this.detail.ano = item.anoLancamento;
      this.detail.duracao = item.duracao;
      this.detail.rating = item.rating;
      this.detail.categoria = item.categoria;
      this.modal = true;
    },
    async searchMovie() {
      await fetch(
        `http://localhost:3000/filmes?titulo_like=${this.search.valueOf()}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.length == 0) {
            console.log("Filme não cadastrado");
          }
          this.movies = data;
        });
    },
    goToCadastro() {
      this.$router.push("/cadastroFilme");
    },
    async sortByRating(){
      const {data} = await axios.get('http://localhost:3000/filmes?_sort=rating&_order=desc')
      this.movies = data
    },
    async sortByLancamento(){
      const {data} = await axios.get('http://localhost:3000/filmes?_sort=anoLancamento&_order=cresc')
      this.movies = data
    }
  },
  mounted() {
    this.getMovies();
  },
};
</script>

<style lang="scss" scoped>
.container {
  &__table {
    display: flex;
    justify-content: space-around;
  }
  &__search {
    display: flex;
    justify-content: space-between;
    align-content: center;
    &__btn {
      margin-right: 1rem;
    }
    &__bar {
      margin-left: 1rem;
    }
  }
}
#info {
  display: flex;
}
</style>
