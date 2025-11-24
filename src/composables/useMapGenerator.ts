import { createNoise2D } from "simplex-noise";
import { ref } from "vue";



export function useMapGenerator() {
    const heightMap = ref<number[][]>([])

    function generateMap(width: number, height: number) {
        const noise2D = createNoise2D()

        const data: number[][] = []
        const scale = 50

        for (let x = 0; x < width; x++) {
            const row: number[] = []
            for (let y = 0; y < height; y++) {
                const value = noise2D(x / scale, y / scale)
                row.push(value)
            }
            data.push(row)
        }
        heightMap.value = data
    }
    
    return {
        heightMap,
        generateMap
    }
}