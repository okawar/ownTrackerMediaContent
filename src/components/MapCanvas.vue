<script setup lang="ts">
import { ref, watch } from 'vue';
import { onMounted } from 'vue';
import { useMapGenerator } from '../composables/useMapGenerator';

const { heightMap, generateMap } = useMapGenerator();
const canvasEl = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
    generateMap(512, 512)
})

watch(heightMap, (mapData) => {

    const canvas = canvasEl.value;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (!mapData || !mapData.length || mapData[0] === undefined) return;

    const width = mapData.length;
    const height = mapData[0].length;

    canvas.width = width;
    canvas.height = height;

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const row = mapData[x];
            if (!row) continue;

            const cellValue = row[y];
            if (cellValue === undefined) continue;

            const value = (cellValue + 1) / 2 * 255; 

            const color = Math.floor(value);
            ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
            ctx.fillRect(x, y, 1, 1);
        }
    }
})
</script>

<template>

    <canvas id="mapCanvas" ref="canvasEl"></canvas>

</template>