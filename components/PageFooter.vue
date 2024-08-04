<template>
  <div class="page-footer">
    <div class="page-footer__container main-container">
      <NuxtLink
        class="page-footer__link"
        to="https://github.com/AlexandrPROTOS"
      >
        Александр Протасов</NuxtLink
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-footer {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  background-color: rgb(255 255 255 / 0.8);
  border-top-right-radius: 100%;
  border-top-left-radius: 100%;
  box-shadow: 0 1px 10px 0 blue;

  &__container {
    display: flex;
    justify-content: center;
  }

  &__link {
    display: flex;
    padding: 20px;
    padding-left: 60px;
    font-size: 22px;
    text-decoration: none;
    color: black;
    background-image: url("/assets/icons/git.png");
    background-position: center left;
    background-repeat: no-repeat;
    background-size: 35px;

    &:hover {
      color: blue;
      transform: scale(0.9);
      transition: ease 300ms;
    }

    &:not(:hover) {
      transition: ease-out 500ms;
    }
  }
}
</style>
