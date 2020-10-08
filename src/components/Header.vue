<template>
  <div class="header">
    <div class="header-inner">
      <h1 class="title">Jou's Portforio</h1>
      <div class="nav-res">
        <a href="#" class="link-content" @click="clickSmoothScroll('#app')">
          <p class="comment">Top</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#profile')">
          <p class="comment">Profile</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#skill')">
          <p class="comment">Skill</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#work')">
          <p class="comment">Works</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#contact')">
          <p class="comment">Contact</p>
        </a>
      </div>
    </div>
  </div>
</template>
