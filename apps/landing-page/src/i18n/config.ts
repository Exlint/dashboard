import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enּTranslation from './en';

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: enּTranslation,
		},
	},
	lng: 'en',
	keySeparator: '.',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
