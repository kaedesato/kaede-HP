<script lang="ts">
  export let id: string;
  export let title: string = 'YouTube video player';

  let isPlaying = false;

  function playVideo() {
    isPlaying = true;
  }

  function handleImageError(e: Event) {
    const target = e.currentTarget as HTMLImageElement;
    target.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  }
</script>

<div class="relative aspect-video w-full bg-dark rounded-xl overflow-hidden shadow-lg group">
  {#if !isPlaying}
    <!-- Thumbnail -->
    <img
      src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
      on:error={handleImageError}
      alt={title}
      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
    />

    <!-- Play Button Overlay -->
    <button
      class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors cursor-pointer w-full h-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 rounded-xl"
      aria-label={`Play video: ${title}`}
      on:click={playVideo}
    >
      <div
        class="size-16 rounded-full bg-primary/90 flex items-center justify-center text-white shadow-xl shadow-primary/30 transform group-hover:scale-110 transition-transform"
      >
        <span class="material-symbols-outlined text-4xl fill-1">play_arrow</span>
      </div>
    </button>
  {:else}
    <!-- Iframe -->
    <iframe
      {title}
      src={`https://www.youtube.com/embed/${id}?autoplay=1`}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="w-full h-full"
    ></iframe>
  {/if}
</div>
