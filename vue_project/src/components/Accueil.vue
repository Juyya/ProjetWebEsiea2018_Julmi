<template>
          <div id="app">
        <!-- <main>
        <agile>
        </agile> -->       
    </div>

</template>

<script>
import Navigation from './Navigation'
export default {
  name: 'Accueil',
  components: {
    Navigation
  },
  data () {
    return {
      imgList: [
        // the object must have `src` property
        // `title` : img 's title
        // `src` : img 's src
        { title: 'defalut', src: 'https://frama.link/slide1' },
        { title: 'defalut2', src: 'https://frama.link/slide2' }
        // ...
      ]
    }
  }
  /* methods: {
    jumpTo() {
      // do somethig when you click the img ...
    }
  } */
}
</script>

<style scoped>
body {
  height: 100%;
  font-weight: 400;
  background-color: black;
  color: white;
  margin: 0;
  padding: 0;
  width: 100%;
}

</style>
