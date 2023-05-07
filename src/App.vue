<template>
 
 <!-- git push -u origin main -->


  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    id="menu"
    mode="horizontal"
    :ellipsis="false"
    :collapse-transition="true"
    
  >
    <el-menu-item index="0">
      <router-link to="/">Tech Talk</router-link>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">
      <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>Article</template>
      <el-menu-item index="2-1">
        <router-link to="/">Technologies</router-link>
      </el-menu-item>
      <el-menu-item index="2-2">
        <router-link to="/">Gamming</router-link>
      </el-menu-item>
      <el-menu-item index="2-3">
        <router-link to="/">Fashion & Design</router-link>
      </el-menu-item>
            
    </el-sub-menu>
    <el-menu-item index="3">
      <router-link to="/about">About Us</router-link>
    </el-menu-item>
      <el-menu-item index="4">
      <router-link to="/contactUs">Contact Us</router-link>
    </el-menu-item>
  </el-menu> 
  <router-view/>
</template>


<script>



</script>


<style lang="less" scoped>
.flex-grow {
  flex-grow: 1;
}

// #menu{
//   background-color: aqua;
// }

</style>


