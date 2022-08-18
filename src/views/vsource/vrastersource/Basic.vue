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
        center: [-74.5, 40],
        zoom: 2,
      }"
    >
      <v-raster-source
        id="tiles"
        :tiles="[
          'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
        ]"
        :tileSize="256"
      />
      <v-raster-layer id="tiles" source="tiles" />
    </v-map>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
}
</style>
