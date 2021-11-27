<template>
  <Header />
  <main id="main">
    <router-view/>
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Header, Content, Footer }
}
</script>


<style>
:root {
    --background: #040814;
    --light: #eaeaea;
    --primary: #3DBE00;
    --secondary: #DC6900;
    --tertiary: #1a1c27;
    --primary-light: #b6ee9c;
    --secondary-light: #ebccaf;
    --link: #9dd1f0;
    --container-max-width: 1290px;
    --container-width-base: calc(90vw - var(--frame-size, 0px) * 2);
    --container-width: min(100%, var(--container-width-base));
}

html {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

body {
  background: var(--background);
  color: var(--light);
}

a {
  text-decoration: none;
  color: var(--link);
}

#app {
  min-height: 100vh;
}

#main {
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto 6em auto;
  padding: 0 20px;
}

.container {
  max-width: var(--container-max-width);
  width: var(--container-width);
  margin-left: auto;
  margin-right: auto;
}

.section {
  margin-top: 3em;
  margin-bottom: 2em;
}

.section h2 {
  text-align: center;
  font-size: 1.75em;
  padding-bottom: 1em;
}

.info, .success, .warning, .error, .validation {
    border: 1px solid;
    margin: 10px 0px;
    padding: 15px 10px 15px 50px;
    background-repeat: no-repeat;
    background-position: 10px center;
    border-radius: 8px;
}

.error{
    color: #D8000C;
    background-color: #FFBABA;
    background-image: url('https://i.imgur.com/GnyDvKN.png');
}
</style>
