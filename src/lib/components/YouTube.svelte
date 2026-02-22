<script lang="ts">
  export let id: string;

  let isLoaded = false;
  let thumbnailUrl = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  let hasError = false;

  function loadVideo() {
    isLoaded = true;
  }

  function handleImageError() {
    if (!hasError) {
        hasError = true;
        thumbnailUrl = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    }
  }
</script>

<div class="aspect-video relative bg-black rounded-xl overflow-hidden shadow-lg group w-full">
  {#if !isLoaded}
    <button
      class="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer group-hover:bg-black/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary z-10 p-0 border-none bg-transparent"
      on:click={loadVideo}
      aria-label="Play video"
    >
      <img
        src={thumbnailUrl}
        alt="Video thumbnail"
        class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        on:error={handleImageError}
        loading="lazy"
      />
      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          class="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm"
        >
          <span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
        </div>
      </div>
    </button>
  {:else}
    <iframe
      title="YouTube video player"
      src="https://www.youtube.com/embed/{id}?autoplay=1"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="w-full h-full"
    ></iframe>
  {/if}
</div>
