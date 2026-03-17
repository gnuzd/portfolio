<script lang="ts">
	import { config } from '$lib/config';
	import Button from '$lib/components/Button.svelte';
</script>

<!-- DESKTOP TOP NAV (Hidden on Mobile) -->
<nav class="fixed top-8 z-100 hidden w-full md:block">
	<div
		class="mx-auto flex max-w-6xl items-center justify-between rounded-2xl bg-base-200/80 px-6 py-4 backdrop-blur-md"
	>
		<div class="flex items-center gap-3">
			<div
				class="size-8 rounded-lg bg-green flex items-center justify-center text-lg font-black text-base-100 uppercase"
			>
				{config.author.name.at(0)}
			</div>
			<span class="font-mono text-sm font-bold tracking-tight text-base-content-100 uppercase">
				{config.author.name}
			</span>
		</div>
		<div
			class="flex items-center gap-10 font-mono text-xs font-bold tracking-widest text-gray uppercase"
		>
			<a href="#projects" class="transition-colors hover:text-base-content-100">01. Projects</a>
			<a href="#journal" class="transition-colors hover:text-base-content-100">02. Journal</a>
			<Button href="mailto:dev@email.com" variant="accent" size="sm" outline>SSH_CONNECT</Button>
		</div>
	</div>
</nav>
