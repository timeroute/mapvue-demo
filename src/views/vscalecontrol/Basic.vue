<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      accessToken: process.env.VUE_APP_ACCESS_TOKEN,
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
    >
      <v-scale-control position="bottom-right" />
    </v-map>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
}
</style>
