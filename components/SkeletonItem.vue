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
    height: 21.3px;
    margin-top: 2px;
    margin-right: 6px;
    margin-left: 6px;
  }
}

@media (width <= 1000px) {
  .skeleton {
    &__category {
      width: 70px;
      height: 18.4px;
    }
  }
}
</style>
