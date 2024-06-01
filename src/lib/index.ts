// place files you want to import through the `$lib` alias in this folder.
import { Effect } from 'effect';
const parse = (input: string) =>
	Effect.try({
		try: () => JSON.parse(input), // JSON.parse may throw for bad input
		catch: (unknown) => new Error(`something went wrong ${unknown}`) // remap the error
	});
const program = parse('');
