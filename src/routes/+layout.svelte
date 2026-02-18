<script>
    import '../app.css';
    import Header from '$lib/Header.svelte';
</script>

<div class="min-h-screen bg-bg-dark text-slate-100 flex flex-col font-sans overflow-x-hidden selection:bg-primary/30">
    <Header />
    <main class="flex-1 w-full">
        <slot />
    </main>

    <footer class="border-t border-white/5 py-10 mt-20 bg-bg-dark/50">
        <div class="max-w-5xl mx-auto text-center px-6">
            <div class="flex items-center justify-center gap-3 mb-8">
                <div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg">
                    <span class="material-symbols-outlined text-base">auto_awesome</span>
                </div>
                <p class="text-xl font-black tracking-tighter">佐藤<span class="text-primary">かえで</span></p>
            </div>

            <nav class="flex justify-center gap-8 mb-8 text-xs font-bold text-white/40 uppercase tracking-widest">
                <a href="/profile" class="hover:text-primary transition-colors">Profile</a>
                <a href="/guidelines" class="hover:text-primary transition-colors">Guideline</a>
                <a href="/gallery" class="hover:text-primary transition-colors">Gallery</a>
                <a href="/shop" class="hover:text-primary transition-colors">Shop</a>
            </nav>

             <p class="text-[10px] text-white/20 tracking-[0.4em] font-medium uppercase leading-loose">
                © 2024 SATO KAEDE OFFICIAL<br/>
                STAY CURIOUS, STAY BOLD.
            </p>
        </div>
    </footer>
</div>
