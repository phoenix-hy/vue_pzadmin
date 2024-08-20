import { defineStore } from 'pinia'
import { ref } from 'vue'
let useHeaderStore = defineStore('header', () => {
  let isCollapse = ref(false)

  const updateCollapse = () => {
    isCollapse.value = !isCollapse.value
  }

  return {
    isCollapse,
    updateCollapse
  }
})

export default useHeaderStore