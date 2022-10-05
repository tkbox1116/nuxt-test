<template>
  <div>
    <!-- 全ページの共通はlayoutフォルダに書く -->
    <Navbar />
    <div class="wrapper"></div>
    <slot />
  </div>
</template>

<style>
.wrapper {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: auto;
  padding: 0;
  margin: 0;
  pointer-events: none;
  z-index: 0;
  margin: auto 0;
  pointer-events: none;
  background-color: rgb(115, 181, 252);
}

.common-transition {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  pointer-events: none;
}
</style>
