<script lang="ts">
	// The following line is required to set panda css
	import '../app.css';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	const { children }: Props = $props();
</script>

{@render children()}
