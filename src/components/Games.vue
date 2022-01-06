<template>
    <div class="games container">
        <h2>Published Games</h2>
        <iframe src="https://store.steampowered.com/widget/980160/UBERCOLD/" frameborder="0" width="646" height="190"></iframe>
        <iframe src="https://itch.io/embed/917612" width="552" height="167" frameborder="0">
            <a href="https://pplgg.itch.io/right-knight"> Right Knight by pplgg</a>
        </iframe>
    </div>
</template>

<script>
export default {
name: 'Games',
setup() {
  }
}
</script>

<style>
.games iframe {
    display: block;
    margin: 2em auto 2em auto;
}
</style>