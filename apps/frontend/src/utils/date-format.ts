import { monthsName } from '@/data/months-name';

export const dateFormat = () => {
	return new Date().getDate() + ' ' + monthsName[new Date().getMonth()] + ' ' + new Date().getFullYear();
	// day: new Date().getDate(),
	// month: monthsName[new Date().getMonth()],
	// year: new Date().getFullYear(),
};
