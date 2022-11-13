import React from 'react';

import type { ILibraryData } from '@exlint-dashboard/common';

import EDConfigurationsInputsView from './EDConfigurationsInputs.view';

interface IProps {
	readonly formSchema: ILibraryData['configuration'] | null;
	readonly isNestedBodyVisible?: boolean;
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
	readonly onToggleNestedBody?: () => void;
}

const EDConfigurationsInputs: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EDConfigurationsInputsView
			formSchema={props.formSchema}
			isNestedBodyVisible={props.isNestedBodyVisible}
			onChangeFormConfiguration={props.onChangeFormConfiguration}
			onToggleNestedBody={props.onToggleNestedBody}
		/>
	);
};

EDConfigurationsInputs.displayName = 'EDConfigurationsInputs';
EDConfigurationsInputs.defaultProps = {};

export default React.memo(EDConfigurationsInputs);
