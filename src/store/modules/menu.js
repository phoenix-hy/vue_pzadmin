import { defineStore } from 'pinia'
import { ref } from 'vue'
let useMenuStore = defineStore('menu', () => {
  let isCollapse = ref(false)
  let selectMenu = ref([])

  // 每次点击折叠按钮就会更新collapse的值
  const updateCollapse = () => {
    isCollapse.value = !isCollapse.value
  }
  // 
  const addMenu = (payload)=>{
    // 对数据进行去重
    if(selectMenu.value.findIndex(item=> item.path === payload.path) === -1){
      selectMenu.value.push(payload)
    }
  }
  const closeMenu = (payload)=>{
    // 找到点击数据的索引
    const index = selectMenu.value.findIndex(val =>val.name === payload.name)
    // 通过索引删除指定元素
    selectMenu.value.splice(index, 1)
  }


  return {
    isCollapse,
    selectMenu,
    updateCollapse,
    addMenu,
    closeMenu
  }
})

export default useMenuStore