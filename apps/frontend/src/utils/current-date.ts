import { monthsName } from '@/data/months-name';

export const currentDate = () => {
	return new Date().getDate() + ' ' + monthsName[new Date().getMonth()] + ' ' + new Date().getFullYear();
};
