<script lang="ts">
	import { config } from '$lib/config';
</script>

<!-- MOBILE STICKY HEADER (Hidden on Desktop) -->
<header
	class="sticky top-0 z-900 flex items-center justify-between border-b border-base-300 bg-base-100/90 px-5 py-4 backdrop-blur-lg md:hidden"
>
	<div class="flex items-center gap-3">
		<div
			class="aspect-square size-7 rounded-md bg-green text-center text-sm leading-7.5 font-black text-base-100 uppercase"
		>
			{config.author.name.at(0)}
		</div>
		<span class="font-mono text-xs font-bold tracking-tight uppercase">{config.author.name}</span>
	</div>
	<div class="flex items-center gap-2 rounded-full border border-base-300 bg-base-200 px-3 py-1">
		<div class="status-dot"></div>
		<span class="font-mono text-[9px] font-bold text-green">ONLINE</span>
	</div>
</header>

<style>
	.status-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: #a9b665;
		box-shadow: 0 0 8px #a9b665;
	}
</style>
