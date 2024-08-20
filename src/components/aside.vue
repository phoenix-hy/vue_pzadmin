<template>
  <el-menu :style="{ width: '230px' }" active-text-color="#ffd04b" background-color="#545c64" class="aside-container"
    default-active="2" :collapse="headerStore.isCollapse" text-color="#fff" @open="handleOpen" @close="handleClose">
    <p class="logo-lg">DIDI陪诊</p>
    <treeMenu index="1" :menuData="menuData"></treeMenu>

  </el-menu>
</template>

<script setup>
import treeMenu from './treeMenu.vue';
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import useHeaderStore from '../store/modules/header';
// 获取小仓库对象
let headerStore = useHeaderStore()

const router = useRouter()
const menuData = reactive(router.options.routes[0].children)


const handleOpen = () => {

}
const handleClose = () => {

}
</script>

<style lang='less' scoped>
.aside-container {
  height: 100%;

  .logo-lg {
    font-size: 20px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: #fff;
  }
}

.aside-container:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
