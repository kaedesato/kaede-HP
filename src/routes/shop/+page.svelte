<script>
    const filters = ['すべて', 'ガジェット', '学習ツール', 'ライフスタイル'];
    let activeFilter = 'すべて';

    const allProducts = [
        {
            name: '集中力UP！勉強用タイマー',
            desc: '「これがないと私の勉強は始まりません！」',
            price: '¥2,980',
            tag: 'Favorite',
            category: '学習ツール',
            tagColor: 'bg-primary',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkXrwH7zqquiSklvstnDbCo9VNHrFZdYVXkixFS9Bz7nRHM-g0iiSl3Ph1ckhxQe2R7a_URZsuW3vaEBVcBp-AEXGAVIIUSu1VwYOagrWoMHFYZNaOZNJXuC90UYHS9Ha6Zp_iecT_C92Y7tOXtofuKObmWHrVXEn0yp63SoLCTWI4ovByrRajdSg1d-D19wbsJ5t23CgiW__ueEGteH-AX5rX128ThbZUYx3lwnCKFn-0JUm9n-MCVsp7nObHbttRlkSZNQ0okNjl'
        },
        {
            name: '愛用メカニカルキーボード',
            desc: '「タイピングの音が心地よくて捗ります。」',
            price: '¥18,500',
            tag: 'Gadget',
            category: 'ガジェット',
            tagColor: 'bg-cyan-glow',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDT4VpBRgXT3dtPZdER51qcSSrFkquj9_COLHAprrTrAZUR5Qsg71cYxKX4aaziAweIuPxu-BU414ypXoDqPfo8iFKpD44w6UvhldT-s5DtPKSIzXyqfeEHGxfEhu109tnBD6Bctu2yCRiZyACAtyam2Xr3Q1Ociz51HQqkMG8aPnkCZbYBePNqYm8whGNpp-enTL1vwDRdw8iPqjEWlv_-H1kQ4CbantXe2QR5uwJTGA4oZ8alK7KK6Gscjl9yI0Qvxcfnk1XtFtFi'
        },
        {
            name: '初心者向け天体望遠鏡',
            desc: '「夜空を眺めるのが最近のマイブームです。」',
            price: '¥42,000',
            tag: 'Hobby',
            category: 'ライフスタイル',
            tagColor: 'bg-indigo-500',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChYCIQ08A1q6z-a2aUaZBMCA6U1deB83u9DuqDbujd2P9JGZLB5fPxvNGK1yTysFIQ6hxjBwMX2W1IojJJhp_ZoSqpIvvsFnnUdAfW-EO-9d42tCdx1_vuD3Cb6w5LNxvg-TCLkEIOeFuYw3N6Rr-4GPV373RXb-MnyfiBgi40KYatPD0Ss9mT5WhBbig4MT_vYjsE3PKf5We84OIuU6y2RTKhIBykOiUc4f4FfPYxDRdQfF5DkVlLggUZuMCHn0mr2tXD6NnZG3J-'
        },
        {
            name: 'かえで式 勉強管理ノート',
            desc: '「計画を立てるのが楽しくなる一冊。」',
            price: '¥1,200',
            tag: 'Stationery',
            category: '学習ツール',
            tagColor: 'bg-emerald-500',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgBCUKslvrmRvighW3p10pgnOZfr1e6kJpxmfnfj6_CXHDFaC9ICx3nj4oZKY6oAGbWVSflbhZYdLPNTkslFWY_qh0Fm6mc0YdOgOT_AHLIcZBUT57XdeTpQZTXdG48sIYyHaW1ifqsgkWCNzbVH1x7xVNORTx7ckUaQWgNwWFlUwlggYak5RQG2LuwX63F-FPQp6UTcAGbyOEioalFFWxZxvJWwBZVEMKIxoNW6i_xZ_xNdfQuZPsnohu2NxXwMd8nBR7tBv3QYNu'
        }
    ];

    $: products = activeFilter === 'すべて'
        ? allProducts
        : allProducts.filter(p => p.category === activeFilter);
</script>

<svelte:head>
    <title>佐藤かえで | おすすめ商品</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-12">
    <section class="mb-12">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[12px] font-extrabold tracking-widest mb-6">
            <span class="relative flex h-2 w-2">
                <span class="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            RECOMMENDED ITEMS
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
            佐藤かえで<span class="text-primary">おすすめ</span>
        </h2>
        <p class="text-base text-slate-400 leading-relaxed max-w-2xl font-medium">
            配信で使用しているデバイスや、日々の勉強を支える文房具など、佐藤かえでが実際に使って良かったアイテムを厳選してご紹介します。
        </p>
    </section>

    <section class="mb-10 overflow-x-auto scrollbar-hide flex gap-4 pb-2">
        {#each filters as filter}
            <button
                class="shrink-0 px-7 py-2.5 rounded-full font-bold text-sm transition-colors {activeFilter === filter ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-800/50 border border-white/5 text-slate-300 hover:border-primary hover:text-white'}"
                on:click={() => activeFilter = filter}
            >
                {filter}
            </button>
        {/each}
    </section>

    <section class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
        {#each products as product, i}
            <div class="flex flex-col rounded-2xl overflow-hidden bg-bg-card group transition-transform duration-300 hover:-translate-y-1 shadow-xl hover:shadow-primary/10 border border-white/5">
                <div class="relative aspect-[4/5] overflow-hidden">
                    <img alt={product.name} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={product.img} loading={i > 1 ? "lazy" : "eager"} decoding={i > 1 ? "async" : "auto"}/>
                    <div class="absolute top-4 left-4 {product.tagColor} text-white text-[11px] font-black px-3 py-1.5 rounded-lg shadow-xl uppercase tracking-wider">
                        {product.tag}
                    </div>
                </div>
                <div class="p-5 flex flex-col flex-grow">
                    <h3 class="text-base font-black text-white mb-2 line-clamp-1">{product.name}</h3>
                    <p class="text-xs text-white/70 mb-4 line-clamp-2 font-medium italic">{product.desc}</p>
                    <div class="mt-auto">
                        <div class="flex items-center justify-between mb-4">
                            <p class="text-lg font-black text-white">{product.price}</p>
                        </div>
                        <button class="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
                            <span class="material-symbols-outlined text-sm">shopping_cart</span>
                            詳細を見る
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    </section>

    <section class="bg-bg-card/20 rounded-3xl p-10 border border-white/5 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-20 -mt-20"></div>
        <div class="relative z-10 grid md:grid-cols-2 items-center gap-12">
            <div>
                <h2 class="text-3xl font-black text-white mb-4">配信で紹介したアイテムをチェック！</h2>
                <p class="text-base text-slate-400 mb-8 leading-relaxed font-medium">
                    デスクセットアップの全貌や詳しい使い方は、YouTubeの紹介動画からチェックできます。お部屋作りの参考にしてみてくださいね。
                </p>
                <button class="px-10 py-4 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 transition-all flex items-center gap-3 w-fit">
                    <span class="material-symbols-outlined">play_circle</span>
                    紹介動画を再生する
                </button>
            </div>
            <div class="relative w-full">
                <div class="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group cursor-pointer">
                    <img alt="Video Thumbnail" class="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgBCUKslvrmRvighW3p10pgnOZfr1e6kJpxmfnfj6_CXHDFaC9ICx3nj4oZKY6oAGbWVSflbhZYdLPNTkslFWY_qh0Fm6mc0YdOgOT_AHLIcZBUT57XdeTpQZTXdG48sIYyHaW1ifqsgkWCNzbVH1x7xVNORTx7ckUaQWgNwWFlUwlggYak5RQG2LuwX63F-FPQp6UTcAGbyOEioalFFWxZxvJWwBZVEMKIxoNW6i_xZ_xNdfQuZPsnohu2NxXwMd8nBR7tBv3QYNu" loading="lazy" decoding="async"/>
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div class="size-20 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 scale-90 group-hover:scale-100 transition-transform">
                            <span class="material-symbols-outlined text-5xl fill-1">play_arrow</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
