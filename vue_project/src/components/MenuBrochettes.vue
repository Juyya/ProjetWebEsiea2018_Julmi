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
export default {
  name: 'MenuBrochettes',
  data () {
    return {
      title: 'Menu Brochettes',
      products: [
        {
          productTitle: 'Y1 Aomori',
          productDescription:
          '1 soupe, 1 salade, 1 riz, 2 poulet, 2 boulettes de poulet',
          productPrice: '12,80€',
          image: require('../assets/yakitori.png'),
          productId: 1
        },
        {
          productTitle: 'Y2 Fukui',
          productDescription:
            '1 soupe, 1 salade, 1 riz, 1 boulettes de poulet, 1 poulet, 1 aile de poulet, 1 boeuf, 1 boeuf au fromage',
          productPrice: '12,80€',
          image: require('../assets/yakitori.png'),
          productId: 2
        },
        {
          productTitle: 'Y3 Gifu',
          productDescription:
            '1 soupe, 1 salade, 1 riz, 5 boeuf au fromage',
          productPrice: '12,80€',
          image: require('../assets/yakitori.png'),
          productId: 3
        },
        {
          productTitle: 'Y4 Hyogo',
          productDescription:
            '1 soupe, 1 salade, 1 riz, 2 saumon, 2 thon ou 4 brochettes de saumon ',
          productPrice: '12,80€',
          image: require('../assets/yakitori.png'),
          productId: 4
        }
      ]
    }
  },

  methods: {
    addtocart (products) {
       console.log("bn,;:lkj,nbvhbjkmojkbhvk")
      console.log(JSON.stringify(products))
      this.$store.commit('addItemPanier',products)
    }
  }
}
</script>

<style scoped>
    .description{
        text-align: center;
        /*background-color: red;*/
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

}

h1{
  color :white;
  text-align: center;
}
</style>
