<template>
  <header id="header">
    <div class="pure-g container header-container">
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
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
          <nav class="pure-menu pure-menu-horizontal main-nav">
            <ul class="pure-menu-list nav-links">
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
  background: var(--tertiary);
}

#header .header-container {
  padding: 1.5em 0;
}

#header .header-container .left-container {
  display: flex;
  align-items: center;
}

#header .header-container .right-container {
  display: flex;
  align-items: flex-end;
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

#header .main-nav {
  display: flex;
  justify-content: flex-end;
}

#header .main-nav .menu-link {
  color: var(--light);
  font-weight: 700;
  text-transform: uppercase;
}

#header .main-nav .menu-link.router-link-active {
  color: var(--primary);
  background: transparent;
}

#header .main-nav .menu-link:hover {
  background: transparent;
  color: var(--primary);
}

#header .menu-btn {
  display: none;
}

@media only screen and (max-width: 776px) {
  #header .header-container .right-container {
    align-items: flex-start;
    justify-content: flex-end;
  }

  #header .main-nav {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 0;
    background: var(--tertiary);
    z-index: 1;
    justify-content: center;
    align-items: center;
    transition: width 0.2s ease-out;
  }

  #header .main-nav .nav-links {
    display: none;
  }

  #header #main-nav .nav-links li {
    text-align: center;
    margin-bottom: 2.5em;
  }

  #header .menu-icon {
    padding: 28px 20px;
    position: relative;
    cursor: pointer;
    z-index: 2;
  }

  #header .menu-icon .nav-icon {
    background: white;
    display: block;
    height: 4px;
    width: 22px;
    position: relative;
    transition: background .2s ease-out;
  }

  #header .menu-icon .nav-icon::before {
    background: white;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    transition: all .2s ease-out;
    top: 8px;
  }

  #header .menu-icon .nav-icon::after {
    background: white;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    transition: all .2s ease-out;
    top: -8px;
  }

  #header .menu-btn:checked ~ .main-nav {
    width: 100%;
  }

  #header .menu-btn:checked ~ .main-nav .nav-links {
    display: flex;
    flex-direction: column;
  }

  #header .menu-btn:checked ~ .menu-icon .nav-icon {
    background: transparent;
  }

  #header .menu-btn:checked ~ .menu-icon .nav-icon::before {
    transform: rotate(-45deg);
    top: 0;
  }

  #header .menu-btn:checked ~ .menu-icon .nav-icon::after {
    transform: rotate(45deg);
    top: 0;
  }
}
</style>