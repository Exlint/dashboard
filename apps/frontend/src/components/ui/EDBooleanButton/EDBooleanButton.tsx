import React from 'react';

import EDBooleanButtonView from './EDBooleanButton.view';

interface IProps {
	readonly className?: string;
	readonly checked: boolean | null;
	readonly onChange: (checked: boolean) => void;
}

const EDBooleanButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EDBooleanButtonView className={props.className} checked={props.checked} onChange={props.onChange} />
	);
};

EDBooleanButton.displayName = 'EDBooleanButton';
EDBooleanButton.defaultProps = {};

export default React.memo(EDBooleanButton);
