<template>

      
    <div class="ImageGallery">
        <div v-for="g in gallery" class="gallery" :key="g.imgSrc">
            <a >
                <img :src="g.imgSrc" :alt="g.imgAlt">
            </a>
            <div class="desc">
                <template v-if="g.showDescription">
                    {{ g.description }}
                    <button @click="g.showDescription = false" class="show-desc">Show less...</button>
                </template>
                <template v-else>
                    <button @click="g.showDescription = true" class="show-desc">Show more...</button>
                </template>
                
            </div>
        </div>
    </div>

  
</template>

<script>
export default {
  name: 'ImageGallery',
  
  data() {
      return {
          gallery: [
              { imgSrc: '../assets/img_5terre.jpg', imgAlt: 'Cinque Terre', showDescription: false, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
              { imgSrc: '../assets/img_forest.jpg', imgAlt: 'Forrest', showDescription: false, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
              { imgSrc: '../assets/img_lights.jpg', imgAlt: 'Lights', showDescription: false, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
              { imgSrc: '../assets/img_mountains.jpg', imgAlt: 'Mountains', showDescription: false, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' }
          ]
         
          }

      }
  }
}

</script>>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass"  scoped>

.gallery 
  margin: 5px
  border: 1px solid #ccc
  float: left
  width: 180px

  .desc
    padding: 15px
    text-align: center

    .show-desc
        background-color: #008cba
        border: none
        color: white
        padding: 10px 20px
        text-align: center
        text-decoration: none
        display: inline-block

            
</style>