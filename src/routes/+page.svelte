<script>
	import { circle } from 'styled-system/patterns';
	import { createAvatar, melt } from '@melt-ui/svelte';
	import { css } from 'styled-system/css';
	import { scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import OnMount from '$lib/components/OnMount.svelte';

	const {
		elements: { image }
	} = createAvatar({
		src: 'https://avatars.githubusercontent.com/u/104000239?v=4'
	});
</script>

<main class={css({ p: '16' })}>
	<OnMount>
		<div
			transition:scale={{ duration: 1000, opacity: 0.5, start: 0.5, easing: elasticOut }}
			class={circle({
				size: 64,
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
		>
			<img use:melt={$image} alt="Nyatinte Avatar" class={circle({ p: 1 })} />
		</div>
	</OnMount>
</main>
