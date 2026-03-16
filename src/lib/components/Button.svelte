<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href?: string;
		variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'navbar' | 'brutalist';
		outline?: boolean;
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		children?: Snippet;
		icon?: Snippet;
		[key: string]: any;
	}

	let {
		href,
		variant = 'primary',
		outline = false,
		size = 'md',
		class: className = '',
		children,
		icon,
		...rest
	}: Props = $props();

	const combinedClasses = $derived(
		['btn', `btn-${variant}`, outline ? 'btn-outline' : '', `btn-${size}`, className]
			.filter(Boolean)
			.join(' ')
	);
</script>

{#if href}
	<a {href} class={combinedClasses} {...rest}>
		{#if icon}
			<div class="mr-3">
				{@render icon()}
			</div>
		{/if}
		{#if children}
			{@render children()}
		{/if}
	</a>
{:else}
	<button class={combinedClasses} {...rest}>
		{#if icon}
			<div class="mr-3">
				{@render icon()}
			</div>
		{/if}
		{#if children}
			{@render children()}
		{/if}
	</button>
{/if}
