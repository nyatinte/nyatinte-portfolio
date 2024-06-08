<script lang="ts">
	import { css } from 'styled-system/css';

	import '../app.css';
	import type { Snippet } from 'svelte';
	import Bubble from '$lib/components/layouts/Bubble.svelte';
	import Ray from '$lib/components/layouts/Ray.svelte';

	type Props = {
		children: Snippet;
	};
	const { children }: Props = $props();
</script>

<svelte:head>
	<title>Nyatinte Portfolio</title>
	<meta name="description" content="Nyatinte Portfolio" />
</svelte:head>

<div
	class={css({
		pos: 'relative',
		minW: '100vw',
		minH: '100vh',
		overflow: 'hidden'
	})}
>
	<Ray />
	<Bubble count={10} />

	{@render children()}
</div>
