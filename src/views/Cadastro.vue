<template>
  <div class="container">
    <Form  />
  </div>
</template>

<script>
import Form from "@/components/Cadastro/CadastroForm.vue";
export default {
  components: {
    Form,
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  min-width: 100%;
  background: #0A2647;
}
</style>
