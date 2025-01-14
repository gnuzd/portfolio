<script lang="ts">
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils';

	const { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={`blogs/${post.slug}`} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: var(--size-7);
	}

	.post {
		display: flex;
		flex-direction: column;
		gap: var(--size-3);
	}

	.title {
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-5);
	}
</style>
