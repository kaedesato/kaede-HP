<script lang="ts">
	import { page } from '$app/stores';

	const links = [
		{ name: 'プロフィール', href: '/profile' },
		{ name: '推し活ガイドライン', href: '/guidelines' },
		{ name: 'ギャラリー', href: '/gallery' },
		{ name: 'おすすめ商品', href: '/shop' }
	];

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    // Close menu when route changes
    $: if ($page.url.pathname) {
        isMenuOpen = false;
    }
</script>

<header class="sticky top-0 z-50 w-full border-b border-white/5 bg-bg-dark/90 backdrop-blur-md">
	<div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
		<a href="/" class="flex items-center gap-2 group shrink-0">
			<div
				class="size-9 bg-primary rounded-lg shadow-[0_0_15px_rgba(255,122,112,0.3)] flex items-center justify-center text-white group-hover:scale-105 transition-transform"
			>
				<span class="material-symbols-outlined text-xl font-bold">auto_awesome</span>
			</div>
			<span class="text-2xl font-black tracking-tight whitespace-nowrap text-slate-100">
				佐藤<span class="text-primary">かえで</span>
			</span>
		</a>

		<div class="flex items-center gap-6">
			<nav class="hidden lg:flex items-center gap-8">
				{#each links as link}
					<a
						href={link.href}
						class="text-sm font-bold transition-colors relative { $page.url.pathname === link.href
							? 'text-primary'
							: 'text-white/60 hover:text-primary' }"
					>
						{link.name}
						{#if $page.url.pathname === link.href}
							<span
								class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full shadow-[0_0_8px_rgba(255,122,112,0.6)]"
							></span>
						{/if}
					</a>
				{/each}
			</nav>

			<div class="flex items-center gap-3 border-l border-white/10 pl-6 hidden md:flex">
				<a
					href="https://youtube.com"
					target="_blank"
					rel="noreferrer"
					class="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 border border-slate-700 hover:text-primary hover:border-primary/50 transition-all"
					title="YouTube"
				>
					<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
						<path
							d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
						/>
					</svg>
				</a>
				<a
					href="https://discord.com"
					target="_blank"
					rel="noreferrer"
					class="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 border border-slate-700 hover:text-primary hover:border-primary/50 transition-all"
					title="Discord"
				>
					<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
						<path
							d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
						/>
					</svg>
				</a>
			</div>
		</div>

        <!-- Mobile Menu Trigger -->
        <div class="lg:hidden flex items-center">
            <div class="flex items-center gap-3 mr-4 md:hidden">
				<a
					href="https://youtube.com"
					target="_blank"
					rel="noreferrer"
					class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 border border-slate-700"
				>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
            </div>

            <button class="text-white/70 hover:text-white transition-colors" on:click={toggleMenu}>
                <span class="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
        </div>
	</div>

    <!-- Mobile Nav -->
    {#if isMenuOpen}
    <div class="lg:hidden border-t border-white/5 bg-bg-dark/95 backdrop-blur-md absolute w-full left-0 top-20 shadow-2xl h-[calc(100vh-5rem)]">
         <nav class="flex flex-col p-6 gap-6">
            {#each links as link}
                <a
                    href={link.href}
                    class="text-xl font-black { $page.url.pathname === link.href ? 'text-primary' : 'text-white/70' } hover:text-primary transition-colors"
                >
                    {link.name}
                </a>
            {/each}
         </nav>
    </div>
    {/if}
</header>
