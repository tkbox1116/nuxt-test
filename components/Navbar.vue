<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">ロゴ</NuxtLink>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NuxtLink class="nav-link" activeClass="active" aria-current="page" to="/">Home</NuxtLink>
            <NuxtLink class="nav-link" activeClass="active" to="/secondpage">セカンド</NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
