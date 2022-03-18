<script>
  import {pokemon} from "../stores/stores.js"
  console.log($pokemon)
</script>

<svelte:head>
  <title>Pokedex</title>
</svelte:head>

<h1>Pokedex Demo</h1>

{#each $pokemon as pokeman}
<p>{pokeman.name}</p>
{/each}
