import type { Language } from '@/models/languages';

export class AddRecommendedContract {
	constructor(public readonly userId: string, public readonly languages: Language[]) {}
}
