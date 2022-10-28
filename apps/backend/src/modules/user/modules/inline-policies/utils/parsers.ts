import { BadRequestException } from '@nestjs/common';
import yaml from 'js-yaml';
import { VM } from 'vm2';

import { FileType } from '@/models/file-type';

const nodeVirtualMachine = new VM({ sandbox: { module: {} } });

/**
 * The function receives a JSON-like input and parse it to an object
 * @param input the input to parse
 * @returns parsed object
 */
const parseJson = (input: string) => {
	try {
		const parsedObject = JSON.parse(input);

		if (typeof parsedObject !== 'object') {
			throw new BadRequestException();
		}

		return parsedObject as object;
	} catch {
		throw new BadRequestException();
	}
};

/**
 * The function receives a YAML-like input and parse it to an object
 * @param input the input to parse
 * @returns parsed object
 */
const parseYaml = (input: string) => {
	try {
		const parsedObject = yaml.load(input);

		if (typeof parsedObject !== 'object') {
			throw new BadRequestException();
		}

		return parsedObject as object;
	} catch {
		throw new BadRequestException();
	}
};

/**
 * The function receives a commonJs-exported-like input and parse it to an object
 * @param input the input to parse
 * @returns parsed object
 */
const parseJs = (input: string) => {
	try {
		const parsedObject = nodeVirtualMachine.run(input);

		if (typeof parsedObject !== 'object') {
			throw new BadRequestException();
		}

		return parsedObject as object;
	} catch {
		throw new BadRequestException();
	}
};

/**
 * The function receives an input (string, or null) and parses it to an object (or null if received null)
 * @param input the input to parse
 * @param type the representation type of the input
 * @returns parsed object
 */
export const parseInput = (input: string | null, type: FileType) => {
	if (input === null) {
		return null;
	}

	if (type === FileType.Json) {
		return parseJson(input);
	}

	if (type === FileType.Yaml) {
		return parseYaml(input);
	}

	return parseJs(input);
};
