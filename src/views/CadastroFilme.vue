<template>
  <div class="container">
    <CadastroMoviesVue class="d-flex justify-center align-center container__cadastro" />
  </div>
</template>

<script>
import CadastroMoviesVue from '@/components/Filmes/CadastroMovies.vue';
export default {
components:{
    CadastroMoviesVue,
}
}
</script>

<style lang="scss" scoped>
.container{
  background: #1F1F1F;
  min-width: 100%;
  height: 100%;
}
</style>