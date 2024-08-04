<template>
  <li class="skeleton">
    <el-skeleton animated>
      <template #template>
        <el-skeleton-item class="skeleton__category"
      /></template>
    </el-skeleton>
  </li>
</template>

<style lang="scss">
.skeleton {
  display: flex;
  align-items: center;

  &__category {
    width: 90px;
    height: 23.3px;
    margin-right: 6px;
    margin-left: 6px;
  }
}
</style>
