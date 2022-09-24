import React from 'react';

import { concatDiverseClasses } from '@/utils/component';

import EDSvg from '../EDSvg';
import type { IProps } from './interface/props';

import classes from './EDAcceptButton.module.scss';

const EDAcceptButtonView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	if (props.type === 'submit') {
		return (
			<button
				className={concatDiverseClasses(classes['container'], props.className)}
				type="submit"
				disabled={props.disabled}
			>
				{props.iconName ? (
					<>
						<span className={classes['container__text']}>{props.children}</span>
						<EDSvg className={classes['container__icon']} name={props.iconName} />
					</>
				) : (
					props.children
				)}
			</button>
		);
	}

	return (
		<button
			className={concatDiverseClasses(classes['container'], props.className)}
			type="button"
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{props.iconName ? (
				<>
					<span className={classes['container__text']}>{props.children}</span>
					<EDSvg className={classes['container__icon']} name={props.iconName} />
				</>
			) : (
				props.children
			)}
		</button>
	);
};

EDAcceptButtonView.displayName = 'EDAcceptButtonView';
EDAcceptButtonView.defaultProps = {};

export default React.memo(EDAcceptButtonView);
