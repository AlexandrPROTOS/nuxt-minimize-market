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
              ><svg
                id="Capa_1"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 119.88 119.88"
                style="enable-background: new 0 0 119.88 119.88"
                xml:space="preserve"
                fill="black"
              >
                <g>
                  <path
                    d="M92.652,119.88H28.47c-6.042,0-10.956-4.914-10.956-10.952L8.423,66.246c-3.435-1.703-5.691-5.177-5.691-9.056
		c0-5.669,4.611-10.276,10.276-10.276h93.864c5.665,0,10.276,4.607,10.276,10.276c0,3.317-1.601,6.354-4.278,8.266l-9.337,44.166
		C103.608,114.966,98.694,119.88,92.652,119.88z M13.008,53.653c-1.948,0-3.536,1.588-3.536,3.536c0,1.536,1.11,2.896,2.703,3.3
		c1.242,0.316,2.194,1.316,2.457,2.571l9.547,45.175c0.075,3.018,1.966,4.905,4.291,4.905h64.182c2.325,0,4.217-1.887,4.217-4.212
		l9.71-46.289c0.211-1.018,0.882-1.878,1.808-2.334c1.246-0.605,2.023-1.808,2.023-3.115c0-1.948-1.588-3.536-3.537-3.536H13.008z"
                  />
                  <path
                    d="M37.123,100.121c0,1.304-1.067,2.371-2.371,2.371h-0.653c-1.304,0-2.371-1.067-2.371-2.371V72.368
		c0-1.304,1.067-2.371,2.371-2.371h0.653c1.304,0,2.371,1.067,2.371,2.371V100.121z"
                  />
                  <path
                    d="M54.483,100.121c0,1.304-1.067,2.371-2.371,2.371h-0.653c-1.304,0-2.372-1.067-2.372-2.371V72.368
		c0-1.304,1.067-2.371,2.372-2.371h0.653c1.304,0,2.371,1.067,2.371,2.371V100.121z"
                  />
                  <path
                    d="M71.844,100.121c0,1.304-1.067,2.371-2.371,2.371h-0.654c-1.304,0-2.371-1.067-2.371-2.371V72.368
		c0-1.304,1.067-2.371,2.371-2.371h0.654c1.304,0,2.371,1.067,2.371,2.371V100.121z"
                  />
                  <path
                    d="M89.205,100.121c0,1.304-1.067,2.371-2.371,2.371H86.18c-1.304,0-2.372-1.067-2.372-2.371V72.368
		c0-1.304,1.068-2.371,2.372-2.371h0.653c1.304,0,2.371,1.067,2.371,2.371V100.121z"
                  />
                  <path
                    d="M28.027,34.868c2.25-15.669,15.69-27.723,31.98-27.723c16.291,0,29.732,12.055,31.982,27.723c0.328,5.35,7.22,4.494,7.22,0
		C96.915,15.24,80.253,0,60.008,0c-20.244,0-36.907,15.24-39.2,34.868C20.807,40.433,28.115,40.647,28.027,34.868z"
                  />
                </g>
              </svg>
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
  background-color: rgb(255 255 255 / 0.85);
  box-shadow: 0 2px 20px 0 blue;

  @media (width <= 500px) {
    box-shadow: 0 2px 20px 0 black;
  }

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
      transition: ease-in-out 0.4s;
    }

    &:not(:hover) {
      transition: ease-in-out 0.4s;
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
        transition: 0.5s;
      }
    }

    @media (width <= 1000px) {
      width: 70px;
    }

    @media (width <= 768px) {
      width: 60px;
    }
  }
}
</style>
