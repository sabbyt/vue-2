new Vue({
  el: '#exercise',
  data: {
    name: 'Sabrina',
    age: 26,
    img: 'https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png'
  },
  methods: {
    randomFloat: function() {
      return Math.random()
    }
  }
})
