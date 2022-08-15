import React from 'react';

import EDSvg from '@/ui/EDSvg';

import classes from './EDSelectFromOptions.module.scss';

interface IProps {
	readonly defaultValue?: string;
	readonly componentWidth: string;
	readonly border: string;
	readonly selectedOptionIndex: number | null;
	readonly isShowMoreClicked: boolean;
	readonly optionsList: string[];
	readonly isVisibleValueBlocked?: boolean;
	readonly toggleSortByOpen: () => void;
	readonly toggleSortByClose: () => void;
	readonly onSelectedOption: (index: number) => void;
}

const EDSelectView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['selectedOptionsContainer']}>
			<div
				className={classes['selectedOptionsVisible']}
				style={{
					width: props.componentWidth,
					border: props.border,
					borderRadius: !props.isShowMoreClicked ? '10px' : '10px 10px 0 0',
				}}
			>
				<span className={classes['selectedOptionsVisible__text']}>
					{props.selectedOptionIndex !== null
						? props.optionsList[props.selectedOptionIndex]!.length > 12
							? props.optionsList[props.selectedOptionIndex]!.slice(0, 12) + '...'
							: props.optionsList[props.selectedOptionIndex!]
						: props.defaultValue}
				</span>
				{props.isShowMoreClicked ? (
					<button
						className={classes['moreOptionsButton']}
						type="button"
						onClick={props.toggleSortByClose}
					>
						<EDSvg className={classes['moreOptionsButton__arrowDown']} name="arrowDown" />
					</button>
				) : (
					<button
						className={classes['moreOptionsButton']}
						type="button"
						onClick={props.toggleSortByOpen}
					>
						<EDSvg className={classes['moreOptionsButton__arrowRight']} name="arrowRight" />
					</button>
				)}
			</div>
			<div
				className={classes['selectedOptionsInvisible']}
				style={{
					display: props.isShowMoreClicked ? 'flex' : 'none',
					width: props.componentWidth,
					border: props.border,
				}}
			>
				{props.optionsList.map((option, index) => (
					<button
						key={index}
						className={classes['selectedOptionsInvisible__option']}
						type="button"
						onClick={() => props.onSelectedOption(index)}
					>
						{option}
					</button>
				))}
			</div>
		</div>
	);
};

EDSelectView.displayName = 'EDSelectView';
EDSelectView.defaultProps = {};

export default React.memo(EDSelectView);
