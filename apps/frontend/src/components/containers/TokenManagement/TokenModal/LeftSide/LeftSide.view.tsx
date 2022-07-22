import React from 'react';

import { secretExpiry } from '@/data/secret-expiry';
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
	const secretCrationTitlesClasses = !props.dispalyModalRightSide
		? classes['innerWrapper__title']
		: concatClasses(classes, 'innerWrapper__title', 'innerWrapper__title--disabled');

	const placeholderColor = !props.dispalyModalRightSide ? '#4b4a65' : '#BBB8CA';

	return (
		<section className={classes['container']}>
			<div className={classes['container__title']}>Secret Creation</div>
			<div className={classes['innerWrapper']}>
				<span className={secretCrationTitlesClasses}>Label</span>
				<input
					className={classes['innerWrapper__input']}
					disabled={props.dispalyModalRightSide}
					type="text"
					value={props.labelState ?? ''}
					onChange={({ currentTarget: { value } }) => props.onLabelChange(value)}
				/>
				<span className={secretCrationTitlesClasses}>Expires</span>
				<div className={classes['innerWrapper__select']}>
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
				className={classes['container__button']}
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
