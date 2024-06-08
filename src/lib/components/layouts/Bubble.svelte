<script lang="ts">
	import { css } from 'styled-system/css';

	type Props = {
		count: number;
	};

	const { count }: Props = $props();
</script>

{#each Array(count) as _}
	{@const posX = Math.random() * 100}
	{@const delay = Math.random() * 10}
	{@const duration = Math.random() * 10 + 10}
	{@const z = [-1, 1][Math.floor(Math.random() * 2)]}

	<div
		class={css({
			pos: 'absolute',
			w: '150px',
			h: '150px',
			borderRadius: '46% 54% 40% 60% / 46% 41% 59% 54%',
			boxShadow: '0 0 10px white inset',
			transform: 'translateY(-100%)',
			animationName: 'bubbleUp',
			animationIterationCount: 'infinite'
		})}
		style={`left: ${posX}%; animation-delay: ${delay}s; animation-duration: ${duration}s; z-index: ${z};`}
	></div>
{/each}
