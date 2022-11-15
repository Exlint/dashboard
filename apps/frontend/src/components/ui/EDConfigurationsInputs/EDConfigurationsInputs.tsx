import React from 'react';

import type { ILibraryData } from '@exlint-dashboard/common';

import EDConfigurationsInputsView from './EDConfigurationsInputs.view';

interface IProps {
	readonly configName?: string;
	readonly formSchema: ILibraryData['configuration'] | null;
	readonly nestedKeys: string[] | null;
	readonly isNestedBodyVisible?: boolean;
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
	readonly onToggleNestedBody?: () => void;
	readonly onChangeNestedkeys: (_: string | null) => void;
}

const EDConfigurationsInputs: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EDConfigurationsInputsView
			configName={props.configName}
			formSchema={props.formSchema}
			nestedKeys={props.nestedKeys}
			isNestedBodyVisible={props.isNestedBodyVisible}
			onChangeFormConfiguration={props.onChangeFormConfiguration}
			onToggleNestedBody={props.onToggleNestedBody}
			onChangeNestedkeys={props.onChangeNestedkeys}
		/>
	);
};

EDConfigurationsInputs.displayName = 'EDConfigurationsInputs';
EDConfigurationsInputs.defaultProps = {};

export default React.memo(EDConfigurationsInputs);
