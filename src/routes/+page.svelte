<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import config from '$lib/config';
	import { model } from '$lib/gemini';
	import { marked } from 'marked';

	import { tick } from 'svelte';

	let messages = $state<{ sender: 'You' | 'Assistant'; text: string }[]>([]);
	let userInput = $state('');
	let loading = $state(false);
	let element;

	const sendMessage = async (prompt: string) => {
		//loading = true;
		messages.push({ sender: 'You', text: prompt });
		userInput = '';
		const result = await model.generateContentStream(prompt);

		messages.push({ sender: 'Assistant', text: '' });

		for await (const chunk of result.stream) {
			messages[messages.length - 1].text += chunk.text();
			scrollToBottom(element);
			await tick();
		}

		//loading = false;
	};

	const scrollToBottom = async (node) => {
		node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
	};
</script>

<svelte:head>
	<title>{config.title} - Software Engineering</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={`${config.title} - Software Engineering`} />
	<meta property="og:description" content="" />
</svelte:head>

<div class="container">
	<header>
		<section class="hero">
			<h1 class="hero-message">
				<div>- Chris Nguyen -</div>
				<div>Full Stack Developer</div>
			</h1>

			<div class="messages">
				<div class="content" class:loading bind:this={element}>
					{#each messages as message}
						<div class="message {message.sender}">
							<p><small><strong>{message.sender}</strong></small></p>
							<div class="text">{@html marked(message.text)}</div>
						</div>
					{/each}
				</div>
				<div class="control">
					<input
						type="text"
						bind:value={userInput}
						onkeydown={(e) => {
							if (e.key === 'Enter') sendMessage(e.target.value);
						}}
					/>
				</div>
			</div>
		</section>
		<picture class="promo-art">
			<img src="https://doodleipsum.com/700/flat" alt="a random doodle" />
		</picture>
	</header>
</div>

<style>
	.container {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	header {
		display: grid;
		align-items: center;
		place-content: center;

		@media (--md-n-above) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.hero {
		display: flex;
		flex-direction: column;
		gap: var(--size-5);
	}

	.messages {
		.message {
			padding: 0.5rem;
			margin-bottom: 0.5rem;
			border-radius: 0.5rem;
		}
		.message.user {
			/*background-color: #e0f7fa;*/
			align-self: flex-end;
		}
		.message.bot {
			/*background-color: #e0f2f7;*/
			align-self: flex-start;
		}
		.loading {
			opacity: 0.5;
			pointer-events: none;
		}

		position: relative;
		display: flex;
		flex-direction: column;
		height: var(--size-15);
		background-color: var(--surface-3);
		border-radius: var(--radius-3);
		overflow: auto;
		gap: var(--size-4);
		padding-block: var(--size-4);
	}

	.content {
		flex: 1;
		flex-direction: column-reverse;
		padding-inline: var(--size-4);
		overflow: auto;
	}

	.text :global {
		margin-top: var(--size-1);
		display: flex;
		flex-direction: column;
		gap: var(--size-4);

		p,
		li {
			font-size: var(--font-size-1);
			max-inline-size: var(--size-content-3);
		}

		li {
			margin-block: var(--size-2);
		}
	}

	.control {
		padding-inline: var(--size-4);
		input {
			width: 100%;
			background-color: var(--surface-4);
			padding: var(--size-2) var(--size-3);
			border-radius: 8px;
		}
	}

	.promo-art {
		display: none;
		@media (--md-n-above) {
			display: block;
		}
	}
</style>
