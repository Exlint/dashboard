import type { ILbirariesData } from '../interfaces/libraries';
import { depcheckData } from './depcheck-data';
import { eslintData } from './eslint-data';
import { inflintData } from './inflint-data';
import { prettierData } from './prettier-data';
import { stylelintData } from './stylelint-data';

export const librariesData: ILbirariesData = {
	eslint: eslintData,
	stylelint: stylelintData,
	depcheck: depcheckData,
	prettier: prettierData,
	inflint: inflintData,
};
