<script lang="ts" setup></script>

<template>
  <div class="common-layout w-screen h-screen">
    <el-container>
      <el-header class="bg-white" style="height: 48px">123515</el-header>
      <el-container class="el-main-container">
        <el-aside width="200px" class="bg-white">Aside</el-aside>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
.common-layout {
  background: linear-gradient(#ffffff, #f5f5f5 28%);
}
.el-main-container{
  height: calc(100vh - 48px);
}
</style>
