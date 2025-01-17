<template>
  <el-config-provider namespace="el">
    <!-- <BaseHeader />
    <div class="main-container flex">
      <BaseSide />
      <div w="full" py="4">
        <RouterView />
      </div>
    </div> -->

    <RouterView />
  </el-config-provider>
</template>

<style>
#app {
  color: var(--el-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--el-menu-item-height) - 4px);
}
</style>
