<script>
  import { appName } from '$lib/constants';
  import '../app.css';
</script>

<header class="p-5 border-b border-zinc-700">
  <span class="py-1 rounded px-2 bg-zinc-900">{appName}</span>
</header>
<slot />
<footer class="p-5 text-center border-t border-zinc-700">
  Copyright © {new Date().getFullYear()} <span>{appName}</span>
</footer>

<style lang="postcss">
  :global(html) {
    @apply bg-zinc-900 text-zinc-200;
    font-family: 'Poppins', Verdana, Geneva, Tahoma, sans-serif;
  }
</style>
