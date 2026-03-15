<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import TabBar from '$lib/components/TabBar.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header />
<Navbar />
<main class="mx-auto max-w-6xl px-5 py-8 md:pt-32 md:pb-24">
	{@render children()}
</main>
<Footer />
<TabBar />
