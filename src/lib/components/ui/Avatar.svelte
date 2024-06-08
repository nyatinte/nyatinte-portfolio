<script lang="ts">
	import { scale } from 'svelte/transition';
	import OnMount from '../utils/OnMount.svelte';
	import { circle } from 'styled-system/patterns';
	import { createAvatar, melt } from '@melt-ui/svelte';
	import { elasticOut } from 'svelte/easing';
	import { token, type SizeToken } from 'styled-system/tokens';

	type Props = {
		src: string;
		alt: string;
		size: SizeToken;
	};

	const { src, alt, size }: Props = $props();

	const {
		elements: { image }
	} = createAvatar({
		src
	});
</script>

<OnMount>
	<div
		transition:scale={{ duration: 1000, opacity: 0.5, start: 0.5, easing: elasticOut }}
		class={circle({
			pos: 'relative',
			_after: {
				content: '""',
				pos: 'absolute',
				borderRadius: 'full',
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				bg: 'linear-gradient(45deg, #0077b6, #00b4d8, #2a9d8f, #ffba08, #ff595e, #023e8a, #03045e)',
				bgSize: '400%',
				zIndex: -1,
				animation: 'glow 20s linear infinite',
				w: 'full'
			}
		})}
		style:width={token.var(`sizes.${size}`)}
	>
		<img use:melt={$image} {alt} class={circle({ p: 1 })} />
	</div>
</OnMount>
