import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { NYATINTE } from '$lib/nyatinte/const';

export const load = (async () => {
	throw redirect(303, new URL(NYATINTE.GITHUB_ID, 'https://x.com'));
}) satisfies LayoutServerLoad<void>;
