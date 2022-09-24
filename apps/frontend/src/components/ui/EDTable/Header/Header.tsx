import React from 'react';

import type icons from '@/assets/icons';

import HeaderView from './Header.view';

interface IProps {
	readonly header: string;
	readonly buttonText: string;
	readonly columnsHeaders: string[];
	readonly buttonIconName?: keyof typeof icons;
	readonly onButtonClick: VoidFunction;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<HeaderView
			header={props.header}
			buttonText={props.buttonText}
			columnsHeaders={props.columnsHeaders}
			buttonIconName={props.buttonIconName}
			onButtonClick={props.onButtonClick}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
