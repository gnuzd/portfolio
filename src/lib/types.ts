export type Category = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	description: string;
	date: string;
	cartegories: Category[];
	published: boolean;
	slug: string;
};
