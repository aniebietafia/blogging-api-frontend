<script>
export default {
  data() {
    return {
      goals: [],
      enteredValue: ''
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue)
      this.enteredValue = ''
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
  </div>
</template>
