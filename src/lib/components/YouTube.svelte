<script lang="ts">
  export let id: string;
  export let title: string = 'YouTube video player';

  let isPlaying = false;
  let hasError = false;

  // Reset state when id changes
  $: {
      id;
      isPlaying = false;
      hasError = false;
  }

  function play() {
    isPlaying = true;
  }

  function handleError() {
    hasError = true;
  }

  $: thumbnailUrl = hasError
    ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
    : `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
</script>

<div class="aspect-video bg-black rounded-lg overflow-hidden relative group">
  {#if !isPlaying}
    <button
      type="button"
      class="w-full h-full block relative cursor-pointer group focus:outline-none focus:ring-2 focus:ring-primary z-10"
      on:click={play}
      aria-label={`Play video: ${title}`}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        loading="lazy"
        on:error={handleError}
      />
      <!-- Play Button Overlay -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
             <svg class="w-8 h-8 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z"/>
             </svg>
        </div>
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
