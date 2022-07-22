import React from 'react';

import { secretExpiry } from '@/data/Secret-expiry';
import { concatClasses } from '@/utils/component';
import SelectFromOptions from '@/ui/SelectFromOptions';

import classes from './LeftSide.module.scss';

interface IProps {
	readonly isExpiresClickedState: boolean | null;
	readonly selectedSortByOptionIndexState: number | null;
	readonly labelState?: string;
	readonly createSecretButtonState: boolean;
	readonly isSortByClickedState: boolean;
	readonly dispalyModalRightSide: boolean;
	readonly onDisplayRightSide: () => void;
	readonly onLabelChange: (_: string) => void;
	readonly onSelectedSortBy: (_: number) => void;
	readonly onExpiresClicked: () => void;
	readonly onSortBy: () => void;
}

const LeftSideView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const createSecretClasses = props.createSecretButtonState
		? classes['container__button']
		: concatClasses(classes, 'container__button', 'container__button--disabled');

	const disabledSecretCrationTitlesClass = concatClasses(
		classes,
		'container__innerWrapper--title',
		'container__innerWrapper--titleDisabled',
	);

	const secretCrationTitlesClasses = !props.dispalyModalRightSide
		? classes['container__innerWrapper--title']
		: disabledSecretCrationTitlesClass;

	const placeholderColor = !props.dispalyModalRightSide ? '#4b4a65' : '#BBB8CA';

	return (
		<section className={classes['container']}>
			<div className={classes['container__title']}>Secret Creation</div>
			<div className={classes['container__innerWrapper']}>
				<span className={secretCrationTitlesClasses}>Label</span>
				<input
					className={classes['container__innerWrapper--input']}
					disabled={props.dispalyModalRightSide}
					type="text"
					value={props.labelState ?? ''}
					onChange={({ currentTarget: { value } }) => props.onLabelChange(value)}
				/>
				<span className={secretCrationTitlesClasses}>Expires</span>
				<div className={classes['container__innerWrapper--select']}>
					<SelectFromOptions
						componentWidth="230px"
						defaultValue="Expires"
						border="1px solid #BBB8CA"
						selectedOptionIndex={props.selectedSortByOptionIndexState}
						placeholderColor={placeholderColor}
						isDisabled={props.dispalyModalRightSide}
						isShowMoreClicked={props.isSortByClickedState}
						optionsList={secretExpiry}
						onSelectOptionsButton={props.onSortBy}
						onSelectedOption={props.onSelectedSortBy}
					/>
				</div>
			</div>
			<button
				className={createSecretClasses}
				type="button"
				role="button"
				disabled={!props.createSecretButtonState}
				onClick={props.onDisplayRightSide}
			>
				Create Secret & Countinue
			</button>
		</section>
	);
};

LeftSideView.displayName = 'LeftSideView';
LeftSideView.defaultProps = {};

export default React.memo(LeftSideView);
