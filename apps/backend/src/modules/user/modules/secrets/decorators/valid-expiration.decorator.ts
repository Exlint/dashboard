import { ValidateIf, type ValidationOptions } from 'class-validator';

export function IsFutureDate(validationOptions?: ValidationOptions) {
	return ValidateIf((_object, value) => {
		if (typeof value !== 'string') {
			return false;
		}

		const currentDate = new Date();
		const inputDate = new Date(value);

		return !isNaN(inputDate.getTime()) && inputDate >= currentDate;
	}, validationOptions);
}
