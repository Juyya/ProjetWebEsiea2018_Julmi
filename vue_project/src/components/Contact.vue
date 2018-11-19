<template>
    <header>
        <div id="app">
        <h1>{{ title }}</h1>
    <h6>{{ msg }}</h6>
    </div>
    </header>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      title: 'Contact',
      msg: 'Téléphone : 01.72.66.54.24'
    }
  }
}
</script>
