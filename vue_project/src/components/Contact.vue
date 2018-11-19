<template>
    <header>
        <div id="app">
        <h1>{{ title }}</h1>
    <h2>{{ msg }}</h2>
    </div>
    </header>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      title: 'Contactez',
      msg: 'Téléphone : 0743653457869'
    }
  }
}
</script>
