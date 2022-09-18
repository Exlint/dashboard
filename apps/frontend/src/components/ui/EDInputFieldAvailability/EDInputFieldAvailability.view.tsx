import React from 'react';
import { useTranslation } from 'react-i18next';

import { concatClasses, concatDiverseClasses } from '@/utils/component';

import EDInputField from '../EDInputField/EDInputField';
import EDSvg from '../EDSvg';

import classes from './EDInputFieldAvailability.module.scss';

interface IProps {
	readonly id?: string;
	readonly className?: string;
	readonly value: string | null;
	readonly maxLength?: number;
	readonly placeholder?: string;
	readonly isAvailable: boolean | null;
	readonly onChange: (value: string) => void;
}

const EDInputFieldAvailabilityView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<EDInputField
				id={props.id}
				className={concatDiverseClasses(classes['container__input'], props.className)}
				value={props.value}
				maxLength={props.maxLength}
				placeholder={props.placeholder}
				onChange={props.onChange}
			/>
			{props.isAvailable !== null && (
				<div className={classes['tooltip']}>
					<EDSvg
						className={concatClasses(
							classes,
							'tooltip__icon',
							props.isAvailable ? 'tooltip__icon--available' : 'tooltip__icon--unavailable',
						)}
						name={props.isAvailable ? 'vStroke' : 'xFill'}
					/>
					<span className={classes['tooltip__text']}>
						{props.isAvailable
							? t('labelAvailability.isAvailable')
							: t('labelAvailability.isUnavailable')}
					</span>
				</div>
			)}
		</div>
	);
};

EDInputFieldAvailabilityView.displayName = 'EDInputFieldAvailabilityView';
EDInputFieldAvailabilityView.defaultProps = {};

export default React.memo(EDInputFieldAvailabilityView);
