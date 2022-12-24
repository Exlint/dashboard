import { ValidateIf, type ValidationOptions, isObject } from 'class-validator';

export function IsValidJsonValue(validationOptions?: ValidationOptions) {
	return ValidateIf((_object, value) => {
		return (
			typeof value === 'string' ||
			typeof value === 'number' ||
			typeof value === 'boolean' ||
			isObject(value) ||
			Array.isArray(value)
		);
	}, validationOptions);
}
