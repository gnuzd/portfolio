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
		height: 100dvh;
		padding: var(--size-6);
	}
</style>
