<script lang="ts">
	import { slide } from 'svelte/transition';

	let toggle = $state(false);
	const toggleMenu = () => (toggle = !toggle);
</script>

<nav class="fixed top-12 z-100 w-full px-4 sm:px-6">
	<div
		class="glass relative mx-auto flex max-w-6xl items-center justify-between rounded-lg px-6 py-4"
	>
		<div class="flex items-center gap-4">
			<div class="flex h-9 w-9 items-center justify-center bg-white">
				<span class="text-base font-black text-black">Y</span>
			</div>
			<div class="hidden h-5 w-px bg-white/20 sm:block"></div>
			<span class="font-display text-sm font-black tracking-widest uppercase"
				>Systems Architect</span
			>
		</div>

		<div class="hidden items-center gap-10 md:flex">
			<a
				href="#projects"
				class="text-[11px] font-bold tracking-[0.2em] text-slate-300 uppercase transition-colors hover:text-white"
				>01. Projects</a
			>
			<a
				href="#journal"
				class="text-[11px] font-bold tracking-[0.2em] text-slate-300 uppercase transition-colors hover:text-white"
				>02. Journal</a
			>
			<a
				href="mailto:your@email.com"
				class="group flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-white uppercase transition-opacity hover:opacity-80"
			>
				<span class="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-primary"></span>
				Initialize Connection
			</a>
		</div>

		<button onclick={toggleMenu} class="text-white md:hidden">
			<svg id="menu-icon-open" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/></svg
			>
			<svg
				id="menu-icon-close"
				class="hidden h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/></svg
			>
		</button>

		{#if toggle}
			<div
				transition:slide={{ duration: 300, axis: 'y' }}
				class="dropdown-menu glass cursor-pointer] absolute top-[calc(100%+8px)] left-0 flex w-full flex-col gap-1 rounded-lg p-3"
			>
				<a
					href="#projects"
					onclick={toggleMenu}
					class="p-4 text-xs font-bold tracking-widest text-slate-200 uppercase transition-colors hover:bg-white/5"
					>Projects</a
				>
				<a
					href="#journal"
					onclick={toggleMenu}
					class="p-4 text-xs font-bold tracking-widest text-slate-200 uppercase transition-colors hover:bg-white/5"
					>Journal</a
				>
				<a
					href="mailto:your@email.com"
					class="m-2 bg-white py-4 text-center text-xs font-black tracking-[0.2em] text-black uppercase"
					>Contact</a
				>
			</div>
		{/if}
	</div>
</nav>
