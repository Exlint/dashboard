/* eslint-disable @typescript-eslint/consistent-type-imports */
import React, { CSSProperties } from 'react';

import type icons from '../../../icons';

import ELPSvgView from './ELPSvg.view';

interface IProps {
	readonly name: keyof typeof icons;
	readonly className?: string;
	readonly style?: CSSProperties;
	readonly onClick?: () => void;
}

const ELPSvg: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<ELPSvgView
			style={props.style}
			className={props.className}
			name={props.name}
			onClick={props.onClick}
		/>
	);
};

ELPSvg.displayName = 'ELPSvg';
ELPSvg.defaultProps = {};

export default React.memo(ELPSvg);
