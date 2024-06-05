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

<main class={css({ p: '4' })}>
	<OnMount>
		<img
			use:melt={$image}
			alt="Nyatinte Avatar"
			class={circle({
				size: 'xs'
			})}
			transition:scale={{ duration: 1000, opacity: 0.5, start: 0.5, easing: elasticOut }}
		/>
	</OnMount>
</main>
