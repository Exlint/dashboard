import { monthsName } from '@/data/months-name';

export const currentDate = () => {
	return new Date().getDate() + ' ' + monthsName[new Date().getMonth()] + ' ' + new Date().getFullYear();
	// Day: new Date().getDate(),
	// Month: monthsName[new Date().getMonth()],
	// Year: new Date().getFullYear(),
};
