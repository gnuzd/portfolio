<script lang="ts">
	import TerminalGraphic from '$lib/components/TerminalGraphic.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<section class="mb-16 md:mb-32">
	<div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
		<div>
			<h1
				class="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-base-content-100 md:text-5xl"
			>
				Fullstack <span class="text-aqua">Developer</span>
			</h1>
			<p
				class="mb-8 max-w-xl text-base leading-relaxed text-base-content-200 opacity-90 md:text-xl"
			>
				Building end-to-end applications from <span class="font-bold text-orange"
					>pixel-perfect interfaces</span
				>
				to <span class="font-bold text-blue">robust backends</span>. Specialized in React, Node.js,
				and Cloud Architecture.
			</p>
			<div class="flex flex-col gap-4 sm:flex-row">
      
				<Button href="mailto:dev@email.com">Hire the Terminal</Button>
				<Button outline variant="ghost">
					{#snippet icon()}
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
							/></svg
						>
					{/snippet}
					Download CV
				</Button>
			</div>
		</div>

		<TerminalGraphic />
	</div>
</section>
