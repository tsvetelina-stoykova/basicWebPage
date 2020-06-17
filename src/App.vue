<template>
  <div id="app">
    
    <!-- <div class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">Logo</a>
        </div>

        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div class="nav-right nav-menu">

          <router-link to="/" class="nav-item r-item">Home</router-link>
          <router-link to="about" class="nav-item r-item">About</router-link>
          <router-link to="about" class="nav-item r-item">Work</router-link>

          <div class="nav-item">
            <p class="control">
              <a class="button is-primary is-outlined">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Log in</span>
              </a>
            </p>
          </div>

        </div>
        
      </div> -->
    

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">   
       <span class="icon">
          <i class="fa fa-download"></i>
        </span>     
    </div>

    <div id="navbarBasicExample" class="navbar-menu">

      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>
        <a class="navbar-item">
          About
        </a>
        <a class="navbar-item">
          Work
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Log in</strong>
            </a>
          </div>
        </div>
      </div>
    
    </div>
  </nav>


  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

#app  
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

  nav
    background: #e1e1e1  

</style>
