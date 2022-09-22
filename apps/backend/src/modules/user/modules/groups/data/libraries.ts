import type { PolicyLibrary } from '@prisma/client';

export const libariesLanguages: Record<PolicyLibrary, string> = {
	ESLint: 'JavaScript',
	Stylelint: 'CSS',
	Depcheck: 'JavaScript',
	Inflint: 'Agnostic',
	Prettier: 'Agnostic',
};
