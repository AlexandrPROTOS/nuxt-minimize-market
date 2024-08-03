<template>
  <div class="page-header">
    <div class="page-header__content main-container">
      <div class="page-header__logo">
        <img
          src="/assets/icons/icon-black.svg"
          alt=""
          class="page-header__app-logo"
        />
        <h1 class="page-header__app-heading">Nuxt Minimize Market</h1>
      </div>
      <nav class="page-header__nav">
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
            <NuxtLink
              class="page-header__nav-link page-header__nav-cart"
              to="/cart"
              active-class="page-header__nav-link--active page-header__nav-cart--active"
            />
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-header {
  width: 100%;
  background-color: rgb(255 255 255 / 0.85);
  box-shadow: 0 1px 20px 0 blue;

  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    align-items: center;
  }

  &__app-logo {
    display: flex;
    width: 60px;
    height: 60px;

    @media (width <= 1000px) {
      width: 50px;
      height: 50px;
    }

    @media (width <= 768px) {
      width: 40px;
      height: 40px;
    }
  }

  &__app-heading {
    margin: 0;
    font-size: 26px;
    color: blue;
    align-self: center;

    @media (width <= 1000px) {
      font-size: 22px;
    }

    @media (width <= 768px) {
      font-size: 16px;
    }

    @media (width <= 500px) {
      display: none;
      font-size: 16px;
    }
  }

  &__nav-list {
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 400px;
    margin: 0;
    padding: 12px 0;

    @media (width <= 1000px) {
      width: 300px;
    }

    @media (width <= 768px) {
      max-width: 230px;
      padding: 6px 0;
    }

    @media (width <= 500px) {
      width: 250px;
    }
  }

  &__nav-item {
    display: flex;
    margin: 0;
    font-size: 30px;
    line-height: 1.15;
    align-self: center;

    @media (width <= 1000px) {
      font-size: 22px;
    }

    @media (width <= 768px) {
      margin-right: auto;
      margin-left: auto;
      font-size: 18px;
    }

    @media (width <= 500px) {
      margin-right: 0;
    }
  }

  &__nav-link {
    display: flex;
    align-items: center;
    height: 57.5px;
    text-decoration: none;
    color: black;

    @media (width <= 1000px) {
      height: 45px;
    }

    @media (width <= 768px) {
      height: 38px;
    }

    &:first-child {
      padding: 15px;
    }

    &:hover {
      background-color: rgba(0 79 250 / 0.5);
      border-radius: 10px;
      transition: ease-in-out 0.2s;
    }

    &:not(:hover) {
      transition: 0.2s;
    }

    &--active {
      color: white;
      cursor: default;
      background-color: black;
      border-radius: 10px;

      &:hover {
        background-color: black;
      }
    }
  }

  &__nav-cart {
    width: 80px;
    background-image: url("../assets/icons/basket_black.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40px;

    @media (width <= 1000px) {
      width: 60px;
    }

    @media (width <= 768px) {
      width: 50px;
      height: 45px;
    }
  }
}
</style>
