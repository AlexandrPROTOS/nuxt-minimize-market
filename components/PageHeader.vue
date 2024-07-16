<template>
  <div class="page-header">
    <nav class="page-header__nav main-container">
      <ul class="page-header__nav-list">
        <li class="page-header__nav-item">
          <NuxtLink class="page-header__nav-link" to="/">Каталог</NuxtLink>
        </li>
        <li class="page-header__nav-item">
          <NuxtLink class="page-header__nav-link" to="/cart">Корзина</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.page-header {
  width: 100%;
  background-color: white;

  &__nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 20px 0;
  }

  &__nav-item {
    margin: 0;
    padding: 0;
    font-size: 30px;

    &:last-child {
      margin-left: auto;
    }
  }

  &__nav-link {
    text-decoration: none;
    color: black;
  }
}

.router-link-active {
  color: red;
}
</style>
