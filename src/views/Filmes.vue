<template>
  <div class="container">
    <div class="container__movies">
        <Movies />
    </div>
  </div>
</template>

<script>
import Movies from '@/components/Filmes/Movies.vue'
export default {
components:{
    Movies,
}
}
</script>

<style lang="scss" scoped>
.container{
  background: #1F1F1F;
  min-width: 100%;
  height: 100%;
  color: #fff;
}
</style>