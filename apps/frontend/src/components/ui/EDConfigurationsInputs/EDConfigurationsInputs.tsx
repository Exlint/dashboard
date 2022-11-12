import React from 'react';

import type { ILibraryData } from '@exlint-dashboard/common';

import EDConfigurationsInputsView from './EDConfigurationsInputs.view';

interface IProps {
	readonly formSchema: ILibraryData['configuration'] | null;
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const EDConfigurationsInputs: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EDConfigurationsInputsView
			formSchema={props.formSchema}
			onChangeFormConfiguration={props.onChangeFormConfiguration}
		/>
	);
};

EDConfigurationsInputs.displayName = 'EDConfigurationsInputs';
EDConfigurationsInputs.defaultProps = {};

export default React.memo(EDConfigurationsInputs);
