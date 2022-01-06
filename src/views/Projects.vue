<template>
  <div class="section">
    <h2>Projects</h2>
    <div class="proj-card">
      <div class="proj-card-title">
        <h3><a href="https://github.com/rafallus/tilemap3d" target="_blank">TileMap3D</a></h3>
        <a href="https://github.com/rafallus/tilemap3d" target="_blank" class="on-github">
          Available on GitHub
          <img :src="require('@/assets/icons/github.svg')" alt="" title="" />
        </a>
      </div>
      <div class="proj-card-content">
        <a href="https://github.com/rafallus/tilemap3d" target="_blank">
          <img :src="require('@/assets/proj_icon.webp')" alt="TileMap3D Editor" title="TileMap3D">
        </a>
        <p>
          The main purpose of this project is to make improvements to the GridMap under the name of TileMap3D. GridMap is a node used in Godot to make tile-based 3D maps. A more in-depth explanation of what is intended with this project can be found in the <a href="https://github.com/godotengine/godot-proposals/issues/3518" target="_blank">Godot proposals</a>. The main idea is to make TileMap3D a more flexible, useful and extensible version of GridMap.
        </p>
      </div>
    </div>
    <div class="proj-card">
      <div class="proj-card-title">
        <h3><a href="https://github.com/rafallus/ClickCircle" target="_blank">Click the Circles</a></h3>
        <a href="https://github.com/rafallus/ClickCircle" target="_blank" class="on-github">
          Available on GitHub
          <img :src="require('@/assets/icons/github.svg')" alt="" title="" />
        </a>
      </div>
      <div class="proj-card-content">
        <a href="https://github.com/rafallus/ClickCircle" target="_blank">
          <img :src="require('@/assets/proj_icon.webp')" alt="Click the Circles Video Game" title="Click the Circles">
        </a>
        <p>
          This is a very simple, GUI based, open source video game. The goal is to click on the circles of the same color as the reference. This is done to show basic concepts of a Godot video game implementation.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.proj-card {
  background-color: var(--tertiary);
  padding: 1em 3em 1em 3em;
  border-radius: 8px;
  margin: 0 auto 3em auto;
}

.proj-card .proj-card-title {
  display: flex;
  justify-content: space-between;
}

.proj-card .proj-card-title a {
  color: var(--light);
}

.proj-card .proj-card-title .on-github {
  font-size: 0.8em;
  color: gray;
}

.proj-card .proj-card-title .on-github img {
  width: 16px;
  filter: opacity(50%);
}

.proj-card .proj-card-content {
  margin-top: 1em;
  display: flex;
}

.proj-card .proj-card-content p {
  margin-left: 2em;
}
</style>