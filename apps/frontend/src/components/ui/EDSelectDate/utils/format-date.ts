export const formatDate = (value: Date) => {
	const formattedDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(value);
	const formattedDay = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(value);

	return `${formattedDay}, ${formattedDate.replace(',', '')}`;
};
