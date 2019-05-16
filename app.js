// vue js creates a template based on our html code and renders the real DOM
// vue js instance takes our html code, creates a template, renders template and outputs final html code
// thats why can use string interpolation etc
// can access instance from outside but not recommended - set new Vue to a var and access like this.
new Vue({
  // connect to DOM
  el: '#app',
  // Data is not reactive - store data only to be used
  data: {
    title: 'Hello World!',
    link: 'https://www.google.com',
    finishedLink: '<a href="http://google.com">Google</a>',
    counter: 0,
    x: 0,
    y: 0,
    attachRed: false,
    show: true
  },
  // methods of vue js instance
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    sayHello: function() {
      // this will change the value of this.title and all html bound to this.title (will re-render)
      this.title = 'Hello';
      return this.title
    },
    increase: function(step, event) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    dummy: function(event) {
      // Stop propagation to prevent bubbling up
      event.stopPropagation();
    }
  },
  // dependent properties
  // eveything in computed can be used like in data. don't need to call function
  // caches result and not unnecessarily re-rendering/re-calculating
  // should be used because optimal and caches but has to be synchronous task
  computed: {
    output: function() {
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    },
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    }
  },
  // execute code upon data changes
  watch: {
    // prop has to match data prop to watch
    // has to be function and passes new value first
    // can be async or whenever a property has to be checked everytime dom gets updated
    // not returning anything - only purpose is to call this function when property has changed
    counter: function(value) {
      var vm = this;
      // has to store reference to this vue instance because of closure function below
      setTimeout(function() {
        vm.counter = 0;
      }, 2000);
    }
  },
  // Local components
  components: {
    'my-cmp': cmp
  }
})

var cmp = {}

var vm3 = new Vue({
  // instead of 'el', if used together, will overwrite all
  template: '<h1>HELLO</h1>'
})

// registered globally and can use by <hello></hello>
// reusable component
// has to be unique name and object is same
// component extends the vue instance, so should not declare data because may interfere and could reference the same data
Vue.component('hello', {
  template: '<h1>HELLO</h1>',
  data: function() {
    // unique data object returned for each component
    return {
      status: 'Critical'
    }
  },
})

//vm1.newData = 'hello' <--- this can be done but Vue does not know how to listen to this because not instantiated with Vue instance

// beforeCreate()
// initialize data and events
// created()
// compile template or el's template
// beforeMount()
// replace el with compiled template
// mounted to dom
// updated()
// re-render dom
// beforeUpdate()
// data changed
// beforeDestroy()
// destroyed
// destroyed()


// App.vue - don't render template but render App.vue
// render overwrites everything in specified el with template in .vue file
// import Vue from 'vue';
// import App from './App.vue';
// new Vue({
//   el:'#app',
//   render: h => h(App)
// })

/*
.vue files always follows this structure
<template>
  <h1>Hello world!</h1>
</template>
<script>
  // this object behaves like a vue instance
  export default {
    data: function() {
      return {
        status: 'Critical'
      }
    }
  }
</script>
<style>

</style>
*/
