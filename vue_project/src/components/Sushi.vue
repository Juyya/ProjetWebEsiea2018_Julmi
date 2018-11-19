<template>
    <div id="app">
          <h1>{{title}}</h1>
               <div class="row">
      <div class="prod" v-for="(data,index) in products" :key="index">
       <!-- <div class="food"> -->
        <img class="imagealacarte" :src="data.image">
         <h5>{{data.productTitle}}</h5>
         <div class="description"><h6>{{data.productDescription}}</h6></div>
         <div class="price"><h6>{{data.productPrice}}</h6></div>
        <div id="addtocart" v-on:click="addtocart">
            <button>add to cart</button>
        </div>
      </div>
    <!--</div>-->
            </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Sushi',
  data () {
    return {
      title: 'Sushi',
      products: []
    }
  },

  created () {
    axios.get('/api/list/sushi')
      .then((resp) => {
        this.products = resp.data
      })
      .catch((err) => {
        console.log(err)
      })
  },

  methods: {
    addtocart (products) {
      console.log(JSON.stringify(products))
      this.$store.commit('addItemPanier', products)
    }
  }
}
</script>

<style scoped>
    .description{
        text-align: center;
    }

    .row{
     padding-left: 130px;
     padding-right: 50px;
}

.description{
  text-align: left;
}

.prod{
  width: 300px;
  padding-top: 30px;
  padding-bottom: 40px;
  text-align: center;
}

h6,
h5 {
  color:white;
  text-align: center;
}

h1{
  color :white;
  text-align: center;
}

</style>
