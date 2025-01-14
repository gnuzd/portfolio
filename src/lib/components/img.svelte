<script lang="ts">
	const { src, alt }: HTMLImageElement = $props();
</script>

<img {src} {alt} loading="lazy" />
