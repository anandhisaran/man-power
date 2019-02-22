<template>
  <div class="hero-head">
     <div :class="{ 'overlay': isOpen}" @click="isOpen= !isOpen"></div>
<div class="" id="logo_id">
      <div class="level-item has-text-centered">
       <a class="" href="/">
      <img src="../../assets/phoenix.png" class="">
    </a>
      </div>
      </div>
      <!-- <nav class="navbar navbar is-transparent is-fixed-top" 
      role="navigation" aria-label="main navigation"> -->
  <nav id="nav" class="navbar is-transparent is-fixed-top" 
  role="navigation" aria-label="main navigation">
     <!-- <div class=" is-mobile is-centered  is-narrow">
  <div class="columns">
    <div class="column"> 
      <div class="is-12 "> 
    <p class="bd-notification is-primary">
      <code class="html">is-half is-half is-half is-half is-half is-half</code><br>
    </p>
  </div>
  </div>
  </div>
</div> -->
      <!-- <div class="columns">
      <div class="column">
        <div class="container">
          <ul>
            <li>
              1234-5678-9012
            </li>
            <li>
             admin@mail.com
            </li>
            <li>
              Mon - Sat 9:00 - 19:00
            </li>
          </ul>
           <ul>
            <li>
         facebook
            </li>
            <li>
           twitter
            </li>
            <li>
            linkedin
            </li>
          </ul>
        </div>
      </div>
    </div> -->
  <div class="navbar-brand">
    <!-- <a class="" href="https://bulma.io">
      <img src="../../assets/phoenix.png" width="130" height="95">
    </a> -->

    <a role="button" class="navbar-burger burger" aria-label="menu" 
    aria-expanded="false" data-target="navbarBasicExample"
      @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{'is-active': isOpen}">
    <div class="navbar-start">
      <div class="navbar-item" style="margin-left: auto;">
        <router-link to="/" class="has-text-white">
        Home
        </router-link>
        </div>
        <div class="navbar-item">
          <router-link to="/about" class="has-text-white">
          About
          </router-link> 
        </div>
        <div class="navbar-item">
 <router-link to="/ourservices" class="has-text-white">
 Our Services
          </router-link> 
        </div>
    </div>
     <div class="navbar-end">
    <div class="navbar-item">
           <router-link to="/contactus" class="has-text-white">
Contact
          </router-link> 
    </div>
    <div class="navbar-item">
            <router-link to="/career" class="has-text-white">
Career
          </router-link> 
    </div>
    <div class="navbar-item" style="margin-right: auto;">
            <router-link to="/request" class="has-text-white">
Request
          </router-link> 
    </div>
      <!-- <div class="navbar-item is-hoverable" style="margin-right: auto;">
        <a class="navbar-link has-text-white">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div> -->
    </div>

    <!-- <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div> -->
  </div>
</nav>
  </div>  
</template>
<style scoped>

.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 100%;
  position: fixed;
  /* Stay in place */
  z-index: 999;
  /* Sit on top */
  left: 0;
  top: 0;
  /* Black fallback color */
  background-color: rgba(0, 0, 0, 0.5);
  /* Black w/opacity */
  overflow-x: hidden;
  /* Disable horizontal scroll */
  transition: 0.5s;
  /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}
</style>

<script>
export default {
 data: function() {
        return {
            isOpen: false,
            overlay: false
        }
    },
 mounted() {
      this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          var navbar = document.getElementById("nav")
           var logo = document.getElementById("logo_id")
          var nav_classes = navbar.classList
          var logo_classes = logo.classList
          if(document.documentElement.scrollTop >= 150) {
            if (nav_classes.contains("shrink") === false && logo_classes.contains("shrink_logo") === false) {
              nav_classes.toggle("shrink");
              logo_classes.toggle("shrink_logo");
            }
          }
          else {
            if (nav_classes.contains("shrink") === true && logo_classes.contains("shrink_logo") === true ) {
              nav_classes.toggle("shrink");
                     logo_classes.toggle("shrink_logo");
            }
          }
        })
      })
    },
}
  

</script>

