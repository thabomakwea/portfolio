new Vue({
    el: "#app",
    data() {
      return {
        name: 10
      }
    },
    computed: {
      someComputed() {
        return this.name * 10;
      }
    }
  });