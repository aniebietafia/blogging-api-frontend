<script>
export default {
  data() {
    return {
      goals: [],
      enteredValue: '',
      password: ''
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue)
      this.enteredValue = ''
    },

    genrateStrongPassword() {
      const chars =
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]:;?><,./-='
      const passwordLength = 16
      let password = ''

      for (let i = 0; i <= passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
      }

      this.password = password
    },

    changePasswordVisibility() {
      const pwd = document.getElementById('pwd')
      const confirm = document.getElementById('confirm')
      const button = document.getElementById('changePwd')

      if (pwd.type === 'password' && confirm.type === 'password') {
        pwd.type = 'text'
        confirm.type = 'text'
        button.textContent = 'HIDE PASSWORD'
      } else {
        pwd.type = 'password'
        confirm.type = 'password'
        button.textContent = 'SHOW PASSWORD'
      }
    }
  }
}
</script>

<template>
  <div class="left">
    <h1>Welcome to Olive Blogging API</h1>
    <p>...bring your creative ideas to life.</p>
  </div>
  <div class="right">
    <div>
      <label for="goal">Goal</label>
      <input type="text" id="goal" v-model="enteredValue" />
      <button v-on:click="addGoal">Add Goal</button>
    </div>
    <div>
      <ul>
        <li v-for="goal in goals" v-bind:key="goal">{{ goal }}</li>
      </ul>
    </div>

    <div>
      <label for="pwd">Password</label>
      <input type="password" id="pwd" v-model="password" />
      <button id="changePwd" v-on:click="changePasswordVisibility">SHOW PASSWORD</button>

      <label for="confirm">Confirm Password</label>
      <input type="password" id="confirm" v-model="password" />
      <button v-on:click="genrateStrongPassword">Generate Password</button>
    </div>
  </div>
</template>
