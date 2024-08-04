<template>
  <li class="skeleton">
    <el-skeleton class="skeleton__block" animated>
      <template #template>
        <el-skeleton-item class="skeleton__img" />
        <el-skeleton-item class="skeleton__text" />
        <el-skeleton-item class="skeleton__price" />
      </template>
    </el-skeleton>
  </li>
</template>
<style scoped lang="scss">
.skeleton {
  width: calc(33.33% - 25px);
  height: 360px;
  padding: 15px;
  background-color: rgb(255 255 255 / 0.3);
  border: 2px solid gray;
  border-radius: 25px;
  box-shadow: 5px 5px 20px 5px rgb(128 128 128 / 0.8);

  &__block {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__img {
    width: 100%;
    height: 60%;
    border-radius: 20px;
  }

  &__text {
    width: 70%;
    height: 18.4px;
    margin-top: 20px;
  }

  &__price {
    width: 20%;
    height: 20.7px;
    margin-top: 18px;
  }
}
</style>
