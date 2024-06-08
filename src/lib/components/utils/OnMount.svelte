<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();

	let loaded = $state(false);

	$effect(() => {
		loaded = true;
	});
</script>

{#if loaded}
	{@render children()}
{/if}
