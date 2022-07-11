<template>
  <router-view class="container" />
  <div class="app__brand">
    <p class="app__logo">ElenStar</p>
    <div class="app__copyright">ⓒ 2022</div>
  </div>
</template>

<style lang="scss">
body {
  background-color: #020c3f;
  text-align: center;
  color: #acc6ed;
}

.container {
  max-width: 375px;
  height: 812px;
  background-color: #ffffff;
  margin: 5rem auto 0rem;
  border-radius: 1.5rem;
  box-shadow: 0px 1px 20px #9c9cc855;
}
</style>
