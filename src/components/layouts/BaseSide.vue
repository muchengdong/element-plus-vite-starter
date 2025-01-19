<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue"

// const isCollapse = ref(true)
function handleOpen(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
function handleClose(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    router
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="/training">
      <span class="i-ri-robot-2-line mr-2" />
      <template #title>Training</template>
    </el-menu-item>
    <el-menu-item index="/about">
      <el-icon>
        <Setting />
      </el-icon>
      <template #title>About</template>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
.el-menu-item {
  height: 45px;
  @apply rounded-md;

  &.is-active {
    color: #000 !important;
    background-color: #e0f2fe;
  }
}
</style>
