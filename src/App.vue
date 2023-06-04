<template>
  <!-- git push -u origin main -->
  <div
    class="container"
    style="display: flex; flex-direction: column; font-size: 24px"
  >
    <el-menu
      :default-active="activeIndex"
      class=""
      id="menu"
      mode="horizontal"
      :ellipsis="false"
      :collapse-transition="true"
    >
      <el-menu-item index="0">
        <router-link to="/">Tech Talk</router-link>
      </el-menu-item>
      <div class="flex-grow"></div>
      <el-menu-item index="1">
        <router-link to="/">Home</router-link>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>Article</template>
        <el-menu-item index="2-1">
          <router-link to="/technology">Technologies</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/gamming">Gamming</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">
          <router-link to="/fashion_Designing">Fashion & Design</router-link>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">
        <router-link to="/about">About Us</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/contactUs">Contact Us</router-link>
      </el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script></script>

<style lang="less" scoped>
.flex-grow {
  flex-grow: 1;
}

a {
  text-decoration: none;
  // color: white !important;
}
// #menu{
//   background-color: rgb(99, 164, 174);
// }

el-menu-item {
  font-weight: bolder;

  // position: fixed;
}

.el-menu--horizontal {
  display: flex;
  flex-wrap: nowrap;
  border-bottom: solid 1px var(--el-menu-border-color);
  border-right: none;
  // position: fixed;

  z-index: 9999 !important;
  box-shadow: 0 1px 15px -1px rgba(0, 0, 0, 0.25);
  // background-color: #282e3a;

  width: 100%;
  // justify-content: center;

  // left: 0;
}

// .fullscreen {
//       width: 100vw;
//       height: auto;
//       background-color: #f2f2f2;

//       /* align-items: center; */
//       /* justify-content: center; */
//       /* text-align: center; */

//     }
</style>
