<template>
  <div class="main">
    <app-header></app-header>
    <app-list></app-list>
  </div>
</template>

<script>
import appHeader from "../components/Header.vue";
import appList from "../components/List.vue";
export default {
  components: {
    appHeader,
    appList,
  },
};
</script>

<style scoped>
.main {
  padding: 10px;
}
</style>