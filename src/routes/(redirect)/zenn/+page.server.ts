import { NYATINTE } from '$lib/nyatinte/const';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../(x)/$types';

export const load = (async () => {
	throw redirect(303, new URL(NYATINTE.ZENN_ID, 'https://zenn.dev'));
}) satisfies LayoutServerLoad<void>;
