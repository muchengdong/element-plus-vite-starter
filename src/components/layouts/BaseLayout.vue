<script lang="ts" setup></script>

<template>
  <div class="common-layout h-screen w-screen">
    <el-container>
      <el-header>123515</el-header>
      <el-container class="el-main-container">
        <el-aside width="220px" class="bg-white p-2">
          <BaseSide />
        </el-aside>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
.common-layout {
  background: linear-gradient(#ffffff, #f5f5f5 28%);
}
.el-header {
  height: 48px;
  @apply bg-white;
}
.el-main-container {
  height: calc(100vh - 48px);
}
</style>
