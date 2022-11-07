import type { ILibraryData } from '@exlint-dashboard/common';

import { depcheckData } from './depcheck-data';
import { eslintData } from './eslint-data';
import { inflintData } from './inflint-data';
import { prettierData } from './prettier-data';
import { stylelintData } from './stylelint-data';

export const librariesData: ILibraryData[] = [
	depcheckData,
	eslintData,
	inflintData,
	prettierData,
	stylelintData,
];
