<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let data;

	onMount(() => {
		if (browser && 'serviceWorker' in navigator) {
			window.addEventListener('load', () => {
				navigator.serviceWorker.register('/service-worker.js');
			});
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>
