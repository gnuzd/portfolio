import { escapeSvelte, mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { getSingletonHighlighter } from 'shiki';
import remarkUnwrapImages from 'rehype-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

const mdsvexOptions = {
	layout: {
		_: './src/routes/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const theme = 'catppuccin-mocha';
			const highlighter = await getSingletonHighlighter({
				themes: [theme],
				langs: ['javascript', 'typescript', 'svelte', 'html']
			});
			await highlighter.loadLanguage('javascript', 'typescript');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [remarkUnwrapImages, remarkToc],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	},

	extensions: ['.svelte', '.svx']
};

export default config;
