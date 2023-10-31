<script>
export default {
  data() {
    return {
      //password: '',
      showPassword: false,
      formData: '',
      email: '',
      validEmail: true
    }
  },
  methods: {
    changePasswordVisibility() {
      this.showPassword = !this.showPassword
    },

    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (emailRegex.test(email)) {
        this.validEmail = true
      } else {
        this.validEmail = false
      }
    },
    handleSubmit() {
      this.formData = ''
    }
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
    <form action="" method="post" @submit.prevent="handleSubmit">
      <p>Kindly provide your registered email and password</p>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" @input="isValidEmail" />
        <p>{{ validEmail ? '' : 'Please enter a valid email.' }}</p>
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

  <section class="footer-details">
    <div class="forgot-pwd">
      <p><a href="#">Forgot Password?</a></p>
      <a href="#">Sign in with Google</a>
    </div>
    <hr />

    <div>
      <button>Create an account</button>
    </div>

    <footer>
      <small>&copy; {{ new Date().getFullYear() }} Olive Blogging. All rights reserved</small>
    </footer>
  </section>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.logo-banner {
  display: flex;
  align-items: center;
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
  background-color: transparent;
  color: #fff;
  width: 300px;
  height: 50px;
  border: 1px solid #fff;
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

.footer-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.62rem;
}

.footer-details p {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: left;
}

.footer-details a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: left;
}

.forgot-pwd {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0.62rem;
}

.footer-details a:hover {
  color: #0d9d9d;
  transition: all 0.5s ease-in-out;
}

hr {
  width: 300px;
  margin: 0.75rem 0;
}

.footer-details button {
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
</style>
