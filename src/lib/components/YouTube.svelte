<script lang="ts">
  export let id: string;
  let isLoaded = false;

  function handleImageError(e: Event) {
    const img = e.currentTarget as HTMLImageElement;
    img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  }
</script>

<div class="aspect-video relative w-full h-full bg-slate-900 overflow-hidden rounded-xl">
  {#if isLoaded}
    <iframe
      title="YouTube video player"
      src="https://www.youtube.com/embed/{id}?autoplay=1"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="w-full h-full"
    ></iframe>
  {:else}
    <button
      class="w-full h-full relative group cursor-pointer"
      aria-label="Play video"
      on:click={() => (isLoaded = true)}
    >
      <img
        src="https://i.ytimg.com/vi/{id}/maxresdefault.jpg"
        alt="YouTube Thumbnail"
        class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        loading="lazy"
        decoding="async"
        on:error={handleImageError}
      />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="size-16 rounded-full bg-primary/90 flex items-center justify-center text-white shadow-xl shadow-primary/30 transform group-hover:scale-110 transition-transform">
          <span class="material-symbols-outlined text-4xl fill-1">play_arrow</span>
        </div>
      </div>
    </button>
  {/if}
</div>
