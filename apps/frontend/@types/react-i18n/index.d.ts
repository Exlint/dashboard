import dictionary from '../../src/i18n/en';

declare module 'react-i18next' {
	export interface Resources {
		translation: typeof dictionary;
	}
}
