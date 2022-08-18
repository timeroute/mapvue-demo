<script>
import { defineComponent } from "vue";
import { accessToken } from "../../utils/mapUtil";

export default defineComponent({
  setup() {
    return {
      accessToken,
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
