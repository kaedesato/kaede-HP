<script>
    const tabs = ['すべて', '公式イラスト', 'ファンアート', '動画アーカイブ'];
    let activeTab = 'すべて';

    const posts = [
        {
            id: 1,
            type: 'image',
            category: '公式イラスト',
            author: {
                name: '佐藤かえで',
                handle: '@kaede_official',
                avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmkN9FZ8_j6VmdRbVuP_Km3X3XApzRisE2RA5esTA5le8PxDHLPA45JsvIcdgpjtFqoarKEDPutp4BrfKQz359S4pS6eYmd3gGy1R43VSTWRLuMsjUnUItVJEB09CctURpaVtimI6udHT2LRTfsEVZovOPLw5ZFmRKE5Nt8WTqX8_Z-hTIFCD0wLHg1D4h9gIvvb2Df1lpDkjrS9VJUxxD9IyfHNTDJWIQdR73HmEXtXrU-osVwhgmoHt8lLenUAoGcRXJ-nEdnxg0',
                verified: true,
                time: '2時間前'
            },
            content: {
                text: 'ミッドナイト・レゾナンスのメイン衣装がついに公開されました！🌙✨ 今回のデザインは星空をイメージしています。',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmkN9FZ8_j6VmdRbVuP_Km3X3XApzRisE2RA5esTA5le8PxDHLPA45JsvIcdgpjtFqoarKEDPutp4BrfKQz359S4pS6eYmd3gGy1R43VSTWRLuMsjUnUItVJEB09CctURpaVtimI6udHT2LRTfsEVZovOPLw5ZFmRKE5Nt8WTqX8_Z-hTIFCD0wLHg1D4h9gIvvb2Df1lpDkjrS9VJUxxD9IyfHNTDJWIQdR73HmEXtXrU-osVwhgmoHt8lLenUAoGcRXJ-nEdnxg0',
                tags: ['#佐藤かえで', '#VTuber', '#新衣装']
            },
            stats: { likes: '1.2k', comments: '84' }
        },
        {
            id: 2,
            type: 'video',
            category: 'ファンアート',
            badge: 'FAN ART',
            author: {
                name: 'カエデ応援団',
                handle: '@fan_artist_01',
                time: '5時間前',
                avatar: null // Use default icon
            },
            content: {
                title: '【切り抜き】3Dデビューで感極まって泣いちゃうカエデ様',
                desc: '最高に感動したシーンをまとめました。これからもずっと応援し続けます！',
                thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5nkm7Ue4F89hA1CC3MiwCxvuDVioq4GLpDGx7K6TZCsvEzAEXrSN3W7YgVAHkctMoIQS9trSKOjZF3e71eGVRlJE3dRn60CDWAJ8KCozCPFucAyf1PKRbK7qRtKVscAkIcdR6BdRSJMge3uy1eZ54Jgb_tl6IiCQfEATxGun1BrgtG-woymh-J2F7k4b9bYqqB1s9ApGYZKtT1mt_0HX1VrAlccI1_f2qu3qBbMVx3MsTl-q2qfhGqs7uyXsoh-CvV0BL7igG_omI',
                duration: '03:45'
            },
            stats: { likes: '856', shares: '120' }
        },
        {
            id: 3,
            type: 'album',
            category: '公式イラスト',
            author: {
                name: '佐藤かえで',
                handle: '@kaede_official',
                avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmkN9FZ8_j6VmdRbVuP_Km3X3XApzRisE2RA5esTA5le8PxDHLPA45JsvIcdgpjtFqoarKEDPutp4BrfKQz359S4pS6eYmd3gGy1R43VSTWRLuMsjUnUItVJEB09CctURpaVtimI6udHT2LRTfsEVZovOPLw5ZFmRKE5Nt8WTqX8_Z-hTIFCD0wLHg1D4h9gIvvb2Df1lpDkjrS9VJUxxD9IyfHNTDJWIQdR73HmEXtXrU-osVwhgmoHt8lLenUAoGcRXJ-nEdnxg0',
                verified: true,
                time: '昨日'
            },
            content: {
                text: '秋の新作イラスト集を公開しました！🍂🍁',
                images: [
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuCYo_jGlhzXYZZv5bi2Mo_WeOwUsEmbFAo6wLCMBNxmwkH_d9xqkwLRjZxlb-38xDI_AIasy7gjKz9YUAmEh-4-XzQBUnpZA-qx-lMYRvv83O1whCcpeysqWSe-8FY9nVmxJsqVl2-4s4VKv24A0MHZ4NCfG1_i8QZevHZfKADo124wsOuALL6Twxbyfz5vGZuxbU2Xurm_wTP-ssX5Pz9dsKarKIasNAA0GgyS6pY_4lkDtBuWAIufHZKiJbCNwG2Mv-LKB1xR79Vk',
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuB-jFsAkqAZEquxEq5Asi1q9w9SUNK8KUVez4R8VgLEodBxHEw-TJiG8JggezB8Pa_Dlrka1hHPq-Yo-U1azyl0QbkQd3GuobnNe_iaKgKFGps1THGYI1fNpyS-Dl9MA376d1W9XleAanTlgdtCrJm9Sx6Malukgy1KeYPOLMu3zvIaMF13weRzErlbQ2eXOSOko35_NjVG_-1oNBiTnnJXPnKxnmGYKvmy4W5AwBrybY-hMzm5SFjyhmxfnyhgmBGmVvmaaOM6OGQ9',
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuAhKxSIcc_5ugndie8t-owzqUggJvFxWyYz3vT4RRoJaITITB1V4KIjzoU2gyqE0473vqlr53rpBBDQTQIX95PPF0jWPeDbxUg8CHppAa5qcI9_Hq3xEUU45BdjXPpzUnW0JsrYyZYoCGxURUGsyiNWTKQh58zIMwqUqmqVOPPZQIVttIC9y9t1FevcLftZjWss6JBA_gtftkUo9qNq6ee8dP3Czv-6Wu1JrmLZthqCZxFTZBSdjSEYWpoAGpyHzxobj1PtJ-dHIhkF',
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuC3TckKhf2Z3-XEwF_rd8V5TVJp6igFObhpqlARntUWSJXHWwO5bepYZsOROvYBtrjbn7j4hslpG7IU9HMAlKe9JI7_JT-PEmrdBUrbj0bSYXO27Z1DLry0NOEFzvlBbBLwY3_qTILXhPelBNIoYn2wuxJitJp97YpfgSR2Hobxbv3jj-ZI0yifj0LnhbeaE1xye9q0o38w2EVmXseWxofgYzCHCdgDBlH6jkVz1bp-iEC8geO4codMAmTQQfAKzuFz8ByLpoOsvBYq'
                ]
            }
        }
    ];

    $: filteredPosts = activeTab === 'すべて'
        ? posts
        : posts.filter(p => p.category === activeTab);
</script>

<svelte:head>
    <title>佐藤かえで | ギャラリー</title>
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-8">
    <!-- Filters -->
    <div class="mb-8">
        <div class="flex overflow-x-auto pb-4 gap-3 scrollbar-hide">
            {#each tabs as tab}
                <button
                    class="whitespace-nowrap px-6 py-2 rounded-full text-xs font-bold transition-all {activeTab === tab ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 hover:border-primary/50'}"
                    on:click={() => activeTab = tab}
                >
                    {tab}
                </button>
            {/each}
        </div>
    </div>

    <div class="flex flex-col gap-6">
        {#each filteredPosts as post}
            <article class="bg-bg-card border border-white/5 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:border-primary/40">
                <!-- Header -->
                <div class="p-4 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="size-10 rounded-full border border-slate-600 bg-slate-700 flex items-center justify-center overflow-hidden">
                            {#if post.author.avatar}
                                <img alt="Avatar" class="w-full h-full object-cover" src={post.author.avatar}/>
                            {:else}
                                <span class="material-symbols-outlined text-slate-400">person</span>
                            {/if}
                        </div>
                        <div>
                            <div class="flex items-center gap-1">
                                <span class="text-sm font-bold text-white">{post.author.name}</span>
                                {#if post.author.verified}
                                    <span class="material-symbols-outlined text-primary text-[14px] fill-1">verified</span>
                                {/if}
                            </div>
                            <span class="text-[10px] text-slate-400">{post.author.handle} • {post.author.time}</span>
                        </div>
                    </div>
                    {#if post.badge}
                        <span class="bg-primary/10 text-primary text-[10px] px-2.5 py-1 rounded-full font-bold border border-primary/20">{post.badge}</span>
                    {:else}
                        <button class="text-slate-400 hover:text-primary"><span class="material-symbols-outlined">more_horiz</span></button>
                    {/if}
                </div>

                <!-- Content -->
                {#if post.type === 'image'}
                    <div class="aspect-square w-full bg-slate-900">
                        <img alt="Main Post" class="w-full h-full object-cover" src={post.content.image}/>
                    </div>
                    <div class="p-4">
                        <div class="flex items-center gap-5 mb-4">
                            <button class="flex items-center gap-1.5 text-primary">
                                <span class="material-symbols-outlined fill-1">favorite</span>
                                <span class="text-xs font-bold">{post.stats.likes}</span>
                            </button>
                            <button class="flex items-center gap-1.5 text-slate-300 hover:text-primary transition-colors">
                                <span class="material-symbols-outlined">chat_bubble</span>
                                <span class="text-xs font-bold">{post.stats.comments}</span>
                            </button>
                            <button class="flex items-center gap-1.5 text-slate-300 hover:text-primary transition-colors">
                                <span class="material-symbols-outlined">share</span>
                            </button>
                            <button class="flex items-center gap-1 text-slate-300 ml-auto hover:text-primary transition-colors">
                                <span class="material-symbols-outlined">bookmark</span>
                            </button>
                        </div>
                        <p class="text-sm leading-relaxed mb-3 text-slate-200">
                            {post.content.text}
                        </p>
                        {#if post.content.tags}
                            <div class="flex flex-wrap gap-3">
                                {#each post.content.tags as tag}
                                    <span class="text-primary text-xs font-medium hover:underline cursor-pointer">{tag}</span>
                                {/each}
                            </div>
                        {/if}
                    </div>
                {:else if post.type === 'video'}
                    <div class="relative aspect-video w-full bg-slate-900 group cursor-pointer">
                        <img alt="Video Content" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src={post.content.thumbnail}/>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="size-16 rounded-full bg-primary/90 flex items-center justify-center text-white shadow-xl shadow-primary/30 transform group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-4xl fill-1">play_arrow</span>
                            </div>
                        </div>
                        <div class="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-[10px] font-bold text-white backdrop-blur-md border border-white/10">{post.content.duration}</div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-sm font-bold mb-2 text-white">{post.content.title}</h3>
                        <p class="text-xs text-slate-400 mb-4 leading-relaxed">
                            {post.content.desc}
                        </p>
                        <div class="flex items-center gap-5">
                            <button class="flex items-center gap-1.5 text-slate-300 hover:text-primary transition-colors"><span class="material-symbols-outlined">favorite</span><span class="text-xs font-bold">{post.stats.likes}</span></button>
                            <button class="flex items-center gap-1.5 text-slate-300 hover:text-primary transition-colors"><span class="material-symbols-outlined">repeat</span><span class="text-xs font-bold">{post.stats.shares}</span></button>
                            <button class="flex items-center gap-1.5 text-slate-300 ml-auto hover:text-primary transition-colors"><span class="material-symbols-outlined">share</span></button>
                        </div>
                    </div>
                {:else if post.type === 'album'}
                    <div class="grid grid-cols-2 gap-0.5 bg-bg-dark">
                        {#each post.content.images as img, i}
                            {#if i < 3}
                                <img alt="Gallery {i}" class="aspect-square object-cover hover:opacity-90 transition-opacity" src={img}/>
                            {:else if i === 3}
                                <div class="relative aspect-square cursor-pointer group">
                                    <img alt="Gallery {i}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" src={img}/>
                                    <div class="absolute inset-0 bg-black/60 group-hover:bg-black/40 flex items-center justify-center transition-colors">
                                        <span class="text-xl font-bold text-white">+{post.content.images.length - 3}</span>
                                    </div>
                                </div>
                            {/if}
                        {/each}
                    </div>
                    <div class="p-4">
                        <p class="text-sm mb-4 text-slate-200">{post.content.text}</p>
                        <button class="w-full py-3 bg-primary/10 border border-primary/30 rounded-lg text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                            <span>アルバムのすべての写真を見る</span>
                            <span class="material-symbols-outlined text-sm">open_in_new</span>
                        </button>
                    </div>
                {/if}
            </article>
        {/each}

        {#if filteredPosts.length === 0}
            <div class="text-center py-20 text-slate-500 font-bold">
                投稿が見つかりませんでした。
            </div>
        {/if}
    </div>

    <!-- Load More -->
    <div class="mt-12 flex flex-col items-center gap-4">
        <button class="group flex flex-col items-center gap-3">
            <p class="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-primary transition-colors">もっと読み込む</p>
            <div class="size-12 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-full text-primary shadow-lg shadow-primary/30 group-hover:bg-slate-700 transition-all transform group-hover:translate-y-1">
                <span class="material-symbols-outlined">expand_more</span>
            </div>
        </button>
    </div>
</div>
