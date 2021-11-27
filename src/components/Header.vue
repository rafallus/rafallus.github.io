<template>
  <header id="header">
    <div class="pure-g container desktop">
      <div class="pure-u-1-2 left-container">
        <router-link :to="{ name: 'Home' }" class="logo-container">
          <img class="logo" src="@/assets/logo.png" alt="Site Logo" />
        </router-link>
        <div class="title-container">
          <div class="main-title">
            <router-link :to="{ name: 'Home' }">
              rafallus
            </router-link>
          </div>
          <h1 class="sec-title">
            Game Developer
          </h1>
        </div>
      </div>
      <div class="pure-u-1-2 right-container">
          <nav id="main-nav" class="pure-menu pure-menu-horizontal">
            <ul class="pure-menu-list">
              <li class="pure-menu-item">
                <router-link :to="{ name: 'Home' }" class="menu-link pure-menu-link">Home</router-link>
              </li>
              <li class="pure-menu-item">
                <router-link :to="{ name: 'Projects' }" class="menu-link pure-menu-link">Projects</router-link>
              </li>
              <li class="pure-menu-item">
                <router-link :to="{ name: 'AboutMe' }" class="menu-link pure-menu-link">About me</router-link>
              </li>
              <li class="pure-menu-item">
                <router-link :to="{ name: 'Contact' }" class="menu-link pure-menu-link">Contact</router-link>
              </li>
            </ul>
          </nav>
      </div>
    </div>
</header>
</template>

<script>
export default {

}
</script>

<style>
#header {
  display: flex;
  align-items: center;
  background: var(--tertiary);
}

#header .desktop {
  padding: 1.5em 0;
}

#header .desktop .left-container {
  display: flex;
  align-items: center;
}

#header .desktop .right-container {
  display: flex;
  align-items: flex-end;;
}

#header .title-container {
  margin-left: 1em;
}

#header div.main-title {
  font-weight: 700;
  font-size: 1.625em;
  margin-bottom: 0.3em;
}

#header div.main-title a {
  color: var(--light);
}

#header h1.sec-title {
  font-weight: 500;
  font-size: 1.313em;
}

#header #main-nav {
  display: flex;
  justify-content: flex-end;
}

#header #main-nav .menu-link {
  color: var(--light);
  font-weight: 700;
  text-transform: uppercase;
}

#header #main-nav .menu-link.router-link-active {
  color: var(--primary);
  background: transparent;
}

#header #main-nav .menu-link:hover {
  background: transparent;
  color: var(--primary);
}
</style>