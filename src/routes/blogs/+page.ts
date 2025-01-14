import type { Post } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('api/posts');
	const posts = (await response.json()) as Post[];
	return { posts };
};
