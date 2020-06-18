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
    

  <nav class="navbar has-shadow"  role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-left">   
        <p class="navbar-item vue">VUE.JS</p>    
      </div>

      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div class="navbar-menu navbar-end">

        <div class="navbar-end">

          <a class="navbar-item">
            Home
          </a>
          <a class="navbar-item">
            Page 1
          </a>
          <a class="navbar-item">
            Page 2
          </a>
        

        
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary is-outlined">
                <strong>Log in</strong>
              </a>
            </div>
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

  nav
    background-color: #383838
    
    .vue
      color: #00d1b2
      font-weight: bold
      padding-top: 15px

      a:hover
        color: #ccc

    .navbar-left a
      color: #c1c1c1
      font-weight: bold
      

    .navbar-end .navbar-item
      color: #c1c1c1  
     

   
      


</style>
