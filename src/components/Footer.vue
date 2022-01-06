<template>
  <footer id="footer">
    <div class="container pure-g">
      <nav id="footer-nav" class="pure-menu pure-u-1-3">
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
      <div class="social-networks pure-u-1-3">
        <a href="https://twitter.com/rafallus_">
          <img :src="require('@/assets/icons/twitter.svg')" alt="Twitter" title="Twitter"/>
        </a>
        <a href="https://github.com/rafallus">
          <img :src="require('@/assets/icons/github.svg')" alt="GitHub" title="GitHub" />
        </a>
        <a href="#">
          <img :src="require('@/assets/icons/patreon.svg')" alt="Patreon" title="Patreon" />
        </a>
        <a :href="getMail">
          <img :src="require('@/assets/icons/email.svg')" alt="Send email" title="Send email" />
        </a>
      </div>
      <div class="right-col pure-u-1-3">
        <a href=#>
          Privacy Policy
        </a>
      </div>
    </div>
    <p class="copyright">Copyright &copy; {{ computedYear }} Rafael M. G. (rafallus)</p>
  </footer>
</template>

<script>
import { computed } from '@vue/reactivity';
export default {
  setup() {
    const computedYear = computed(() => {
      let year = "2021";
      let currentYear = String(new Date().getFullYear());
      if (currentYear !== year) {
        year += "-" + currentYear;
      }
      return year;
    });

    const getMail = computed(() => {
      let ml = "gmail." + "com";
      ml = "mailto:" + "rafallus.dev" + "@" + ml;
      return ml;
    });

    return { computedYear, getMail }
  }
}
</script>

<style>

#footer {
  position: sticky;
  top: 100%;
  background: var(--tertiary);
}

#footer > div {
  padding-top: 1.6em;
  padding-bottom: 1em;
}

#footer a {
  color: var(--light);
  background: transparent;
}

#footer #footer-nav > ul {
  display: inline-block;
}

#footer .menu-link.router-link-active {
  color: var(--primary-light);
}

#footer a:hover {
  background: transparent;
  color: var(--primary-light);
}

#footer .social-networks {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

#footer .social-networks a {
  padding: 0 0.5em;
}

#footer .social-networks a img:hover {
  filter: brightness(0) saturate(100%) invert(70%) sepia(38%) saturate(6515%) hue-rotate(61deg) brightness(95%) contrast(105%);
}

#footer .right-col {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

#footer .copyright {
  text-align: center;
  padding: 0.5em;
  background: black;
  font-size: 0.85em;
}

</style>
