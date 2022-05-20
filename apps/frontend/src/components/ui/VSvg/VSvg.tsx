import React, { CSSProperties } from 'react';

import icons from '../../../icons';

import VSvgView from './VSvg.view';

interface IProps {
	readonly name: keyof typeof icons;
	readonly className?: string;
	readonly style?: CSSProperties;
	readonly onClick?: () => void;
}

const VSvg: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<VSvgView style={props.style} className={props.className} name={props.name} onClick={props.onClick} />
	);
};

VSvg.displayName = 'VSvg';
VSvg.defaultProps = {};

export default React.memo(VSvg);
