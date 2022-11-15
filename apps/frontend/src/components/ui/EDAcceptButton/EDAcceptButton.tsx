import React from 'react';

import type { IProps } from './interface/props';

import EDAcceptButtonView from './EDAcceptButton.view';

const EDAcceptButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EDAcceptButtonView
			className={props.className}
			textClassName={props.textClassName}
			iconClassName={props.iconClassName}
			switchElementsOrder={props.switchElementsOrder}
			type={props.type}
			disabled={props.disabled}
			iconName={props.iconName}
			onClick={props.type === 'submit' ? undefined : props.onClick}
		>
			{props.children}
		</EDAcceptButtonView>
	);
};

EDAcceptButton.displayName = 'EDAcceptButton';
EDAcceptButton.defaultProps = {};

export default React.memo(EDAcceptButton);
