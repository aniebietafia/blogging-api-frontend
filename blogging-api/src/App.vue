<script>
import LoginPage from './components/LoginPage.vue'
export default {
  components: {
    LoginPage
  }
}
</script>

<template>
  <div class="left">
    <h1>Welcome to Olive Blogging API</h1>
    <p>...bring your creative ideas to life.</p>
  </div>
  <div class="right">
    <LoginPage></LoginPage>
  </div>
</template>

<style scoped>
h1 {
  color: crimson;
}
.left {
  border-right: 1px solid #000;
}
</style>
