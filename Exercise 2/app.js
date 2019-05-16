new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    alertButton: function() {
      alert('Hi!')
    },
    saveInput: function(event) {
      this.value = event.target.value;
    },
  }
});
