<template>
  <div id="home">
    <div id="hero">
      <img :src="require('@/assets/hero_img.webp')" alt="Godot Reference Image" title="" class="hero-img" />
      <div class="overlay">
        <ul class="main-competences">
          <li>Programmer</li>
          <li>Game Developer</li>
          <li>Godot contributor</li>
        </ul>
        <ul class="sec-competences">
          <li>Bug fixes</li>
          <li>Feature development</li>
        </ul>
        <router-link :to="{ name: 'Contact' }" class="pure-button pure-button-primary">Contact me</router-link>
      </div>
    </div>
    <div class="short-aboutme">
      <h2>Freelancer Programmer</h2>
      <p>
        I'm a programmer and a modest contributor to the <a href="https://godotengine.org" target="_blank"><b>Godot Game Engine</b></a>.
        I've experience coding in <b>GDScript</b>, <b>C++</b>, <b>GDNative</b> and <b>Nim</b>.
        I've worked on 3D and 2D projects in addition to UI design.
        I'm also a 3D modeling enthusiast and know how to use <a href="https://blender.org" target="_blank"><b>Blender</b></a> at a basic level.
      </p>
    </div>
    <div class="section">
      <PullRequests />
    </div>
  </div>
</template>

<script>
import PullRequests from '@/components/PullRequests.vue'

export default {
  name: 'Home',
  components: {
    PullRequests
  }
}
</script>

<style>
#home #hero {
  padding: 2em 0;
  position: relative;
}

#home #hero .hero-img {
  display: block;
  margin: auto;
}

#home #hero .overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

#home #hero .main-competences li {
  font-size: 1.6em;
  font-weight: 600;
  list-style: none;
  padding-bottom: 1em;
}

#home #hero .sec-competences li {
  font-size: 1.2em;
  list-style: none;
  padding-bottom: 0.8em;
}

#home #hero .overlay a {
  background-color: var(--primary);
  margin-top: 2em;
}

#home .short-aboutme {
  margin: 32px 8px;
  padding: 1em 0;
}

#home .short-aboutme h2 {
  text-align: center;
  padding: 0 0 0.8em 0;
  font-size: 1.6em;
}

#home .short-aboutme p {
  max-width: 800px;
  margin: 0 auto 2em auto;
}
</style>