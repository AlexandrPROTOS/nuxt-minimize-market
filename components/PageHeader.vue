<template>
  <div class="page-header">
    <nav class="page-header__nav main-container">
      <ul class="page-header__nav-list">
        <li class="page-header__nav-item">
          <NuxtLink
            class="page-header__nav-link"
            to="/"
            active-class="page-header__nav-link--active"
            >Каталог</NuxtLink
          >
        </li>
        <li class="page-header__nav-item">
          <h1 class="app-heading">Nuxt-Minimize-Market</h1>
        </li>
        <li class="page-header__nav-item">
          <NuxtLink
            class="page-header__nav-link page-header__nav-cart"
            to="/cart"
            active-class="page-header__nav-link--active"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.page-header {
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 2px 2px blue;

  &__nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 12px 0;
  }

  &__nav-item {
    margin: 0;
    font-size: 30px;
    line-height: 1.15;
    align-self: center;

    &:nth-of-type(2) {
      margin-right: auto;
      margin-left: auto;
    }
  }

  &__nav-link {
    display: flex;
    align-items: center;
    height: 57.5px;
    text-decoration: none;
    color: black;

    &:first-child {
      padding: 15px;
    }

    &--active {
      color: white;
      background-color: black;
      border-radius: 10px;
    }
  }

  &__nav-cart {
    width: 80px;
    background-image: url("../assets/icons/basket.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40px;
  }
}

.app-heading {
  margin: 0;
  font-size: 32px;
  color: blue;
}
</style>
