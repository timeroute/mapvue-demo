<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const handleLoaded = () => {
      alert("map loaded");
    };
    return {
      accessToken: process.env.VUE_APP_ACCESS_TOKEN,
      handleLoaded,
    };
  },
});
</script>

<template>
  <div class="container">
    <v-map
      :accessToken="accessToken"
      :options="{
        center: [120, 30],
        zoom: 4,
      }"
      @loaded="handleLoaded"
    />
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
}
</style>
