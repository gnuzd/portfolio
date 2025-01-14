<script lang="ts">
	import '../app.css';
	import Header from './header.svelte';
	const { children } = $props();
</script>

<Header />
<main>
	{@render children()}
</main>

<style>
	main {
		margin-top: var(--size-7);
	}
</style>
