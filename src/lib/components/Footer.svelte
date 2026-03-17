<script lang="ts">
	import { config } from '$lib/config';
</script>

<footer class="hidden border-t border-base-300 bg-base-100 px-8 py-10 md:block">
	<div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 md:flex-row">
		<div class="flex items-center gap-3">
			<div
				class="size-8 rounded bg-green text-center text-lg leading-9 font-black text-base-100 uppercase"
			>
				{config.author.name.at(0)}
			</div>
			<div class="flex flex-col">
				<span class="font-mono text-sm font-bold tracking-tight text-base-content-100 uppercase">
					{config.author.name}
				</span>
				<span class="font-mono text-xs tracking-widest text-gray uppercase">
					Fullstack Developer
				</span>
			</div>
		</div>

		<div class="flex flex-col items-center gap-6 md:items-end">
			<div
				class="flex items-center gap-10 font-mono text-xs font-bold tracking-widest text-gray uppercase"
			>
				{#each config.social as { label, url }}
					<a href={url} class="transition-colors hover:text-base-content-100">
						{label}
					</a>
				{/each}
			</div>
			<p class="font-mono text-xs tracking-widest text-gray/60 uppercase">
				© {new Date().getFullYear()}
				{config.domain} • Crafted for Performance
			</p>
		</div>
	</div>
</footer>
