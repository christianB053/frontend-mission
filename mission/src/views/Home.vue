<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Mission />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Mission from '@/components/Mission.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Mission,
  },
};
</script>
