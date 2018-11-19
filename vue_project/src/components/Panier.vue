<template>
    <header>
    <!--<div class="img-cart">
        <img src="/assets/cart.png">
    </div>-->
    <div class="cart">
         <h4>Panier</h4>
            <div id="pro">
                <router-link v-bind:to="'/Checkout'">{{ $store.getters.nbItemPanier }} article(s)</router-link>
           <!-- <div class="empty">Votre panier est vide !</div> -->
            </div>
    </div>
    </header>
</template>

<script>

export default {
  name: 'Panier'
}
</script>

<style scoped>
    .img-cart {
        position: absolute;
        height: 100%;
        margin-top:-10px;
        padding-left: 1110px;
    }

    .cart {
        color: white;
        padding-left: 1200px;
        flex-wrap: wrap;
        position: absolute;
    }

    .info {
        margin-top : -10px;
        font-size: 14px;
    }

    #pro {
        color :inherit;
        text-decoration: none;
    }
</style>
