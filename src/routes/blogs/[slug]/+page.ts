import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../data/posts/${params.slug}.svx`);
		return { content: post.default, meta: post.metadata };
	} catch (_) {
		throw error(404, `Could not find ${params.slug}`);
	}
};
