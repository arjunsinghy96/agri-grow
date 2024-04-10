<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Welcome to AgriGrow</title>
</svelte:head>

<h1 class="text-center font-semibold text-xl mt-5">Welcome to AgriGrow</h1>

<ul class="container max-w-xl mx-auto px-5 list-inside my-10">
  {#each data.definitions as definition}
    <li id={definition.slug} class="mb-5 list-decimal">
      <h2 class="text-lg underline inline mb-3">{definition.title}</h2>
      <p class="text-justify text-sm pt-3">{definition.description}</p>
    </li>
  {/each}
</ul>
