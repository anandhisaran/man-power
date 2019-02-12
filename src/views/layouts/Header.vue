<template>
  <div class="hero-head">
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <!-- <a class="" href="https://bulma.io">
      <img src="../../assets/phoenix.png" width="130" height="95">
    </a> -->

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item">
        <router-link to="/" class="has-text-white has-text-weight-bold">
        Home
        </router-link>
        </div>
        <div class="navbar-item">
          <router-link to="/about" class="has-text-white has-text-weight-bold">
          About
          </router-link> 
        </div>
        <div class="navbar-item">
 <router-link to="/ourservices" class="has-text-white has-text-weight-bold">
 Our Services
          </router-link> 
        </div>
        <div class="navbar-item">
      <div class="">
       <a class="navbar-brand" href="/">
      <img src="../../assets/phoenix.png" class="">
    </a>
      </div>
      </div>
    <div class="navbar-item">
           <router-link to="/contactus" class="has-text-white has-text-weight-bold">
Contact
          </router-link> 
    </div>
    <div class="navbar-item">
            <router-link to="/career" class="has-text-white has-text-weight-bold">
Career
          </router-link> 
    </div>
      <div class="navbar-item is-hoverable">
        <a class="navbar-link has-text-white has-text-weight-bold">
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
      </div>
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
