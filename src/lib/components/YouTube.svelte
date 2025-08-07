<script lang="ts">
  export let id: string;
</script>

<div class="aspect-w-16 aspect-h-9">
  <iframe
    title="YouTube video player"
    src="https://www.youtube.com/embed/{id}"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    class="w-full h-full"
  ></iframe>
</div>
