<!-- MOBILE NATIVE TAB BAR (Hidden on Desktop) -->
<nav
	class="tab-bar fixed right-0 bottom-0 left-0 z-[1000] flex h-[calc(65px+var(--sab))] items-center justify-around md:hidden"
>
	<a href="#" class="flex flex-col items-center gap-1 text-[#a9b665]">
		<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
			/></svg
		>
		<span class="text-[9px] font-bold uppercase">Home</span>
	</a>
	<a href="#projects" class="flex flex-col items-center gap-1 text-gruv-gray">
		<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
			/></svg
		>
		<span class="text-[9px] font-bold uppercase">Work</span>
	</a>
	<a href="#journal" class="flex flex-col items-center gap-1 text-gruv-gray">
		<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
			/></svg
		>
		<span class="text-[9px] font-bold uppercase">Logs</span>
	</a>
	<a href="mailto:dev@email.com" class="flex flex-col items-center gap-1 text-gruv-gray">
		<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
			/></svg
		>
		<span class="text-[9px] font-bold uppercase">Chat</span>
	</a>
</nav>

<style>
	.tab-bar {
		background: rgba(50, 48, 47, 0.95);
		backdrop-filter: blur(20px);
		border-top: 1px solid #3c3836;
		padding-bottom: var(--sab);
	}
</style>
