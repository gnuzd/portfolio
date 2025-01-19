<script>
	import config from '$lib/config';
	import { formatDate } from '$lib/utils';
	const { data } = $props();
</script>

<svelte:head>
	<title>{config.title} - {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h2>{data.meta.title}</h2>
		<p class="date">Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as cate}
			<span class="surface-4">&num;{cate}</span>
		{/each}
	</div>

	<div class="prose">
		<!-- svelte-ignore svelte_component_deprecated -->
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-inline-size: 100%;
		margin-inline: auto;

		@media (--md-n-above) {
			max-inline-size: 50%;
		}
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	h2 {
		font-size: var(--font-size-4);
	}

	.date {
		margin-top: var(--size-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-1) var(--size-2);
		border-radius: var(--radius-2);
		background: var(--surface-4);
	}
</style>
