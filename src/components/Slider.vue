<template>
  <div class="slider">
    <h2>{{ value }}%</h2>
    <input type="range" v-model="value" />
    <ul>
      <li><button @click="handleClick(25)">25%</button></li>
      <li><button @click="handleClick(50)">50%</button></li>
      <li><button @click="handleClick(75)">75%</button></li>
      <li><button @click="handleClick(100)">100%</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    handleClick(data) {
        this.value = data
    },
  },
};
</script>

<style scoped>
.slider {
  margin: 50px auto;
  padding: 15px;
}
input[type="range"] {
  -webkit-appearance: none;
  width: 300px;
  border-radius: 20px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  height: 30px;
  border-radius: 20px;
  background-image: linear-gradient(
    to right,
    #fcc5e4 0%,
    #fda34b 15%,
    #ff7882 35%,
    #c8699e 52%,
    #7046aa 71%,
    #0c1db8 87%,
    #020f75 100%
  );
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 25px;
  width: 25px;
  margin-top: 2.5px;
  background: #ffffff;
  border-radius: 50%;
  border: solid 0.125em rgba(205, 224, 230, 0.5);
}

ul {
  margin-top: 20px;
  display: flex;
}

ul li {
  margin-right: 10px;
}

ul li button {
  width: 70px;
  height: 25px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: #ffffff;
  background-color: #4e73df;
}
</style>