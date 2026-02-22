<script lang="ts">
  export let id: string;
  export let title: string = "YouTube video player";
  let isLoaded = false;
</script>

<div class="aspect-video w-full bg-slate-900 relative rounded-xl overflow-hidden group">
  {#if !isLoaded}
    <button
      class="absolute inset-0 w-full h-full flex items-center justify-center group-hover:bg-white/5 transition-colors cursor-pointer"
      aria-label="Play video: {title}"
      on:click={() => (isLoaded = true)}
    >
      <img
        src="https://i.ytimg.com/vi/{id}/maxresdefault.jpg"
        alt={title}
        class="absolute inset-0 w-full h-full object-cover -z-10 opacity-80 group-hover:opacity-100 transition-opacity"
      />
      <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
        <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </button>
  {:else}
    <iframe
      {title}
      src="https://www.youtube.com/embed/{id}?autoplay=1"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="w-full h-full"
    ></iframe>
  {/if}
</div>
