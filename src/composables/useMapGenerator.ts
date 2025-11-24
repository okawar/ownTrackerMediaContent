import { ref } from "vue";



export function useMapGenerator() {
    const heightMap = ref<number[][]>([])

    function generateMap(width: number, height: number) {
        
    }
    
    return {
        heightMap,
        generateMap
    }
}