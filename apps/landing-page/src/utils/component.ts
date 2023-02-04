/**
 * The function returns the mapped class names list
 * @param classes The object of classes mapping
 * @param firstClass The first class to be used
 * @param secondClass The class class to be used
 * @param args The list of classes to get mapped
 * @returns The result string of the concatenation class names
 */
export const concatClasses = (
	classes: { readonly [key: string]: string },
	firstClass: string | null,
	secondClass: string | null,
	...args: ReadonlyArray<string | null>
) => {
	if (Object.keys(classes).length === 0) {
		return '';
	}

	const allClasses = [firstClass, secondClass, ...args];

	return allClasses.reduce<string>((finalClasses, className, index) => {
		if (!className || !classes[className]) {
			return finalClasses;
		}

		if (index === 0) {
			return classes[className]!;
		}

		return `${finalClasses} ${classes[className]}`;
	}, '');
};

/**
 * The function returns concatenation of classes
 * @param firstClass The first class to be used
 * @param secondClass The class class to be used
 * @param args The list of classes to concat
 * @returns The result string of the concatenation class names
 */
export const concatDiverseClasses = (
	firstClass?: string,
	secondClass?: string,
	...args: ReadonlyArray<string | undefined>
) => {
	const allClasses = [firstClass, secondClass, ...args];

	return allClasses.reduce<string>((finalClasses, className, index) => {
		if (!className) {
			return finalClasses;
		}

		if (index === 0) {
			return className;
		}

		return `${finalClasses} ${className}`;
	}, '');
};
