<script lang="ts">
  /**
   * Performance Optimization:
   * Uses a facade pattern to load a lightweight thumbnail image initially.
   * The heavy YouTube iframe is only loaded when the user clicks the play button,
   * significantly reducing initial page load time and resource usage.
   */
  export let id: string;
  let isPlaying = false;
</script>

<div class="aspect-w-16 aspect-h-9">
  {#if isPlaying}
    <iframe
      title="YouTube video player"
      src="https://www.youtube.com/embed/{id}?autoplay=1"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="w-full h-full rounded-xl"
    ></iframe>
  {:else}
    <button
      type="button"
      class="w-full h-full relative group cursor-pointer overflow-hidden rounded-xl bg-black"
      on:click={() => (isPlaying = true)}
      aria-label="Play video"
    >
      <img
        src="https://i.ytimg.com/vi/{id}/hqdefault.jpg"
        alt="Video thumbnail"
        class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
      />
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="material-symbols-outlined text-7xl text-white drop-shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
          play_circle
        </span>
      </div>
    </button>
  {/if}
</div>
