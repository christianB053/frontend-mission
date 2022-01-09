<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <div id="two-way-binding">
  <input v-model="message" />
  <button v-on:click="changeMessage">제출</button>
  <button v-on:click="alertButton">알림</button>
  <p>{{ message }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: '',
      counter: 0,
    };
  },
  methods: {
    changeMessage() {
      this.message = this.message
        .split('')
        .splice(1)
        .join('');
    },
    alertMessage() {
      alert(this.message);
    },
    counterMessage() {
      alert(this.counter += 1);
    },
    alertButton() {
      this.alertMessage();
      this.counterMessage();
    },
  },
};

</script>
