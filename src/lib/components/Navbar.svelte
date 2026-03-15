<script lang="ts">
	import { config } from '$lib/config';
</script>

<!-- DESKTOP TOP NAV (Hidden on Mobile) -->
<nav
	class="border-bottom fixed top-0 z-100 hidden w-full border-gruv-bg2 bg-gruv-bg0/80 px-8 py-5 backdrop-blur-md md:block"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between">
		<div class="flex items-center gap-3">
			<div
				class="flex h-8 w-8 items-center justify-center rounded bg-gruv-green font-black text-gruv-bg0"
			>
				Y
			</div>
			<span class="font-mono text-sm font-bold tracking-tight text-gruv-fg0">{config.domain}</span>
		</div>
		<div
			class="flex items-center gap-10 font-mono text-[11px] font-bold tracking-widest text-gruv-gray uppercase"
		>
			<a href="#projects" class="transition-colors hover:text-gruv-fg0">01. Projects</a>
			<a href="#journal" class="transition-colors hover:text-gruv-fg0">02. Journal</a>
			<a
				href="mailto:dev@email.com"
				class="rounded border border-gruv-yellow/30 px-4 py-2 text-gruv-yellow transition-all hover:bg-gruv-yellow hover:text-gruv-bg0"
				>SSH_CONNECT</a
			>
		</div>
	</div>
</nav>
