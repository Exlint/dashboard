import type { Language } from '@/models/languages';

export class RecommendedContract {
	constructor(public readonly languages: Language[]) {}
}
