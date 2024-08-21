<template>
  <div class="header-container">
    <div class="header-left flex-box">
      <el-icon class="icon" size="20" @click="handleCollapse">
        <template v-if="menuStore.isCollapse">
          <Fold />
        </template>
        <template v-else>
          <Expand />
        </template>
      </el-icon>
      <ul class="flex-box">
        <li 
          v-for="(item,index) in selectMenu" 
          :key="item.path"
          :class="{selected: route.path===item.path}"
          class="tab flex-box"
        >
          <el-icon size="12">
            <component :is="item.icon"></component>
          </el-icon>
          <RouterLink class="text flex-box" :to="{path: item.path}">
            {{ item.name }}
          </RouterLink>
          
          <el-icon size="12" class="close" @click="closeTab(item,index)"><Close /></el-icon>
        </li>
      </ul>
    </div>
    <div class="header-right">
      <el-dropdown>
        <div class="el-dropdown-link flex-box">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          <p class="user-name">admin</p>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import useMenuStore from '../store/modules/menu';
import {useRoute, useRouter} from 'vue-router'
// 获取小仓库对象
let menuStore = useMenuStore()
// 当前的路由对象
const route = useRoute()
const router = useRouter()
let selectMenu = menuStore.selectMenu
// 折叠按钮回调
const handleCollapse = () => {
  menuStore.updateCollapse()
}

// 点击关闭tag
const closeTab = (item,index)=>{
  menuStore.closeMenu(item)
  // 删除非当前页的tag
  if(route.path !== item.path){
    return
  }
  // 如果删除最后一项
  if(index===selectMenu.length){
    // 如果tag只有一个元素
    if(!selectMenu.length){
      router.push('/')
    }else{  // 如果有多个
      router.push({path:selectMenu[index-1].path})
    }
  }else{ // 如果删除的是中间位置的tag
    router.push({
      path: selectMenu[index].path
    })
  }
}
</script>

<style>
.flex-box {
  display: flex;
  align-items: center;
  height: 100%;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: #fff;
  padding-right: 25px;

  .header-left {
    height: 100%;

    .icon {
      width: 45px;
      height: 100%;
    }

    .icon:hover {
      background-color: #f5f5f5;
      cursor: pointer;
    }
    .tab{
      padding: 0 10px;
      height: 100%;
      .text{
        margin: 0 5px;
      }
      .close{
        visibility: hidden;
      }
      &.selected{
        a{
          color:rgb(24, 92, 180);
        }
        i{
          color: rgb(24, 92, 180);
        }
        background-color: #f5f5f5;
      }
    }
    .tab:hover{
      background-color: #f5f5f5;
      .close{
        visibility: inherit;
        cursor: pointer;
        color: #000;
      }
    }
  }

  .header-right {
    .user-name {
      margin-left: 10px;
    }
  }
  a{
    height: 100%;
    color: #333;
    font-size: 15px;
  }
}
</style>