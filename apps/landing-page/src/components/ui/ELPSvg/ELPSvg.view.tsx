/* eslint-disable @typescript-eslint/consistent-type-imports */
import React, { CSSProperties } from 'react';

import icons from '../../../icons';

import classes from './ELPSvg.module.scss';

interface Props {
	readonly name: keyof typeof icons;
	readonly className?: string;
	readonly style?: CSSProperties;
	readonly onClick?: () => void;
}

const ELPSvgView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
	const svgClasses = classes['container'] + (props.className ? ` ${props.className}` : '');

	return (
		<svg
			style={props.style}
			className={svgClasses}
			version="1.1"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox={'0 0 ' + icons[props.name][0]}
			dangerouslySetInnerHTML={{ __html: icons[props.name][1] ?? '' }}
			onClick={props.onClick}
		/>
	);
};

ELPSvgView.displayName = 'ELPSvgView';
ELPSvgView.defaultProps = {};

export default ELPSvgView;
