<script lang="ts">
  import { historyData, type HistoryEvent } from '$lib/data/historyData';
  import YouTube from '$lib/components/YouTube.svelte';
</script>

<div class="container mx-auto p-4">
  <h1 class="text-4xl font-bold text-center my-8">History</h1>

  <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
    {#each historyData as event, i}
      <li>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div
          class:timeline-start={i % 2 === 0}
          class:md:text-end={i % 2 === 0}
          class:timeline-end={i % 2 !== 0}
          class="mb-10"
        >
          <time class="font-mono italic">{event.date}</time>
          <div class="text-lg font-black">{event.title}</div>
          {#if event.description}
            <p>{event.description}</p>
          {/if}
          {#if event.image}
            <img src={event.image} alt={event.title} class="rounded-lg shadow-xl my-4" />
          {/if}
          {#if event.youtubeId}
            <div class="my-4">
              <YouTube id={event.youtubeId} />
            </div>
          {/if}
        </div>
        <hr />
      </li>
    {/each}
  </ul>
</div>
