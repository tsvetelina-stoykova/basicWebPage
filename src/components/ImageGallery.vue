<template>

      
    <div class="ImageGallery">

        <form @submit.prevent="addImage">
            <label for="img-source">Source</label>
            <input :value="imgSrc" @input="setImgSource" type="text" id="image-source"  placeholder="Your image source..">

            <label for="img-alt">Alt</label>
            <input :value="imgAlt" @input="setImgAlt" type="text" id="img-alt" placeholder="Your image alt..">

            <label for="img-desc">Description</label>
            <textarea :value="imgDescription" @input="setImgDescription" type="text" id="img-desc" placeholder="Your description.."></textarea>

            <input type="submit" value="Submit" />

        </form>
    
        <div v-for="g in gallery" class="gallery" :key="g.imgSrc">
            <a >
                <img :src="g.isExternal ? g.imgSrc : getImgUrl(g.imgSrc)" :alt="g.imgAlt"/>
                <!-- <img src="../assets/img_5terre.jpg" :alt="g.imgAlt"> -->
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
          img: 'https://www.silistra.bg/images/zabelejitelnosti/15.jpg',
          gallery: [
              { imgSrc: 'img_5terre.jpg', imgAlt: 'Cinque Terre', showDescription: false, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
              { imgSrc: 'img_forest.jpg', imgAlt: 'Forrest', showDescription: false, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
              { imgSrc: 'img_lights.jpg', imgAlt: 'Lights', showDescription: false, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
              { imgSrc: 'img_mountains.jpg', imgAlt: 'Mountains', showDescription: false, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' }
          ],
          imgSrc: '',
          imgAlt: '',
          imgDescription: '',

      }
  },

    methods: {
            getImgUrl(img) {
                var images = require.context('../assets/', false, /\.jpg$/)
                return images('./' + img)
            },
            setImgSource(e){
                const value = e.target.value;
                this.imgSrc = value;
            },
            setImgAlt(e){
                const value = e.target.value;
                this.imgAlt = value;
            },
            setImgDescription(e){
                const value = e.target.value;
                this.imgDescription = value;
            },
            addImage(){
                this.gallery.push({
                    imgSrc: this.imgSrc,
                    imgAlt: this.imgAlt,
                    description: this.imgDescription,
                    isExternal: true,
                    showDescription: false
                });
                this.imgSrc = ''
                this.imgAlt = ''
                this.imgDescription = ''
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