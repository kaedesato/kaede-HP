<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="container mx-auto p-4">
	<h1 class="text-4xl font-bold text-center my-8">おすすめ商品</h1>

	<div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		{#each data.products as product}
			<div class="card bg-base-100 shadow-xl">
				{#if product.ogImage?.[0]?.url}
					<figure>
						<img src={product.ogImage[0].url} alt={product.ogTitle ?? '商品画像'} />
					</figure>
				{/if}
				<div class="card-body">
					<h2 class="card-title">
						{product.ogTitle ?? 'タイトル不明'}
					</h2>
					<p>{product.ogDescription ?? '説明がありません。'}</p>
					<div class="card-actions justify-end">
						<a href={product.requestUrl} target="_blank" rel="noopener noreferrer" class="btn btn-primary">
							Amazonで見る
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
