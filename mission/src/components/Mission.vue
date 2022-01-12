<template>
  <div>
  <input type="text" v-model="inputText" />
  <button type="button" v-on:click="rotateText">제출</button>
  <button type="button" data-test="clickCounter" v-on:click="inputTextCounterAlert">알림</button>
  <p data-test="inputText">{{ inputText }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      inputText: '',
      counter: 0,
    };
  },
  methods: {
    rotateText() {
      this.inputText = this.inputText.slice(1) + this.inputText.slice(0, 1);
    },
    inputTextCounterAlert() {
      this.counter += 1;
      alert(`${this.inputText} ${this.counter}`);
    },
  },
};

</script>
