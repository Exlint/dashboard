export const addDaysToDate = (days: number) => {
	const date = new Date();
	const addedDaysDate = new Date(date);

	addedDaysDate.setDate(date.getDate() + days);

	const formattedDays = addedDaysDate.toLocaleDateString('en-ca');

	return formattedDays;
};
