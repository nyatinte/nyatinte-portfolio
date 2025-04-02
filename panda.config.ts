import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,ts,svelte}'],

	// Files to exclude
	exclude: [],

	// The output directory for your css system
	outdir: 'styled-system',

	theme: {
		extend: {
			keyframes: {
				jumbo: {
					'0%': { backgroundPosition: '50% 50%' },
					'100%': { backgroundPosition: '350% 50%' }
				},
				bubbleUp: {
					'0%': {
						transform: 'translateY(100vh) scale(1)',
						opacity: 0.5
					},
					'100%': {
						transform: 'translateY(-120%) scale(0.5)',
						opacity: 0
					}
				},
				glow: {
					'0%': {
						backgroundPosition: '0 0'
					},
					'50%': {
						backgroundPosition: '100% 0'
					},

					'100%': {
						backgroundPosition: '0 0'
					}
				}
			},
			tokens: {
				gradients: {
					stripe: {
						value:
							'repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%)'
					},
					rainbow: {
						value:
							'repeating-linear-gradient(100deg, #60a5fa 10%, #ddd6fe 16%, #5eead4 22%, #60a5fa 30%)'
					}
				}
			}
		}
	}
});
