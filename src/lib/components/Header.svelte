<!-- MOBILE STICKY HEADER (Hidden on Desktop) -->
<header
	class="sticky top-0 z-[900] flex items-center justify-between border-b border-base-300 bg-base-100/90 px-5 py-3 backdrop-blur-lg md:hidden"
>
	<div class="flex items-center gap-3">
		<div
			class="flex h-7 w-7 items-center justify-center rounded-md bg-green text-xs font-black text-base-100"
		>
			Y
		</div>
		<span class="font-mono text-xs font-bold tracking-tight uppercase">Architect.os</span>
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
