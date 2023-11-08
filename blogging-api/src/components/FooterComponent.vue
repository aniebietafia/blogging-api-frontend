<script>
export default {
  name: 'FooterComponent',
  methods: {
    getMonth() {
      const month = new Date().getMonth()
      const monthNames = [
        'Jan.',
        'Feb.',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Aug.',
        'Sept.',
        'Oct.',
        'Nov.',
        'Dec.'
      ]
      return monthNames[month]
    }
  }
}
</script>

<template>
  <footer>
    <small
      >&copy; {{ `${getMonth()} ${new Date().getFullYear()}` }} Olive Blogging. All rights
      reserved</small
    >
  </footer>
</template>

<style scoped>
footer {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

footer p {
  margin: 0;
}
</style>
