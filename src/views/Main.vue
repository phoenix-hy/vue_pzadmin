<template>
  <div class="common-layout">
    <el-container>
      <Aside></Aside>
      <el-container>
        <el-header class="el-header">
          <Header></Header>
        </el-header>
        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Aside from '../components/aside.vue'
import Header from '../components/navHeader.vue'
const arr = [1, 2, 3, 4, 5]
</script>

<style lang="less" scoped>
.common-layout {
  height: 100%;

  .el-container {
    height: 100%;
  }
  .el-header{
    padding: 0px;
  }
}
</style>