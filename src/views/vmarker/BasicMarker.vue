<script>
import { defineComponent, watch, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      center: [120, 30],
      draggable: false,
      visible: true,
      scale: 1,
      text: "Hi",
    });

    watch(
      () => state.center,
      () => {
        console.log(state.center);
      }
    );

    const toggleDraggable = () => {
      state.draggable = !state.draggable;
    };

    const handleClick = () => {
      state.text += ", MapVue";
      state.visible = true;
    };

    const handleMouseEnter = () => {
      state.visible = true;
    };

    const handleMouseMove = () => {
      // console.log("mouse move");
    };

    const handleMouseLeave = () => {
      state.visible = false;
    };

    return {
      accessToken: process.env.VUE_APP_ACCESS_TOKEN,
      state,
      toggleDraggable,
      handleClick,
      handleMouseEnter,
      handleMouseMove,
      handleMouseLeave,
    };
  },
});
</script>

<template>
  <div class="container">
    <v-map
      :accessToken="accessToken"
      :options="{
        center: state.center,
        zoom: 4,
      }"
    >
      <v-marker
        v-model:center="state.center"
        :options="{
          draggable: state.draggable,
          scale: state.scale,
        }"
        @click="handleClick"
        @mouseenter="handleMouseEnter"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
      />
      <v-popup
        v-model:visible="state.visible"
        :center="state.center"
        :options="{
          anchor: 'bottom',
          offset: [0, -36],
          // closeOnClick: false,
          closeOnMove: false,
        }"
      >
        {{ state.text }}
      </v-popup>
    </v-map>
    <div class="control">
      <label>toggle draggable</label>
      <button @click="toggleDraggable">toggle draggable</button>
      <label>set scale(1-5)</label>
      <input type="range" v-model="state.scale" :min="1" :max="5" />
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
  flex-direction: column;
  gap: 8px;
  background-color: white;
  padding: 8px;
}
</style>
