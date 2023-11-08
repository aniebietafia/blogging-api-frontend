<script>
export default {
  name: 'SignUpPage',
  emits: ['register-user'],
  data() {
    return {
      enteredFullname: '',
      enteredEmail: '',
      enteredPassword: '',
      confirmPassword: '',
      enteredGender: ''
    }
  },
  methods: {
    submitData() {
      const payload = {
        fullname: this.enteredFullname,
        email: this.enteredEmail,
        password: this.enteredPassword,
        confirmPassword: this.confirmPassword,
        gender: this.enteredGender
      }
      this.$emit('register-user', payload)
    }
  }
}
</script>

<template>
  <h1>Sign Up Page</h1>
  <section>
    <form action="" method="post" @submit.prevent="submitData">
      <div class="form-group">
        <label for="fullname">Full Name</label>
        <input type="text" v-model="enteredFullname" />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="enteredEmail" />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="enteredPassword" />
      </div>

      <div class="form-group">
        <label for="confirm-pwd">Confirm Password</label>
        <input type="password" v-model="confirmPassword" />
      </div>

      <div class="form-group">
        <label for="gender">Gender</label>
        <select name="gender" id="gender">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
    </form>
  </section>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
