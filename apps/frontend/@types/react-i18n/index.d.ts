import 'i18next';

import type dictionary from '../../src/i18n/en';

declare module 'i18next' {
	interface CustomTypeOptions {
		resources: {
			en: typeof dictionary;
		};
	}
}
