<script>
export default {
  data() {
    return {
      //password: '',
      showPassword: false
    }
  },
  methods: {
    // generateStrongPassword() {
    //   const chars =
    //     '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~|}{[]:;?><,./-='
    //   const passwordLength = 16
    //   let password = ''

    //   for (let i = 0; i <= passwordLength; i++) {
    //     const randomNumber = Math.floor(Math.random() * chars.length)
    //     password += chars.substring(randomNumber, randomNumber + 1)
    //   }

    //   this.password = password
    // },

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

  <section class="form-group">
    <form action="" method="post">
      <p>Kindly provide your registered email and password</p>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" />
        <!-- <button id="changePwd" @click="changePasswordVisibility">
          {{ showPassword ? 'HIDE' : 'SHOW' }} PASSWORD
        </button> -->
      </div>
      <button type="submit">Sign in</button>
    </form>
  </section>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.logo-banner {
  display: flex;
}
.logo-banner img {
  display: block;
  width: 50px;
  height: 50px;
  padding: 0.62rem;
  border-radius: 50%;
  background-color: #5f641b;
}

.logo-banner h1 {
  font-size: 1.5rem;
  margin-left: 1rem;
  text-transform: uppercase;
}

.form-group {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 1rem;
  border: 1px solid #000;
  border-radius: 5px; */
}

form div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem;
}

form div label {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: left;
}

form div input {
  width: 300px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
}

form button {
  color: #fff;
  text-transform: uppercase;
  width: 300px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  margin-top: 0.5rem;
  background-color: #096868;
  cursor: pointer;
}

form button:hover {
  background-color: #0d9d9d;
  color: #fff;
  transition: all 0.5s ease-in-out;
}

form p {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: left;
}
</style>
