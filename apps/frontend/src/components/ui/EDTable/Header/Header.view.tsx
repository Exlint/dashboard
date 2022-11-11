import React, { type ReactNode } from 'react';
import { Trans } from 'react-i18next';

import EDAcceptButton from '@/ui/EDAcceptButton';
import { concatClasses } from '@/utils/component';
import type icons from '@/assets/icons';

import classes from './Header.module.scss';

interface IProps {
	readonly header: string;
	readonly buttonText?: string;
	readonly columnsHeaders: ReactNode[];
	readonly buttonIconName?: keyof typeof icons;
	readonly onButtonClick?: VoidFunction;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['tableHeader']}>
			<div className={classes['topHeader']}>
				<h4 className={classes['topHeader__text']}>{props.header}</h4>

				{props.buttonText && props.onButtonClick && (
					<EDAcceptButton
						type="button"
						disabled={false}
						iconName={props.buttonIconName}
						onClick={props.onButtonClick}
					>
						{props.buttonText}
					</EDAcceptButton>
				)}
			</div>
			<div className={classes['columnsHeaders']}>
				<span
					className={concatClasses(
						classes,
						'columnsHeaders__column',
						'columnsHeaders__column--fixed',
					)}
				>
					<Trans>&#35;</Trans>
				</span>
				{props.columnsHeaders.map((column, index) => (
					<span key={index} className={classes['columnsHeaders__column']}>
						{column}
					</span>
				))}
				<span
					className={concatClasses(
						classes,
						'columnsHeaders__column',
						'columnsHeaders__column--link',
					)}
				/>
			</div>
		</div>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
