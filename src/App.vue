<script setup lang="ts">
import MapCanvas from './components/MapCanvas.vue';
import ControlPanel from './components/ControlPanel.vue';

</script>

<template>
  <div class="main">
    <MapCanvas />
    <ControlPanel />
  </div>
    
</template>

<style scoped>
.main{
  display: grid;
  grid-template-columns: 3fr 1fr;
}
</style>
