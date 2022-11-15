import React, { useState } from 'react';

import EDBooleanView from './EDBoolean.view';

interface IProps {
	readonly keyConfig: string | undefined;
	readonly configName: string;
	readonly title: string | null;
	readonly description: string | null;
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const EDBoolean: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isSwitchCheckedState, setIsSwitchCheckedState] = useState<boolean>(false);

	const onIsSwitchCheckedChange = (checked: boolean) => {
		setIsSwitchCheckedState(() => checked);

		props.onChangeFormConfiguration(props.configName, checked);
	};

	return (
		<EDBooleanView
			isSwitchChecked={isSwitchCheckedState}
			title={props.title}
			description={props.description}
			onIsSwitchCheckedChange={onIsSwitchCheckedChange}
		/>
	);
};

EDBoolean.displayName = 'EDBoolean';
EDBoolean.defaultProps = {};

export default React.memo(EDBoolean);
