<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<style lang="scss">

// . {
//   display: flex;
//   min-height: 100vh;
//   flex-direction: column;
// }

// .section {
//   flex: 1;
// }
/* footer */
.footer {
    background-color: #fafafa;
    padding: 0 !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
