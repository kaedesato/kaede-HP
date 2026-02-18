<script>
    // Static content
</script>

<svelte:head>
    <title>佐藤かえで | 推し活ガイドライン</title>
</svelte:head>

<div class="max-w-5xl mx-auto px-6 py-16">
    <!-- Hero -->
    <section class="relative overflow-hidden rounded-3xl mb-20 aspect-[21/9] flex items-center justify-center border border-white/10 bg-bg-card">
        <div class="absolute inset-0 z-0">
             <!-- Using a placeholder pattern or gradient since the specific image might not be available or look good without the specific asset -->
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,112,0.2)_0%,rgba(15,23,42,1)_100%)]"></div>
             <!-- Attempt to use the image from reference if possible -->
            <img alt="Hero Background" class="w-full h-full object-cover opacity-30 brightness-75 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI982NoQgZl_OiA0bhhkzl9rEpTgJ-QyMeLY59omkRP-MvqwtUn1cBxGsrX5VY_DybSXtXkq_OX8HmQF2LBw5d49DQ8B56fIaQeYoe9ESuJmi6kg2Pc0e-8cWD4bmrgWImkRC95a7EYs126WSxKCS0mOzv8b7xID8z2TAsxAZO2B1nsdQ4n8T6tdGmAEiI90qpAPcIARmxQeTNAfv40-Av4dAeXZm2AGE8PjRgMtqkXFOpMUi14vnDcshxjKnzpGBq9apbS5NjSBbf"/>
        </div>

        <div class="relative z-10 text-center px-6">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black rounded-full mb-6 border border-primary/20 uppercase tracking-[0.2em]">
                Official Content Guidelines
            </div>
            <h1 class="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
                推し活ガイドライン
            </h1>
            <p class="text-slate-300 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-medium">
                佐藤かえでを応援してくださる皆様へ。<br class="hidden sm:block"/>創作活動やSNSでの交流をより楽しく、安心して行っていただけるようルールを定めました。
            </p>
            <div class="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-wider">
                <span class="material-symbols-outlined text-sm">update</span>
                Last Updated: 2024.03.20
            </div>
        </div>
    </section>

    <div class="grid gap-20">
        <!-- Fan Art -->
        <section id="fanart">
            <div class="flex items-center gap-5 mb-10">
                <div class="size-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-primary text-3xl font-light">palette</span>
                </div>
                <div>
                    <h2 class="text-3xl font-black tracking-tight text-white">ファンアートについて</h2>
                    <p class="text-slate-400 text-sm font-medium">皆様の素敵な創作活動を応援しています。</p>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Do -->
                <div class="p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-6xl text-emerald-400">check_circle</span>
                    </div>
                    <div class="flex items-center gap-3 mb-8 text-emerald-400">
                        <span class="material-symbols-outlined font-bold">task_alt</span>
                        <h3 class="font-black text-xl">許可していること</h3>
                    </div>
                    <ul class="space-y-5">
                        <li class="flex gap-4 items-start">
                            <span class="text-emerald-400 mt-1"><span class="material-symbols-outlined text-sm">circle</span></span>
                            <span class="text-slate-200 text-sm leading-relaxed font-medium">
                                ハッシュタグ <span class="text-primary font-black">#かえであーと</span> を付けたSNSへの投稿
                            </span>
                        </li>
                        <li class="flex gap-4 items-start">
                             <span class="text-emerald-400 mt-1"><span class="material-symbols-outlined text-sm">circle</span></span>
                            <span class="text-slate-200 text-sm leading-relaxed font-medium">非営利目的での個人鑑賞用グッズ作成</span>
                        </li>
                        <li class="flex gap-4 items-start">
                             <span class="text-emerald-400 mt-1"><span class="material-symbols-outlined text-sm">circle</span></span>
                            <span class="text-slate-200 text-sm leading-relaxed font-medium">同人誌・即売会での頒布（過度な営利を目的としない範囲）</span>
                        </li>
                    </ul>
                </div>
                <!-- Don't -->
                <div class="p-8 rounded-3xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-6xl text-red-400">cancel</span>
                    </div>
                    <div class="flex items-center gap-3 mb-8 text-red-400">
                        <span class="material-symbols-outlined font-bold">block</span>
                        <h3 class="font-black text-xl">禁止していること</h3>
                    </div>
                    <ul class="space-y-5">
                         <li class="flex gap-4 items-start">
                            <span class="text-red-400 mt-1"><span class="material-symbols-outlined text-sm">circle</span></span>
                            <span class="text-slate-200 text-sm leading-relaxed font-medium">公式イラストやロゴの直接使用・トレース・再配布</span>
                        </li>
                        <li class="flex gap-4 items-start">
                            <span class="text-red-400 mt-1"><span class="material-symbols-outlined text-sm">circle</span></span>
                            <span class="text-slate-200 text-sm leading-relaxed font-medium">特定の思想、宗教、政治的発言に関わる利用</span>
                        </li>
                        <li class="flex gap-4 items-start">
                            <span class="text-red-400 mt-1"><span class="material-symbols-outlined text-sm">circle</span></span>
                            <span class="text-slate-200 text-sm leading-relaxed font-medium">AI学習への利用、および生成AIによって作成された作品の投稿</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Clips -->
        <section id="clips">
             <div class="flex items-center gap-5 mb-10">
                <div class="size-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-primary text-3xl font-light">content_cut</span>
                </div>
                <div>
                    <h2 class="text-3xl font-black tracking-tight text-white">切り抜き動画について</h2>
                    <p class="text-slate-400 text-sm font-medium">配信の魅力をより多くの方へ届ける活動を歓迎します。</p>
                </div>
            </div>

            <div class="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10">
                <div class="grid md:grid-cols-2 gap-12 items-start">
                    <div class="space-y-8">
                        <div class="flex items-start gap-5">
                            <div class="size-10 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0 font-black text-lg shadow-lg shadow-primary/20">01</div>
                            <div>
                                <h4 class="font-black text-white mb-2">元動画へのクレジット表記</h4>
                                <p class="text-sm text-slate-400 leading-relaxed">動画内、または概要欄に必ず元配信のタイトルとURLを明記してください。</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-5">
                            <div class="size-10 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0 font-black text-lg shadow-lg shadow-primary/20">02</div>
                            <div>
                                <h4 class="font-black text-white mb-2">収益化について</h4>
                                <p class="text-sm text-slate-400 leading-relaxed">各プラットフォームの公式ガイドラインを遵守している場合に限り、広告収益化を認めています。</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-bg-dark/50 rounded-2xl p-8 border border-white/5 relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>
                        <h4 class="text-xs font-black text-primary mb-4 flex items-center gap-2 uppercase tracking-widest">
                            <span class="material-symbols-outlined text-base">warning</span> Attention
                        </h4>
                        <p class="text-xs text-slate-300 leading-loose">
                            ストーリーの核心に触れるネタバレを含む場合は、サムネイルやタイトルでの配慮をお願いいたします。悪意のある編集や誤解を招く切り抜き、佐藤かえでのイメージを著しく損なう内容は削除申請を行う場合があります。
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Social -->
        <section id="social">
             <div class="flex items-center gap-5 mb-10">
                <div class="size-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-primary text-3xl font-light">diversity_3</span>
                </div>
                <div>
                    <h2 class="text-3xl font-black tracking-tight text-white">SNS・コミュニティ</h2>
                    <p class="text-slate-400 text-sm font-medium">心地よい交流のためにご協力をお願いします。</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                {#each [
                    { icon: 'chat_bubble', title: 'リプライ・DM', desc: '誹謗中傷やプライベートな詮索、過度な連続投稿、返信を強要する行為はお控えください。' },
                    { icon: 'notifications_off', title: 'エゴサ・引用', desc: '活動に関係のないハッシュタグ利用や、攻撃的な引用リポストはご遠慮ください。' },
                    { icon: 'favorite', title: 'リスナー間マナー', desc: '他者への迷惑行為、個人攻撃、公序良俗に反する交流は固くお断りします。' }
                ] as item}
                    <div class="p-8 rounded-3xl border border-white/5 bg-white/5 text-center transition-all hover:bg-white/[0.08] hover:-translate-y-1">
                        <div class="size-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                            <span class="material-symbols-outlined text-3xl">{item.icon}</span>
                        </div>
                        <h4 class="font-black text-white mb-3">{item.title}</h4>
                        <p class="text-xs text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                {/each}
            </div>
        </section>
    </div>

    <!-- Contact Footer -->
    <footer class="mt-32 mb-16 pt-20 border-t border-white/5">
        <div class="max-w-3xl mx-auto text-center">
            <h3 class="text-2xl font-black mb-6 text-white">ガイドラインに関するお問い合わせ</h3>
            <p class="text-slate-400 text-sm mb-12 leading-loose font-medium px-4">
                判断に迷う場合や、商用利用（出版・商品化、法人でのご利用など）のご相談は、<br class="hidden sm:block"/>以下の公式お問い合わせ窓口より詳細をご連絡ください。
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button class="w-full sm:w-auto min-w-[240px] bg-primary text-white px-8 py-3 rounded-full font-bold transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-primary/20">
                    お問い合わせフォーム
                </button>
                <button class="w-full sm:w-auto min-w-[240px] px-8 py-3 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 transition-all border border-white/10">
                    よくある質問 (FAQ)
                </button>
            </div>
             <div class="mt-24 space-y-6">
                <div class="flex items-center justify-center gap-2 opacity-50">
                    <div class="w-8 h-[1px] bg-slate-500"></div>
                    <span class="text-xs font-black tracking-widest text-slate-400 uppercase">佐藤かえで</span>
                    <div class="w-8 h-[1px] bg-slate-500"></div>
                </div>
                <div class="opacity-30 text-[9px] tracking-[0.4em] uppercase font-bold text-slate-500">
                    © KAEDE SATO OFFICIAL / ALL RIGHTS RESERVED.
                </div>
            </div>
        </div>
    </footer>
</div>

<!-- Background Elements -->
<div class="fixed top-0 right-0 p-12 pointer-events-none opacity-[0.02] -z-10">
    <span class="material-symbols-outlined text-[400px] text-primary -rotate-12 select-none">palette</span>
</div>
<div class="fixed bottom-0 left-0 p-12 pointer-events-none opacity-[0.02] -z-10">
    <span class="material-symbols-outlined text-[400px] text-primary rotate-45 select-none">auto_awesome</span>
</div>
