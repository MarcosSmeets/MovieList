<template>
  <div class="container">
    <LoginCard />
  </div>
</template>

<script>
import LoginCard from "@/components/Login/LoginCard.vue";
export default {
  components: {
    LoginCard,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap");
* {
  font-family: "Roboto", sans-serif;
}
</style>
