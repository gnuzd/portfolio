<script lang="ts">
	import { config } from '$lib/config';
</script>

<!-- DESKTOP TOP NAV (Hidden on Mobile) -->
<nav class="fixed top-0 z-100 hidden w-full bg-base-100/80 px-8 py-5 backdrop-blur-md md:block">
	<div class="mx-auto flex max-w-6xl items-center justify-between">
		<div class="flex items-center gap-3">
			<div
				class="size-8 rounded bg-green text-center text-lg leading-9 font-black text-base-100 uppercase"
			>
				{config.author.name.at(0)}
			</div>
			<span class="font-mono text-sm font-bold tracking-tight text-base-content-100 uppercase">
				{config.author.name}
			</span>
		</div>
		<div
			class="flex items-center gap-10 font-mono text-[11px] font-bold tracking-widest text-gray uppercase"
		>
			<a href="#projects" class="transition-colors hover:text-base-content-100">01. Projects</a>
			<a href="#journal" class="transition-colors hover:text-base-content-100">02. Journal</a>
			<a
				href="mailto:dev@email.com"
				class="rounded border border-yellow/30 px-4 py-2 text-yellow transition-all hover:bg-yellow hover:text-base-100"
				>SSH_CONNECT</a
			>
		</div>
	</div>
</nav>
