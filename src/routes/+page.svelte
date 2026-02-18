<script lang="ts">
    import { onMount } from 'svelte';
    import { getChannelData, type YouTubeVideo } from '../lib/utils/youtube';

    let isLive = false;
    let latestVideo: YouTubeVideo | null = null;
    let isLoading = true;
    let videoUrl = 'https://youtube.com/@kaede_vtuber';

    onMount(async () => {
        const data = await getChannelData('UCOl7immiG7B_KWFfeywmRWQ');
        isLive = data.isLive;
        latestVideo = data.latestVideo;
        isLoading = false;

        if (isLive) {
            videoUrl = `https://www.youtube.com/channel/UCOl7immiG7B_KWFfeywmRWQ/live`;
        }
    });
</script>

<svelte:head>
    <title>佐藤かえで 公式サイト</title>
</svelte:head>


<div class="pb-32">
    <!-- Hero Section -->
    <section class="relative px-6 py-12 flex flex-col items-center text-center overflow-hidden">
        <!-- Glow effect -->
        <div class="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-lg aspect-square bg-[radial-gradient(circle_at_center,rgba(0,139,139,0.15)_0%,transparent_70%)] -z-10"></div>

        <!-- Live Badge -->

        {#if isLive}
        <div class="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-5 py-2 rounded-full mb-10 shadow-[0_0_20px_rgba(255,122,112,0.15)]">
            <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span class="text-primary text-[10px] font-black tracking-[0.2em]">LIVE NOW</span>
        </div>
        {:else}
        <div class="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 px-5 py-2 rounded-full mb-10">
            <span class="relative flex h-2 w-2">
                <span class="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
            </span>
            <span class="text-slate-400 text-[10px] font-black tracking-[0.2em]">OFFLINE</span>
        </div>
        {/if}


        <h2 class="text-4xl md:text-6xl font-black leading-tight mb-10 tracking-tight max-w-3xl text-white">
            多才な<span class="text-cyan-glow">異能</span>VTuber、<br/>
            世界を<span class="text-primary">かえで</span>色に。
        </h2>

        <!-- Image Card -->
        <div class="relative w-full max-w-[360px] aspect-[4/5] mb-12 group">
             <div class="absolute -inset-10 bg-cyan-glow/10 rounded-full blur-3xl opacity-30"></div>
             <div class="relative h-full w-full rounded-2xl overflow-hidden border-2 border-cyan-glow/20 bg-bg-card shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                    alt="佐藤かえで"
                    class="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq7SXNDbg_aivCqZ_Q4HhhNO1IiNO8gk5DrK7mznbc2uDppsptUeA_441eyX9S4uHgPO-pDqcWbPwKo7wGdAwu3D3qIFrKbrCZBhR4P0XjyO8orembSbHkCu-Mj4oB91C5WhR4Vb2_Wr-LLZGWYpxB1Tkr4oiFNdUb9f0VD8CH3OVeGo0qLaWtxOOCxG7vIP70V2RSuU7Pg-GCe4NGpyhNQZP1SseMqaNvWVD7Hm2gvBnki5lmhJAW0IPvJjw0RePvnNWLTTjSYo53"
                />
                <div class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent">
                    <p class="text-primary font-black text-2xl tracking-[0.1em] drop-shadow-md">SATO KAEDE</p>
                </div>
             </div>
             <!-- Sparkles -->
             <span class="material-symbols-outlined absolute -top-8 -right-6 text-primary filter drop-shadow-[0_0_5px_rgba(255,122,112,1)] text-5xl animate-pulse">star</span>
             <span class="material-symbols-outlined absolute bottom-1/4 -left-12 text-cyan-glow/30 text-4xl">eco</span>
        </div>

        <div class="max-w-lg mb-12 space-y-6">
            <p class="text-lg font-medium leading-relaxed text-slate-400 px-4">
                勉強、Linux、天文学、そして手話。多岐にわたる知識を持つ一方で、教祖やサイコパスな一面も併せ持つ「佐藤かえで」。
            </p>
            <div class="flex flex-wrap justify-center gap-3 px-6">
                <span class="bg-cyan-glow/10 text-cyan-glow text-[12px] font-bold px-4 py-1.5 rounded-full border border-cyan-glow/20">#Linux</span>
                <span class="bg-cyan-glow/10 text-cyan-glow text-[12px] font-bold px-4 py-1.5 rounded-full border border-cyan-glow/20">#Astronomy</span>
                <span class="bg-cyan-glow/10 text-cyan-glow text-[12px] font-bold px-4 py-1.5 rounded-full border border-cyan-glow/20">#Sign Language</span>
                <span class="bg-primary/10 text-primary text-[12px] font-bold px-4 py-1.5 rounded-full border border-primary/20">#Cult Leader</span>
            </div>
        </div>

        <div class="w-full max-w-sm flex flex-col gap-4 px-4">
            <a href={videoUrl} class="w-full bg-primary text-white font-black py-4 rounded-xl text-lg shadow-lg shadow-primary/20 transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2">
                 <span class="material-symbols-outlined">play_circle</span>
                YouTubeで配信を視聴
            </a>
            <a href="https://discord.com" class="w-full bg-[#5865F2] text-white font-black py-4 rounded-xl text-lg shadow-lg shadow-[#5865F2]/20 transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2">
                <span class="material-symbols-outlined">forum</span>
                Discordに参加する
            </a>
        </div>
    </section>

    <!-- Latest Stream -->
    <section class="px-6 py-20 border-y border-white/5 bg-slate-900/40">
        <div class="max-w-5xl mx-auto">
            <div class="flex items-end justify-between mb-10">
                <div>
                    <h3 class="text-2xl font-black flex items-center gap-3 text-white">
                        最新の配信
                        <span class="material-symbols-outlined text-cyan-glow">rocket_launch</span>
                    </h3>
                    <div class="h-1.5 w-16 bg-primary rounded-full mt-3 shadow-[0_0_8px_rgba(255,122,112,0.5)]"></div>
                </div>
                <a href="https://youtube.com/@kaede_vtuber/videos" class="text-primary text-xs font-bold flex items-center gap-1 bg-primary/10 px-4 py-2 rounded-full hover:bg-primary/20 transition-all">
                    VIEW ALL <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>


            {#if latestVideo}
            <a href={latestVideo.link} target="_blank" rel="noreferrer" class="block relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer bg-bg-card">
                <img
                    alt={latestVideo.title}
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={latestVideo.thumbnail}
                />
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                    <div class="size-20 rounded-full bg-primary/90 flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-5xl fill-1 text-white">play_arrow</span>
                    </div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-bg-dark via-bg-dark/90 to-transparent">
                    <p class="text-xl font-black truncate text-white">{latestVideo.title}</p>
                    <div class="flex items-center gap-3 mt-3">
                        <span class="text-xs bg-primary text-white px-2 py-0.5 rounded font-black">NEW</span>
                        <p class="text-xs text-white/50 font-bold">{new Date(latestVideo.pubDate).toLocaleDateString('ja-JP')} • Latest</p>
                    </div>
                </div>
            </a>
            {:else}
             <div class="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-bg-card animate-pulse flex items-center justify-center">
                <span class="text-white/20 font-bold">Fetching latest stream...</span>
            </div>
            {/if}

        </div>
    </section>

    <!-- Activities -->
    <section class="px-6 py-20 space-y-16 max-w-5xl mx-auto">
        <div class="bg-bg-card p-8 md:p-12 rounded-2xl border border-cyan-glow/10 shadow-[0_0_20px_rgba(255,122,112,0.05)] relative overflow-hidden">
             <div class="relative z-10">
                <h3 class="text-2xl font-black mb-10 flex items-center gap-3 text-white">
                    活動領域
                    <span class="material-symbols-outlined text-primary text-2xl">dashboard</span>
                </h3>
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {#each [
                        { icon: 'school', en: 'Study', jp: '学習・研究' },
                        { icon: 'terminal', en: 'Tech', jp: 'Linux開発' },
                        { icon: 'public', en: 'Space', jp: '天文学講義' },
                        { icon: 'diversity_3', en: 'Cult', jp: '秘密結社' }
                    ] as item}
                        <div class="bg-cyan-glow/5 p-8 rounded-xl border border-cyan-glow/10 flex flex-col items-center text-center hover:bg-cyan-glow/10 transition-colors group cursor-pointer">
                            <span class="material-symbols-outlined text-cyan-glow mb-4 text-4xl group-hover:scale-110 transition-transform">{item.icon}</span>
                            <p class="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{item.en}</p>
                            <p class="text-base font-black text-white">{item.jp}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>

        <!-- Bottom Grid -->
        <div class="grid lg:grid-cols-2 gap-8">
            <div class="bg-primary/5 p-12 rounded-2xl border border-primary/20 relative overflow-hidden group">
                <div class="relative z-10">
                    <div class="flex items-center gap-3 mb-6">
                        <span class="material-symbols-outlined text-primary text-4xl">shopping_basket</span>
                        <h3 class="text-3xl font-black text-white">限定グッズ</h3>
                    </div>
                    <p class="text-lg text-white/70 mb-12 font-medium">ここでしか手に入らない、教団公式アイテムが登場。</p>
                    <a href="/shop" class="block w-full text-center bg-primary text-white font-black py-5 rounded-xl text-lg shadow-lg shadow-primary/20 hover:brightness-110 transition-all active:scale-95">
                        公式ショップを見る
                    </a>
                </div>
                <span class="material-symbols-outlined absolute -bottom-10 -right-10 text-[16rem] text-primary/5 -rotate-12 group-hover:rotate-0 transition-transform duration-500 select-none">shopping_bag</span>
            </div>

             <div class="bg-[#5865F2]/5 border border-[#5865F2]/20 p-12 rounded-2xl text-center relative overflow-hidden group">
                <div class="size-24 bg-[#5865F2] rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-[#5865F2]/20 relative z-10">
                    <span class="material-symbols-outlined text-white text-6xl">forum</span>
                </div>
                <h3 class="text-3xl font-black mb-6 relative z-10 text-white">信者コミュニティ</h3>
                <p class="text-lg text-white/60 mb-12 font-medium relative z-10">4万人以上の仲間と繋がろう</p>
                <a href="https://discord.com" class="block w-full bg-[#5865F2] text-white font-black py-5 rounded-xl text-lg transition-all hover:brightness-110 active:scale-95 relative z-10">
                    Discordに参加する
                </a>
                <span class="material-symbols-outlined absolute top-4 right-4 text-white/5 text-[10rem] transition-opacity group-hover:opacity-10 select-none">groups</span>
            </div>
        </div>
    </section>
</div>
