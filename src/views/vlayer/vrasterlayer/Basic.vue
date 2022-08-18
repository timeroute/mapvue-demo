<script>
import { defineComponent, ref, readonly } from "vue";
import { accessToken } from "../../../utils/mapUtil";

export default defineComponent({
  setup() {
    const tiles = readonly([
      "https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
      "https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",
    ]);
    const index = ref(0);
    return {
      accessToken: process.env.VUE_APP_ACCESS_TOKEN,
      tiles,
      index,
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
      <v-raster-source id="tiles" :tiles="[tiles[index]]" :tileSize="256" />
      <v-raster-layer id="tiles" source="tiles" />
    </v-map>
    <div class="control">
      <button @click="index = 0">toner</button>
      <button @click="index = 1">watercolor</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
}
.control {
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  display: flex;
  gap: 8px;
}
</style>
