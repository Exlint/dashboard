import { registerDecorator } from 'class-validator';

export function IsValidExpiration() {
	return function (object: object, propertyName: string) {
		registerDecorator({
			name: 'validExpiration',
			target: object.constructor,
			propertyName: propertyName,
			validator: {
				validate(value: unknown) {
					if (typeof value !== 'string') {
						return false;
					}

					const currentDate = new Date();
					const inputDate = new Date(value);

					if (isNaN(inputDate.getTime())) {
						return false;
					}

					return inputDate >= currentDate;
				},
			},
		});
	};
}
