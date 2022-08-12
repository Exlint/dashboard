import { monthsName } from '@/data/months-name';

export const dateFormat = () => {
	return new Date().getDate() + ' ' + monthsName[new Date().getMonth()] + ' ' + new Date().getFullYear();
};
