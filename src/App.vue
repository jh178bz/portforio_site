<template>
  <div id="app">
    <Header id="header"></Header>
    <div id="top">
      <div id="main">
        <vue-typer :text="['Welcome to the Jou\'s Portforio']" class="top-text"
        :repeat="0" :pre-type-delay="1000" :typeDelay="120" :preEraseDelay="5000" :eraseDelay="2000">
        </vue-typer>
      </div>
    </div>

    <Profile id="profile"></Profile>
    <skill id="skill"></skill>
    <work id="work"></work>
    <contact id="contact"></contact>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Profile from './components/Profile.vue'
import Skill from './components/Skill.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Header,Footer,Profile,Skill,Work,Contact
  },
  methods:{
    clickSmoothScroll (x) {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(x),800,null,null,'y'
      )
    }
  }
}
</script>

<style>
@import "./css/style.css";
@import url("https://fonts.googleapis.com/css?family=Anton");
</style>
