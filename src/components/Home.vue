<template>
  <div class="home">
   <div class="mainSection">
    <input v-model="inputtedColor"
    type="text"
    placeholder="Type a color">
    <div>
      <button @click="addColor">Add color</button>
    </div>
    <div
      v-for="(color, index) in colors"
      :key="index"
    >

      <p>{{ color.name }}</p>
    </div>


    
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  
  data () {
      return{
        inputtedColor: '',
        colors: [
          {name: "orange"},
          {name: "red"},
          {name: "grey"},
        ]
      } // RETURN
    }, //DATA

  methods:{
    addColor(){
      this.colors.push({name: this.inputtedColor})
      this.inputtedColor = ''
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.mainSection
  padding: 50px
  


</style>
