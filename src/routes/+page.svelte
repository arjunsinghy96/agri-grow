<script lang="ts">
  import type { PageData } from './$types';
  import image from '../assets/images/fancy-plant.png?url&enhanced';
  import { appName } from '$lib/constants';

  export let data: PageData;
</script>

<svelte:head>
  <title>Welcome to AgriGrow</title>
</svelte:head>

<h1 class="text-center font-semibold text-3xl md:text-5xl mt-5 px-2">
  Welcome to <span class="text-nowrap">{appName}</span>
</h1>
<enhanced:img src={image} alt="An alt text" class="mx-auto my-10" />

<ul class="container grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-x-5 gap-y-10 my-10 px-5">
  {#each data.definitions as definition}
    <li id={definition.slug} class="p-5 rounded-md border border-zinc-800 hover:shadow-4">
      <h2 class="text-xl md:text-2xl inline mb-2 flex font-bold min-h-12 border-b border-zinc-700">
        {definition.title}
      </h2>
      <p class="text-md pt-3">{definition.description}</p>
    </li>
  {/each}
</ul>
