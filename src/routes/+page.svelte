{#snippet hero()}
	<header class="relative mx-auto max-w-6xl px-6 pt-64 pb-32">
		<div
			class="absolute top-64 -left-12 hidden -rotate-90 font-mono text-[11px] tracking-[0.4em] text-slate-500 uppercase lg:block"
		>
			Core_Manifest // 0.1
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-12">
			<div class="lg:col-span-8">
				<div
					class="mb-8 inline-flex items-center gap-3 border border-brand-primary/40 px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-brand-primary uppercase"
				>
					<span class="relative flex h-2 w-2">
						<span
							class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-75"
						></span>
						<span class="relative inline-flex h-2 w-2 rounded-full bg-brand-primary"></span>
					</span>
					Available for New Deployments
				</div>
				<h1
					class="mb-12 font-display text-7xl leading-[0.75] font-black tracking-tighter uppercase md:text-[10rem]"
				>
					CRAFTING <br />
					<span
						class="bg-linear-to-r from-white via-white/80 to-white/20 bg-clip-text text-transparent"
						>SYSTEMS</span
					>
				</h1>
				<p class="mb-12 max-w-xl text-lg leading-relaxed font-light text-slate-300 md:text-2xl">
					Designing robust <span class="font-medium text-white">Full-Stack Architectures</span> that prioritize
					scalability, high-performance logic, and pixel-perfect execution.
				</p>
				<div class="flex flex-wrap items-center gap-8">
					<a
						href="#projects"
						class="group flex items-center gap-4 text-[13px] font-black tracking-[0.3em] text-white uppercase"
					>
						Browse Work
						<div class="h-px w-12 bg-white transition-all group-hover:w-20"></div>
					</a>
					<div class="h-1 w-1 rounded-full bg-white/20"></div>
					<a
						href="#journal"
						class="text-[11px] font-bold tracking-[0.3em] text-slate-500 uppercase transition-colors hover:text-white"
					>
						Read Journal
					</a>
				</div>
			</div>

			<div class="flex items-end justify-end lg:col-span-4">
				<div
					class="relative flex h-fit w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8 font-mono text-[13px] text-slate-300 shadow-2xl"
				>
					<div class="scanline"></div>
					<div class="mb-6 flex justify-between border-b border-white/10 pb-4">
						<div class="flex gap-1.5">
							<div class="h-2 w-2 rounded-full bg-red-500/50"></div>
							<div class="h-2 w-2 rounded-full bg-yellow-500/50"></div>
							<div class="h-2 w-2 rounded-full bg-green-500/50"></div>
						</div>
						<span class="text-[10px] font-bold tracking-wider text-white/50 uppercase"
							>active_session_4.0</span
						>
					</div>
					<div class="space-y-4 text-[12px]">
						<div class="flex flex-col gap-1">
							<span class="text-slate-500">// PRIMARY_STACK</span>
							<p class="text-white">TypeScript, Next.js, Node, Go</p>
						</div>
						<div class="flex flex-col gap-1">
							<span class="text-slate-500">// DATABASE_INFRA</span>
							<p class="text-white">PostgreSQL, Redis, MongoDB</p>
						</div>
						<div class="flex flex-col gap-1">
							<span class="text-slate-500">// RECENT_UPTIME</span>
							<div class="mt-1 flex gap-1">
								<div class="h-4 w-1 bg-brand-primary"></div>
								<div class="h-4 w-1 bg-brand-primary"></div>
								<div class="h-4 w-1 bg-brand-primary"></div>
								<div class="h-4 w-1 bg-brand-primary"></div>
								<div class="h-4 w-1 bg-brand-primary/40"></div>
								<div class="h-4 w-1 bg-brand-primary"></div>
								<div class="h-4 w-1 bg-brand-primary"></div>
								<div class="h-4 w-1 bg-brand-primary"></div>
								<div class="h-4 w-1 bg-brand-primary"></div>
							</div>
						</div>
						<p class="animate-pulse pt-2 text-[10px] font-bold tracking-widest text-brand-primary">
							>> SYSTEM_OPERATIONAL
						</p>
					</div>
				</div>
			</div>
		</div>
	</header>
{/snippet}

{#snippet projects()}
	<section id="projects" class="mx-auto max-w-6xl border-t border-white/5 px-6 py-32">
		<div class="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
			<div>
				<span class="mb-4 block font-mono text-[11px] tracking-[0.3em] text-brand-primary uppercase"
					>Archive_2024-2026</span
				>
				<h2 class="font-display text-5xl font-black tracking-tight uppercase">
					Feature <br /> Deployments
				</h2>
			</div>
			<p class="max-w-xs text-base leading-relaxed text-slate-300">
				A catalog of full-stack implementations, ranging from high-traffic commerce to internal
				tooling.
			</p>
		</div>

		<div class="project-list grid grid-cols-1 gap-4 md:grid-cols-6">
			<div class="project-card flex min-h-100 flex-col p-8 md:col-span-4 md:p-12">
				<h3 class="mb-4 text-4xl font-bold">HyperScale Commerce</h3>
				<p class="mb-8 max-w-lg text-lg leading-relaxed text-slate-300">
					Next.js 14 based storefront with real-time inventory management, custom edge-cached
					product search, and global Stripe integration.
				</p>
				<div
					class="mt-auto flex flex-wrap gap-4 font-mono text-[11px] font-bold tracking-wide text-slate-400 uppercase"
				>
					<span class="text-brand-primary">#Next.js</span> <span>#PostgreSQL</span>
					<span>#Stripe</span> <span>#Tailwind</span>
				</div>
			</div>

			<div class="project-card flex flex-col p-8 md:col-span-2">
				<h3 class="mb-3 text-2xl font-bold">TaskFlow OS</h3>
				<p class="mb-6 text-sm leading-relaxed text-slate-300">
					Real-time collaboration platform using WebSockets for team synchronization.
				</p>
				<div
					class="mt-auto flex flex-wrap gap-3 font-mono text-[10px] font-bold text-slate-400 uppercase"
				>
					<span class="text-brand-primary">#Socket.io</span> <span>#Express</span>
				</div>
			</div>

			<div class="project-card flex min-h-80 flex-col p-8 md:col-span-3">
				<h3 class="mb-3 text-2xl font-bold">CryptoDash</h3>
				<p class="mb-6 text-sm leading-relaxed text-slate-300">
					Live cryptocurrency monitoring dashboard with automated trading signal alerts.
				</p>
				<div class="mt-auto flex gap-3 font-mono text-[10px] font-bold text-slate-400 uppercase">
					<span class="text-brand-primary">#React</span> <span>#Redis</span> <span>#APIs</span>
				</div>
			</div>

			<div class="project-card flex min-h-80 flex-col p-8 md:col-span-3">
				<h3 class="mb-3 text-2xl font-bold">EventEngine</h3>
				<p class="mb-6 text-sm leading-relaxed text-slate-300">
					Full-cycle event booking system with QR generation and automated check-ins.
				</p>
				<div class="mt-auto flex gap-3 font-mono text-[10px] font-bold text-slate-400 uppercase">
					<span class="text-brand-primary">#Node.js</span> <span>#MongoDB</span> <span>#AWS</span>
				</div>
			</div>
		</div>
	</section>
{/snippet}

{#snippet journal()}
	<section id="journal" class="mx-auto max-w-6xl border-t border-white/5 px-6 py-32">
		<div class="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
			<div>
				<span class="mb-4 block font-mono text-[11px] tracking-[0.3em] text-brand-primary uppercase"
					>Knowledge Base</span
				>
				<h2 class="font-display text-5xl font-black tracking-tight uppercase">
					Technical <br /> Journal
				</h2>
			</div>
			<p class="max-w-xs text-base leading-relaxed text-slate-300">
				Insights on building, scaling, and maintaining modern web applications.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-4">
			<!-- Article 01 -->
			<article
				class="group flex flex-col items-start gap-8 border border-white/5 p-8 transition-all hover:bg-white/5 md:flex-row"
			>
				<div class="pt-2 font-mono text-xs font-bold tracking-widest text-slate-500 md:w-32">
					MAR 2026<br />
					[LOG_01]
				</div>
				<div class="flex-1">
					<div
						class="mb-4 inline-block bg-brand-primary/10 px-2 py-0.5 font-mono text-[9px] tracking-widest text-brand-primary uppercase"
					>
						Frontend Optimization
					</div>
					<h4 class="mb-3 text-2xl font-bold transition-colors group-hover:text-brand-primary">
						Mastering Core Web Vitals in Next.js 14
					</h4>
					<p class="mb-6 max-w-2xl leading-relaxed text-slate-400">
						An in-depth look at how partial pre-rendering and server-side component streaming
						drastically reduce LCP and CLS in data-heavy dashboards.
					</p>
					<div
						class="flex items-center gap-6 font-mono text-[10px] font-bold tracking-widest text-slate-500 uppercase"
					>
						<span>Read: 8 MIN</span>
						<!-- svelte-ignore a11y_missing_attribute -->
						<a
							class="flex items-center gap-2 text-white transition-colors hover:text-brand-primary"
						>
							Access Content <svg
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path
									d="M17 8l4 4m0 0l-4 4m4-4H3"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/></svg
							>
						</a>
					</div>
				</div>
			</article>

			<!-- Article 02 -->
			<article
				class="group flex flex-col items-start gap-8 border border-white/5 p-8 transition-all hover:bg-white/5 md:flex-row"
			>
				<div class="pt-2 font-mono text-xs font-bold tracking-widest text-slate-500 md:w-32">
					FEB 2026<br />
					[LOG_02]
				</div>
				<div class="flex-1">
					<div
						class="mb-4 inline-block bg-brand-primary/10 px-2 py-0.5 font-mono text-[9px] tracking-widest text-brand-primary uppercase"
					>
						Backend Architecture
					</div>
					<h4 class="mb-3 text-2xl font-bold transition-colors group-hover:text-brand-primary">
						Pragmatic Scaling for PostgreSQL
					</h4>
					<p class="mb-6 max-w-2xl leading-relaxed text-slate-400">
						Techniques for indexing high-frequency tables and using connection pooling with Supabase
						for serverless environments.
					</p>
					<div
						class="flex items-center gap-6 font-mono text-[10px] font-bold tracking-widest text-slate-500 uppercase"
					>
						<span>Read: 12 MIN</span>
						<!-- svelte-ignore a11y_invalid_attribute -->
						<a
							href="#"
							class="flex items-center gap-2 text-white transition-colors hover:text-brand-primary"
						>
							Access Content <svg
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path
									d="M17 8l4 4m0 0l-4 4m4-4H3"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/></svg
							>
						</a>
					</div>
				</div>
			</article>

			<!-- Article 03 -->
			<article
				class="group flex flex-col items-start gap-8 border border-white/5 p-8 transition-all hover:bg-white/5 md:flex-row"
			>
				<div class="pt-2 font-mono text-xs font-bold tracking-widest text-slate-500 md:w-32">
					JAN 2026<br />
					[LOG_03]
				</div>
				<div class="flex-1">
					<div
						class="mb-4 inline-block bg-brand-primary/10 px-2 py-0.5 font-mono text-[9px] tracking-widest text-brand-primary uppercase"
					>
						Security
					</div>
					<h4 class="mb-3 text-2xl font-bold transition-colors group-hover:text-brand-primary">
						Securing GraphQL Endpoints
					</h4>
					<p class="mb-6 max-w-2xl leading-relaxed text-slate-400">
						Best practices for depth limiting, query cost analysis, and JWT-based authentication in
						modern Node.js backends.
					</p>
					<div
						class="flex items-center gap-6 font-mono text-[10px] font-bold tracking-widest text-slate-500 uppercase"
					>
						<span>Read: 6 MIN</span>
						<!-- svelte-ignore a11y_invalid_attribute -->
						<a
							href="#"
							class="flex items-center gap-2 text-white transition-colors hover:text-brand-primary"
						>
							Access Content <svg
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path
									d="M17 8l4 4m0 0l-4 4m4-4H3"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/></svg
							>
						</a>
					</div>
				</div>
			</article>
		</div>

		<div class="mt-12 flex justify-center">
			<button
				class="border border-white/10 px-8 py-4 font-mono text-[11px] font-bold tracking-[0.3em] uppercase transition-all hover:bg-white/5"
			>
				See Full Archive_
			</button>
		</div>
	</section>
{/snippet}

<div class="grid-overlay"></div>
<div class="vertical-line left-[10%]"></div>
<div class="vertical-line left-[50%]"></div>
<div class="vertical-line right-[10%]"></div>

{@render hero()}
{@render projects()}
{@render journal()}
