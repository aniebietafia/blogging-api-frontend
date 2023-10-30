<script>
export default {
  data() {
    return {
      password: '',
      showPassword: false
    }
  },
  methods: {
    generateStrongPassword() {
      const chars =
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~|}{[]:;?><,./-='
      const passwordLength = 16
      let password = ''

      for (let i = 0; i <= passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
      }

      this.password = password
    },

    changePasswordVisibility() {
      this.showPassword = !this.showPassword
    }
  }
}
</script>

<template>
  <header>
    <div class="logo-banner">
      <img src="../assets/logo.svg" alt="logo" />
      <h1>Olive Blogging</h1>
    </div>
  </header>

  <form action="" method="post">
    <p>Kindly provide your registered email and password</p>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" />
      <button id="changePwd" @click="changePasswordVisibility">
        {{ showPassword ? 'HIDE' : 'SHOW' }} PASSWORD
      </button>
    </div>
    <button type="submit">Sign in</button>
  </form>
</template>

<style scoped></style>
