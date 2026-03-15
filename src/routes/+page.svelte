{#snippet hero()}
	<section class="mb-16 md:mb-32">
		<div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
			<div>
				<h1
					class="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-gruv-fg0 md:text-7xl"
				>
					Systems Engineer <br class="hidden md:block" /> &
					<span class="text-gruv-aqua">Architect</span>.
				</h1>
				<p class="mb-8 max-w-xl text-base leading-relaxed text-gruv-fg1 opacity-90 md:text-xl">
					Building scalable digital infrastructure with <span class="font-bold text-gruv-orange"
						>Go</span
					>, <span class="font-bold text-gruv-blue">TypeScript</span>, and
					<span class="font-bold text-gruv-purple">Rust</span>.
				</p>
				<div class="flex flex-col gap-4 sm:flex-row">
					<a
						href="mailto:dev@email.com"
						class="rounded-xl bg-gruv-fg0 px-8 py-4 text-center text-xs font-bold tracking-widest text-gruv-bg0 uppercase shadow-lg transition-all active:opacity-80 md:rounded-lg md:hover:bg-gruv-aqua"
					>
						Contact Terminal
					</a>
					<button
						class="flex items-center justify-center gap-3 rounded-xl border border-gruv-bg2 bg-gruv-bg1 px-8 py-4 font-mono text-xs font-bold tracking-widest text-gruv-fg1 uppercase transition-colors hover:text-gruv-fg0 md:rounded-lg"
					>
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
							/></svg
						>
						Get Resume
					</button>
				</div>
			</div>

			<!-- Desktop Only Graphic -->
			<div
				class="relative hidden overflow-hidden rounded-2xl border border-gruv-bg2 bg-gruv-bg1 p-8 font-mono text-sm md:block"
			>
				<div class="mb-6 flex gap-2">
					<div class="h-3 w-3 rounded-full bg-gruv-red"></div>
					<div class="h-3 w-3 rounded-full bg-gruv-yellow"></div>
					<div class="h-3 w-3 rounded-full bg-gruv-green"></div>
				</div>
				<p class="mb-2 text-gruv-green">➜ system_check --verbose</p>
				<p class="text-gruv-fg1">[OK] Network Stack Initialized</p>
				<p class="text-gruv-fg1">[OK] Memory Pool Allocated (64GB)</p>
				<p class="text-gruv-fg1">[OK] 5 Nodes Distributed via Raft</p>
				<p class="mt-4 text-gruv-orange">➜ uptime</p>
				<p class="text-gruv-fg1 italic">"Serving requests since 2019..."</p>
				<div
					class="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-gruv-aqua/5 blur-3xl"
				></div>
			</div>
		</div>
	</section>
{/snippet}

{#snippet tags()}
	<!-- TAGS / SKILLS -->
	<div class="no-scrollbar mb-16 flex gap-3 overflow-x-auto pb-2">
		<div
			class="rounded-lg border border-gruv-bg2 bg-gruv-bg1 px-4 py-2 font-mono text-[10px] font-bold whitespace-nowrap text-gruv-orange md:text-xs"
		>
			# DISTRIBUTED_SYSTEMS
		</div>
		<div
			class="rounded-lg border border-gruv-bg2 bg-gruv-bg1 px-4 py-2 font-mono text-[10px] font-bold whitespace-nowrap text-gruv-green md:text-xs"
		>
			# CLOUD_NATIVE
		</div>
		<div
			class="rounded-lg border border-gruv-bg2 bg-gruv-bg1 px-4 py-2 font-mono text-[10px] font-bold whitespace-nowrap text-gruv-blue md:text-xs"
		>
			# FULLSTACK
		</div>
		<div
			class="rounded-lg border border-gruv-bg2 bg-gruv-bg1 px-4 py-2 font-mono text-[10px] font-bold whitespace-nowrap text-gruv-purple md:text-xs"
		>
			# DEVOPS
		</div>
	</div>
{/snippet}

{#snippet projects()}
	<section id="projects" class="mb-24">
		<div class="mb-10 flex items-center gap-4">
			<h2 class="text-xl font-bold tracking-tight text-gruv-fg0 md:text-3xl">Deployments</h2>
			<div class="h-[1px] flex-1 bg-gruv-bg2"></div>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<!-- Project Card -->
			<div class="native-card desktop-card">
				<div class="mb-6 flex items-start justify-between">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-gruv-aqua/10 text-gruv-aqua"
					>
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
							/></svg
						>
					</div>
					<span class="font-mono text-[10px] font-bold text-gruv-gray uppercase">Node_01</span>
				</div>
				<h3 class="mb-2 text-xl font-bold text-gruv-fg0">Hyper-Storage Core</h3>
				<p class="mb-6 text-sm leading-relaxed text-gruv-fg1 opacity-80">
					Rust-based distributed key-value store with raft consensus implementation.
				</p>
				<div class="flex gap-2 font-mono text-[9px] font-bold text-gruv-blue uppercase">
					<span class="rounded bg-gruv-bg2 px-2 py-1">Rust</span>
					<span class="rounded bg-gruv-bg2 px-2 py-1">gRPC</span>
				</div>
			</div>

			<div class="native-card desktop-card">
				<div class="mb-6 flex items-start justify-between">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-gruv-purple/10 text-gruv-purple"
					>
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/></svg
						>
					</div>
					<span class="font-mono text-[10px] font-bold text-gruv-gray uppercase">Node_02</span>
				</div>
				<h3 class="mb-2 text-xl font-bold text-gruv-fg0">TaskStream OS</h3>
				<p class="mb-6 text-sm leading-relaxed text-gruv-fg1 opacity-80">
					Next.js 14 real-time collaborative platform with WebSocket synchronization.
				</p>
				<div class="flex gap-2 font-mono text-[9px] font-bold text-gruv-blue uppercase">
					<span class="rounded bg-gruv-bg2 px-2 py-1">Next.js</span>
					<span class="rounded bg-gruv-bg2 px-2 py-1">Go</span>
				</div>
			</div>

			<div class="native-card desktop-card">
				<div class="mb-6 flex items-start justify-between">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-gruv-yellow/10 text-gruv-yellow"
					>
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04"
							/></svg
						>
					</div>
					<span class="font-mono text-[10px] font-bold text-gruv-gray uppercase">Node_03</span>
				</div>
				<h3 class="mb-2 text-xl font-bold text-gruv-fg0">AuthGuard Shield</h3>
				<p class="mb-6 text-sm leading-relaxed text-gruv-fg1 opacity-80">
					Enterprise authentication microservice with OIDC and biometric support.
				</p>
				<div class="flex gap-2 font-mono text-[9px] font-bold text-gruv-blue uppercase">
					<span class="rounded bg-gruv-bg2 px-2 py-1">Node.js</span>
					<span class="rounded bg-gruv-bg2 px-2 py-1">Vault</span>
				</div>
			</div>
		</div>
	</section>
{/snippet}

{#snippet journal()}
	<section id="journal" class="mb-24">
		<div class="mb-10 flex items-center gap-4">
			<h2 class="text-xl font-bold tracking-tight text-gruv-fg0 md:text-3xl">Engineering Logs</h2>
			<div class="h-[1px] flex-1 bg-gruv-bg2"></div>
		</div>

		<div class="space-y-4">
			<div
				class="group flex cursor-pointer items-center justify-between rounded-2xl border-l-4 border-gruv-orange bg-gruv-bg1 p-6 transition-colors hover:bg-gruv-bg2 md:rounded-lg"
			>
				<div>
					<h4 class="mb-1 text-lg font-bold text-gruv-fg1">
						Scaling WebSockets with Redis Pub/Sub
					</h4>
					<span class="font-mono text-[10px] font-bold tracking-wider text-gruv-gray uppercase"
						>MAR 12, 2026 • ARCHITECTURE</span
					>
				</div>
				<svg
					class="h-5 w-5 transform text-gruv-gray transition-all group-hover:translate-x-1 group-hover:text-gruv-fg0"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					><path
						d="M9 5l7 7-7 7"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/></svg
				>
			</div>
			<div
				class="group flex cursor-pointer items-center justify-between rounded-2xl border-l-4 border-gruv-aqua bg-gruv-bg1 p-6 transition-colors hover:bg-gruv-bg2 md:rounded-lg"
			>
				<div>
					<h4 class="mb-1 text-lg font-bold text-gruv-fg1">Vector DB Performance Benchmarking</h4>
					<span class="font-mono text-[10px] font-bold tracking-wider text-gruv-gray uppercase"
						>FEB 24, 2026 • AI INFRA</span
					>
				</div>
				<svg
					class="h-5 w-5 transform text-gruv-gray transition-all group-hover:translate-x-1 group-hover:text-gruv-fg0"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					><path
						d="M9 5l7 7-7 7"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/></svg
				>
			</div>
		</div>
	</section>
{/snippet}

<div class="grid-overlay"></div>
<div class="vertical-line left-[10%]"></div>
<div class="vertical-line left-[50%]"></div>
<div class="vertical-line right-[10%]"></div>

{@render hero()}
{@render tags()}
{@render projects()}
{@render journal()}
