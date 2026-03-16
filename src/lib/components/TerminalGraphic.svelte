<script lang="ts">
	import { onMount } from 'svelte';

	interface Line {
		text: string;
		className?: string;
		delay?: number;
		prefix?: string;
	}

	const lines: Line[] = [
		{
			text: 'stack_check --interactive',
			className: 'mb-2 text-green',
			prefix: '➜ ',
			delay: 500
		},
		{
			text: '[Frontend] React / Tailwind / TypeScript',
			className: 'text-base-content-200',
			delay: 300
		},
		{
			text: '[Backend] Node.js / PostgreSQL / Redis',
			className: 'text-base-content-200',
			delay: 200
		},
		{
			text: '[Infra] Docker / AWS / Terraform',
			className: 'text-base-content-200',
			delay: 200
		},
		{
			text: 'current_status',
			className: 'mt-4 text-orange',
			prefix: '➜ ',
			delay: 600
		},
		{
			text: '"Crafting modern digital experiences..."',
			className: 'text-base-content-200 italic',
			delay: 400
		}
	];

	let displayedLines = $state(lines.map((l) => ({ ...l, currentText: '', showPrefix: false })));
	let currentLineIndex = $state(-1);
	let isTyping = $state(false);

	onMount(async () => {
		// Initial wait before starting
		await new Promise((resolve) => setTimeout(resolve, 1000));

		for (let i = 0; i < lines.length; i++) {
			currentLineIndex = i;
			const line = lines[i];

			// Initial delay for line
			if (line.delay) await new Promise((resolve) => setTimeout(resolve, line.delay));

			// Show prefix immediately
			displayedLines[i].showPrefix = true;

			// Type the text
			isTyping = true;
			for (let j = 0; j <= line.text.length; j++) {
				displayedLines[i].currentText = line.text.slice(0, j);
				// Variable speed for more natural feel
				await new Promise((resolve) => setTimeout(resolve, 20 + Math.random() * 40));
			}
			isTyping = false;
		}
	});
</script>

<div
	class="relative hidden overflow-hidden rounded-2xl border border-base-300 bg-base-200 p-8 font-mono text-sm md:block"
>
	<div class="mb-6 flex gap-2">
		<div class="h-3 w-3 rounded-full bg-red"></div>
		<div class="h-3 w-3 rounded-full bg-yellow"></div>
		<div class="h-3 w-3 rounded-full bg-green"></div>
	</div>

	{#each displayedLines as line, i}
		{#if i <= currentLineIndex && line.showPrefix}
			<p class={line.className}>
				{#if line.prefix}<span class="mr-2">{line.prefix}</span
					>{/if}{line.currentText}{#if i === currentLineIndex && isTyping}<span
						class="animate-pulse">_</span
					>{/if}
			</p>
		{/if}
	{/each}

	<div class="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-aqua/5 blur-3xl"></div>
</div>
