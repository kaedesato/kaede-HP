<script>
    // No script needed for static layout

    const socialLinks = [
        { name: 'YouTube', id: 'Main Channel', icon: 'play_circle', color: 'text-red-500', bg: 'bg-red-500/10 hover:bg-red-500' },
        { name: 'X (Twitter)', id: '@sato_kaede', icon: 'close', color: 'text-white', bg: 'bg-slate-500/10 hover:bg-white hover:text-bg-dark' },
        { name: 'Bluesky', id: 'Main Feed', icon: 'cloud_queue', color: 'text-blue-500', bg: 'bg-blue-500/10 hover:bg-blue-500' },
        { name: 'Twitch', id: 'Live Stream', icon: 'stadium', color: 'text-purple-500', bg: 'bg-purple-500/10 hover:bg-purple-500' },
        { name: 'Note', id: 'Daily Log', icon: 'edit_note', color: 'text-emerald-500', bg: 'bg-emerald-500/10 hover:bg-emerald-500' },
        { name: 'VRChat', id: 'Profile', icon: 'vrpano', color: 'text-indigo-500', bg: 'bg-indigo-500/10 hover:bg-indigo-500' },
        { name: 'Discord', id: 'Official Hub', icon: 'forum', color: 'text-blue-600', bg: 'bg-blue-600/10 hover:bg-blue-600' },
        { name: 'Zenn', id: 'Tech Blog', icon: 'article', color: 'text-blue-400', bg: 'bg-blue-400/10 hover:bg-blue-400' }
    ];

    const activities = [
        { icon: 'menu_book', text: '勉強配信・勉強法', color: 'text-primary' },
        { icon: 'terminal', text: 'Linux', color: 'text-cyan-glow' },
        { icon: 'cloud', text: '天文気象', color: 'text-primary' },
        { icon: 'front_hand', text: '手話', color: 'text-cyan-glow' },
        { icon: 'church', text: '宗教の教祖', color: 'text-primary' },
        { icon: 'favorite', text: 'サイコパス♡', color: 'text-primary', highlight: true }
    ];

    const details = [
        { label: '誕生日', val: '11月18日', icon: 'cake', color: 'text-primary' },
        { label: '身長', val: '162 cm', icon: 'straighten', color: 'text-cyan-glow' },
        { label: '性格', val: '冷静沈着（狂気）', icon: 'psychology', color: 'text-primary' },
        { label: '血液型', val: 'AB型', icon: 'bloodtype', color: 'text-cyan-glow' }
    ];

    const likes = ['効率的なディレクトリ構造', '満天の星空と積乱雲', '真夜中の静寂'];
    const dislikes = ['無意味な定例会議', '最適化されていないコード', '湿気（髪の広がり）'];
</script>

<svelte:head>
    <title>佐藤かえで | プロフィール</title>
</svelte:head>

<div class="relative max-w-6xl mx-auto px-6 py-12">
    <!-- Background Glows -->
    <div class="fixed top-20 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,122,112,0.12)_0%,rgba(15,23,42,0)_70%)] -z-10 pointer-events-none"></div>
    <div class="fixed bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(34,211,238,0.08)_0%,rgba(15,23,42,0)_60%)] -z-10 pointer-events-none"></div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <!-- Left Column -->
        <div class="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <!-- Profile Image -->
            <section class="relative">
                <div class="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/5 bg-bg-card/40 backdrop-blur-md">
                    <img alt="佐藤かえで" class="w-full h-full object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaoLjoL4xY4fW1R2xC3vf6ql-4v_3xAF2Gz1N962svBU7lEsOBPCiEg576U7tJioSSh6dTtKnrPKIPp9pKyy0dB-Q1TXqUrVaDBCvX_hAmP9L8LeNiAeX6nxwbxkocLPOfgjxDiPL4ZlubVRLlhWF6mEHyeI55J5T4i0HcxZC7-foiQ3CqQXnGaQMAB_6T8CfBSNpiIuaefB0XOLyI38fTPtjzpxVK0QhaE5H47wDDqxuhFIQUXw4x9noFsfJkWq9tHc9LFmyhBijh"/>
                    <div class="absolute bottom-6 left-6 right-6 p-6 bg-bg-card/60 backdrop-blur-md rounded-xl flex items-center justify-between border border-white/20">
                        <div>
                            <p class="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-1">Official VTuber</p>
                            <h1 class="text-3xl font-black text-white tracking-tight">佐藤 かえで</h1>
                        </div>
                        <div class="size-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                            <span class="material-symbols-outlined text-white text-2xl">verified</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Bio -->
            <section class="space-y-4 px-2">
                <div class="flex items-center gap-2 text-primary">
                    <span class="material-symbols-outlined text-base">stars</span>
                    <span class="font-bold tracking-[0.15em] text-xs uppercase">多才な知識欲と狂気の狭間で生きる</span>
                </div>
                <p class="text-slate-300 leading-relaxed text-sm font-medium">
                    勉強法からLinuxのカーネルビルド、天文・気象の観測まで、幅広い知識を持つインテリ系VTuber。しかしその正体は、手話を操り宗教を興す教祖であり、時折見せるサイコパスな一面がリスナーを魅了してやまない。
                </p>
            </section>

            <!-- Links (Bento Grid) -->
            <section class="space-y-6">
                 <h3 class="text-primary text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                    <span class="w-8 h-[2px] bg-primary"></span> リンク・SNS
                </h3>
                <div class="grid grid-cols-2 gap-3">
                    {#each socialLinks as link}
                        <a href="#" class="bg-bg-card/40 backdrop-blur-md p-4 rounded-xl flex items-center gap-3 border border-white/5 hover:border-primary/50 transition-all group shadow-lg hover:shadow-primary/10">
                            <div class="size-10 rounded-lg {link.bg} flex items-center justify-center {link.color} group-hover:text-white transition-all shrink-0">
                                <span class="material-symbols-outlined text-xl">{link.icon}</span>
                            </div>
                            <div class="overflow-hidden">
                                <p class="text-[10px] text-white/40 font-bold uppercase tracking-wider">{link.name}</p>
                                <p class="text-xs font-bold text-white truncate">{link.id}</p>
                            </div>
                        </a>
                    {/each}
                     <a href="#" class="col-span-2 bg-bg-card/40 backdrop-blur-md p-4 rounded-xl flex items-center gap-3 border border-white/5 hover:border-primary/50 transition-all group shadow-lg hover:shadow-primary/10">
                        <div class="size-10 rounded-lg bg-slate-300/10 flex items-center justify-center text-slate-300 group-hover:bg-slate-300 group-hover:text-bg-dark transition-all shrink-0">
                            <span class="material-symbols-outlined text-xl">code</span>
                        </div>
                        <div class="flex-1">
                            <p class="text-[10px] text-white/40 font-bold uppercase tracking-wider">GitHub</p>
                            <p class="text-xs font-bold text-white">Repository & Contributions</p>
                        </div>
                    </a>
                </div>
            </section>
        </div>

        <!-- Right Column -->
        <div class="lg:col-span-7 space-y-12">
            <!-- Activities -->
            <section class="space-y-6">
                 <h3 class="text-primary text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                    <span class="w-8 h-[2px] bg-primary"></span> 活動カテゴリー
                </h3>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                     {#each activities as item}
                         <div class="bg-bg-card/40 backdrop-blur-md p-5 rounded-xl flex flex-col gap-3 items-start border {item.highlight ? 'border-primary/30 bg-primary/5' : 'border-white/5 hover:border-primary/40'} transition-colors group cursor-pointer shadow-lg hover:shadow-primary/10">
                            <span class="material-symbols-outlined {item.color} {item.highlight ? 'bg-primary/20 group-hover:scale-110' : 'bg-white/5 group-hover:bg-primary group-hover:text-white'} p-2 rounded-lg transition-all">{item.icon}</span>
                            <span class="text-xs font-bold text-white/90">{item.text}</span>
                        </div>
                    {/each}
                </div>
            </section>

            <!-- Details -->
            <section class="space-y-6">
                <h3 class="text-primary text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                    <span class="w-8 h-[2px] bg-primary"></span> プロフィール詳細
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {#each details as item}
                        <div class="bg-bg-card/40 backdrop-blur-md p-5 flex items-center justify-between rounded-xl border border-white/5 shadow-lg">
                            <div class="flex items-center gap-3">
                                <span class="material-symbols-outlined {item.color}">{item.icon}</span>
                                <span class="text-slate-400 text-xs font-bold">{item.label}</span>
                            </div>
                            <span class="text-white font-bold text-sm">{item.val}</span>
                        </div>
                    {/each}
                </div>
            </section>

            <!-- Voice Samples -->
            <section class="bg-bg-card/40 backdrop-blur-md p-8 rounded-2xl border border-primary/10 relative overflow-hidden shadow-2xl">
                <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                 <h3 class="text-primary text-[11px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                    <span class="w-8 h-[2px] bg-primary"></span> ボイスサンプル
                </h3>
                <div class="space-y-8">
                    <div class="flex items-center gap-8">
                        <button class="size-20 bg-primary rounded-2xl flex items-center justify-center text-bg-dark shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all shrink-0">
                            <span class="material-symbols-outlined text-5xl">play_arrow</span>
                        </button>
                        <div class="flex-1 flex items-end gap-2 h-16 px-2">
                             {#each Array(12) as _, i}
                                <div class="w-2 rounded-full {i < 4 ? 'bg-primary' : 'bg-white/20'}" style="height: {Math.random() * 60 + 20}%"></div>
                             {/each}
                        </div>
                    </div>
                    <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        <button class="whitespace-nowrap px-8 py-3 rounded-full bg-primary text-bg-dark text-sm font-bold shadow-lg shadow-primary/10">自己紹介ボイス</button>
                        <button class="whitespace-nowrap px-8 py-3 rounded-full bg-white/5 text-slate-300 text-sm font-bold border border-white/10 hover:border-primary/40 transition-colors">教祖の祈り</button>
                        <button class="whitespace-nowrap px-8 py-3 rounded-full bg-white/5 text-slate-300 text-sm font-bold border border-white/10 hover:border-primary/40 transition-colors">愛の告白(?) </button>
                    </div>
                </div>
            </section>

            <!-- Likes / Dislikes -->
            <div class="space-y-16">
                <!-- Tags -->
                <section class="flex flex-wrap justify-start gap-4">
                    {#each ['#カエデの勉強部屋', '#KaedeLinux', '#教祖様降臨'] as tag, i}
                         <div class="px-6 py-3 rounded-full bg-bg-card/40 backdrop-blur-md flex items-center gap-2 text-xs font-bold border border-white/5 hover:border-primary/50 transition-all cursor-pointer group shadow-lg">
                             <span class="{i === 1 ? 'text-cyan-glow' : 'text-primary'} group-hover:scale-125 transition-transform">#</span>
                             {tag.replace('#', '')}
                         </div>
                    {/each}
                </section>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Likes -->
                    <div class="bg-bg-card/40 backdrop-blur-md p-10 rounded-2xl border-l-4 border-l-primary/60 relative overflow-hidden shadow-2xl">
                        <div class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                        <h3 class="text-primary text-[11px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                            <span class="material-symbols-outlined text-lg">favorite</span> 好きなもの
                        </h3>
                        <ul class="space-y-5">
                            {#each likes as item}
                                <li class="flex items-center gap-4 text-sm text-slate-200 font-bold">
                                    <span class="size-2.5 rounded-full bg-primary shadow-lg shadow-primary/40"></span> {item}
                                </li>
                            {/each}
                        </ul>
                    </div>
                     <!-- Dislikes -->
                    <div class="bg-bg-card/40 backdrop-blur-md p-10 rounded-2xl border-l-4 border-l-cyan-glow/60 relative overflow-hidden shadow-2xl">
                        <div class="absolute top-0 right-0 w-24 h-24 bg-cyan-glow/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                        <h3 class="text-cyan-glow text-[11px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                            <span class="material-symbols-outlined text-lg">cancel</span> 苦手なもの
                        </h3>
                        <ul class="space-y-5">
                            {#each dislikes as item}
                                <li class="flex items-center gap-4 text-sm text-slate-200 font-bold">
                                    <span class="size-2.5 rounded-full bg-cyan-glow shadow-lg shadow-cyan-glow/40"></span> {item}
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
