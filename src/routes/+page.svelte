<script lang="ts">
	import { css } from 'styled-system/css';
	import Avatar from '$lib/components/ui/Avatar.svelte';
	import { center, flex } from 'styled-system/patterns';
	import GitHubIcon from '$lib/components/ui/icon/GitHubIcon.svelte';
	import XIcon from '$lib/components/ui/icon/XIcon.svelte';
	import ZennIcon from '$lib/components/ui/icon/ZennIcon.svelte';
	import type { Component } from 'svelte';

	type SNSLink = {
		path: string;
		Icon: Component<{ size: number | string }>;
		id: string;
	};
	const snsLinks: SNSLink[] = [
		{
			path: '/github',
			Icon: GitHubIcon,
			id: 'nyatinte'
		},
		{
			path: '/x',
			Icon: XIcon,
			id: 'nyatinte'
		},
		{
			path: '/zenn',
			Icon: ZennIcon,
			id: 'nyatinte'
		}
	];
</script>

<main class={css({ p: '16' })}>
	<div class={center()}>
		<Avatar src="/nyatinte.png" alt="Nyatinte Avatar" size={32} />
	</div>
	<h1 class={css({ fontSize: '4xl', textAlign: 'center', color: 'white', fontWeight: 'bold' })}>
		Nyatinte
	</h1>
	<div class={flex({ alignItems: 'center', justify: 'center', gap: 4 })}>
		{#each snsLinks as { path, Icon, id }}
			<a href={path} class={flex({ alignItems: 'center', gap: 2, color: 'white' })}>
				<Icon size={24} />
				<span class={css({ color: 'white', fontSize: 'lg', fontWeight: 'bold' })}>{id}</span>
			</a>
		{/each}
	</div>
</main>
