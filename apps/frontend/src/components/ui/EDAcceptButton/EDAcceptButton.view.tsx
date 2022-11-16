import React from 'react';

import { concatDiverseClasses } from '@/utils/component';

import EDSvg from '../EDSvg';
import type { IProps } from './interface/props';

import classes from './EDAcceptButton.module.scss';

const EDAcceptButtonView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const onClickProps = props.type === 'submit' ? {} : { onClick: props.onClick };

	let innerElementsToRender = props.children;

	if (props.iconName && props.switchElementsOrder) {
		innerElementsToRender = (
			<>
				<EDSvg
					className={concatDiverseClasses(
						classes['container__icon'],
						classes['container__withMargin'],
						props.iconClassName,
					)}
					name={props.iconName}
				/>
				<span className={concatDiverseClasses(classes['container__text'], props.textClassName)}>
					{props.children}
				</span>
			</>
		);
	}

	if (props.iconName && !props.switchElementsOrder) {
		innerElementsToRender = (
			<>
				<span
					className={concatDiverseClasses(
						classes['container__text'],
						classes['container__withMargin'],
						props.textClassName,
					)}
				>
					{props.children}
				</span>
				<EDSvg
					className={concatDiverseClasses(classes['container__icon'], props.iconClassName)}
					name={props.iconName}
				/>
			</>
		);
	}

	return (
		<button
			className={concatDiverseClasses(classes['container'], props.className)}
			type={props.type === 'submit' ? 'submit' : 'button'}
			disabled={props.disabled}
			{...onClickProps}
		>
			{innerElementsToRender}
		</button>
	);
};

EDAcceptButtonView.displayName = 'EDAcceptButtonView';
EDAcceptButtonView.defaultProps = {};

export default React.memo(EDAcceptButtonView);
