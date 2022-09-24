import { ValidateIf, type ValidationOptions } from 'class-validator';

export function IsFutureDate(validationOptions?: ValidationOptions) {
	return ValidateIf((_object, value) => {
		if (typeof value !== 'number') {
			return false;
		}

		const currentDate = new Date();

		return value >= currentDate.getTime();
	}, validationOptions);
}
