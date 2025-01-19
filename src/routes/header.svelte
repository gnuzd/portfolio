<script lang="ts">
	import { base } from '$app/paths';

	const navigations = [
		{ path: base + '/', label: 'Intro' },
		{ path: base + '/blogs', label: 'Blogs' }
	];
</script>

<nav>
	<ul class="links">
		{#each navigations as item}
			<li><a href={item.path}>{item.label}</a></li>
		{/each}
	</ul>
</nav>

<style>
	@media (min-width: 768px) {
		nav {
			background-color: var(--surface-1);
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			padding: var(--size-4) var(--size-10);
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	@media (width < 768px) {
		nav {
			display: none;
		}
	}

	.links {
		/*margin-block: var(--size-7);*/
		display: flex;
		gap: var(--size-7);
		margin-block: 0;

		a {
			text-decoration: none;
			color: var(--text-1);
			font-weight: var(--font-weight-5);
		}
	}
</style>
