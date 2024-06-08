<script lang="ts">
	import { css } from 'styled-system/css';
</script>

<div
	class={css({
		pos: 'absolute',
		display: 'flex',
		flexDir: 'column',
		zIndex: '-1',
		w: 'full',
		alignItems: 'center',
		justifyContent: 'center',
		bg: 'transparent',
		transition: 'background'
	})}
>
	<div
		class={css({
			opacity: 0.6,
			contain: 'strict',
			containIntrinsicSize: '100vw 40vh',
			backgroundImage: 'token(gradients.stripe), token(gradients.rainbow)',
			backgroundSize: '300%, 200%',
			backgroundPositionX: '50%',
			backgroundPositionY: '50%',
			height: 'inherit',
			filter: 'invert(100%)',
			maskImage: 'radial-gradient(ellipse at 100% 0%, black 30%, transparent 70%)',
			pointerEvents: 'none',
			animationName: 'jumbo',
			animationDuration: '90s',
			animationTimingFunction: 'linear',
			animationIterationCount: 'infinite',
			_after: {
				content: '""',
				position: 'absolute',
				inset: 0,
				backgroundImage: 'token(gradients.stripe), token(gradients.rainbow)',
				backgroundSize: '200%, 100%',
				backgroundAttachment: 'fixed',
				mixBlendMode: 'difference',
				animationName: 'jumbo'
			}
		})}
	></div>
</div>
