import React, { type CSSProperties } from 'react';

import type icons from '@/assets/icons';

import EDSvgView from './EDSvg.view';

interface IProps {
	readonly name: keyof typeof icons;
	readonly className?: string;
	readonly style?: CSSProperties;
	readonly onClick?: VoidFunction;
}

const EDSvg: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EDSvgView
			style={props.style}
			className={props.className}
			name={props.name}
			onClick={props.onClick}
		/>
	);
};

EDSvg.displayName = 'EDSvg';
EDSvg.defaultProps = {};

export default React.memo(EDSvg);
