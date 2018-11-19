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
  name: 'A Propos',
  data () {
    return {
      title: 'Julmi',
      msg: 'Restaurant japonais au coeur de Paris'
    }
  }
}
</script>
