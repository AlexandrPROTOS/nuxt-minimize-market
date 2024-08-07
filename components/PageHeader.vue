<script setup lang="ts">
import BasketIcon from "~/assets/icons/BasketIcon.vue";
</script>

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
              ><BasketIcon />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-header {
  width: 100%;
  background-color: rgb(255 255 255 / 0.8);
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: 0 2px 20px 0 blue;

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
  }

  &__app-heading {
    margin: 0;
    font-size: 26px;
    color: blue;
    align-self: center;
  }

  &__nav-list {
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 400px;
    margin: 0;
    padding: 12px 0;
  }

  &__nav-item {
    display: flex;
    margin: 0;
    font-size: 30px;
    line-height: 1.15;
    align-self: center;
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

    &:hover {
      color: white;
      background-color: rgba(0 79 250 / 0.5);
      border-radius: 10px;
      transition: ease 0.4s;
    }

    &:not(:hover) {
      transition: ease 0.4s;
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

    &:hover,
    &--active {
      & svg {
        fill: white;
        transition: ease 0.5s;
      }
    }
  }
}

@media (width <= 1000px) {
  .page-header {
    &__content {
      margin-right: 20px;
      margin-left: 30px;
    }

    &__app-logo {
      width: 50px;
      height: 50px;
    }

    &__app-heading {
      font-size: 22px;
    }

    &__nav-list {
      width: 300px;
    }

    &__nav-item {
      font-size: 22px;
    }

    &__nav-link {
      height: 45px;
    }

    &__nav-cart {
      width: 70px;
    }
  }
}

@media (width <= 768px) {
  .page-header {
    &__app-logo {
      width: 40px;
      height: 40px;
    }

    &__app-heading {
      font-size: 13px;
    }

    &__nav-list {
      max-width: 230px;
      padding: 6px 0;
    }

    &__nav-item {
      margin-right: 0;
      margin-left: auto;
      font-size: 18px;
    }

    &__nav-link {
      @media (width <= 768px) {
        height: 38px;
      }

      &:hover {
        transition: none;
      }
    }

    &__nav-cart {
      width: 60px;

      &:hover {
        & svg {
          transition: none;
        }
      }
    }
  }
}

@media (width <= 500px) {
  .page-header {
    box-shadow: 0 2px 20px 0 black;

    &__content {
      justify-content: center;
      margin: 0;
    }

    &__app-logo {
      width: 55px;
      margin-left: 20px;
      padding-left: 15px;
    }

    &__app-heading {
      display: none;
    }

    &__nav-item {
      margin-right: 0;
      margin-left: 0;

      &:nth-of-type(1) {
        margin-right: auto;
        margin-left: auto;
      }

      &:nth-of-type(2) {
        margin-right: 20px;
      }
    }
  }
}
</style>
