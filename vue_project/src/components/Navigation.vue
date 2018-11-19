<template>
    <div class="wrap_menu">
        <nav class="menu">
            <ul class="main_menu">
                <li>
                    <a href="index.html">Accueil</a>
                </li>

                <li>
                    <a href="#">A la carte</a>
                    <ul class="sub_menu">
                    <li><router-link v-bind:to="'/Sushi'">> Sushi</router-link></li>
                    <li><router-link v-bind:to="'/Maki'">> Maki</router-link></li>
                    <li><router-link v-bind:to="'/Yakitori'">> Yakitori</router-link></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Menus</a>
                    <ul class="sub_menu">
                        <li><router-link v-bind:to="'/MenuBrochettes'">> Menu Brochettes</router-link></li>
                        <li><router-link v-bind:to="'/MenuMaki'">> Menu Maki</router-link></li>
                        <li><router-link v-bind:to="'/MenuSushi'">> Menu Sushi</router-link></li>
                    </ul>
                </li>

                <li>
                    <a href="#">Boissons et Desserts</a>
                    <ul class="sub_menu">
                        <li><router-link v-bind:to="'/Boissons'">> Boissons</router-link></li>
                        <li><router-link v-bind:to="'/Desserts'">> Desserts</router-link></li>
                    </ul>
                </li>

                    <li><router-link v-bind:to="'/APropos'">A Propos</router-link></li>

                    <li><router-link v-bind:to="'/Contact'">Contact</router-link></li>

            </ul>
        </nav>
    </div>
</template>

<script>

export default {
  name: 'Navigation',
  data () {
    return {
      links: [
        /* {
          id: 0,
          text: 'Hello World',
          page: '/HelloWorld'
        },

        {
          id: 0,
          text: 'Accueil',
          page: '/Accueil'
        },

        {
          id: 0,
          text: 'A la carte',
          page: '/ALaCarte'
        } */
      ]

    }
  }
}
</script>

<style scoped>

    a:link {
        text-decoration:none;
    }

    .wrap_menu {
        background-color: black;
        color: white;
    }

    .main_menu {
        margin: 0px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        background-color: grey;
    }

    .main_menu > li {
        display: block;
        position: relative;
        padding: 20px;
    }

    .main_menu > li > a {
        color: white;
    }

    li.sale-noti > a {
        color: #e65540;
    }

    .main_menu li {
        position: relative;
    }

    .main_menu > li:hover > .sub_menu {
        list-style-type: none;
        visibility: visible;
        opacity: 1;
    }

    .sub_menu {
        position:absolute;
        background-color:white;
        visibility:hidden;
        width:250px;
        padding-top:10px;
        padding-bottom:10px;
    }

    .main_menu > li > .sub_menu {
        top:100%;
        left: 0;
    }

    .sub_menu li:hover > .sub_menu {
        visibility: visible;
        opacity: 1;
    }

    .sub_menu li, .sub_menu a {
        color: black;
    }

    .sub_menu > li:hover > a {
        color: red;
        text-decoration: none;
    }

    /*************  slideshow   **************/

    /* Slideshow container */
    .slideshow-container {
        max-width: 1000px;
        padding-top: 80px;
        position: relative;
        margin: auto;
    }

    /* Fading animation */
    .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1.5s;
        animation-name: fade;
        animation-duration: 1.5s;
    }

    @-webkit-keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
    }

    @keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
    }
</style>
