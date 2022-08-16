import React from 'react';

import { concatDiverseClasses } from '@/utils/component';
import EDSvg from '@/ui/EDSvg';

import classes from './EDSelect.module.scss';

interface IProps {
	readonly placeholder?: string;
	readonly className?: string;
	readonly selectedOptionIndex: number | null;
	readonly optionsList: string[];
	readonly tooltopRef: React.RefObject<HTMLDivElement>;
	readonly isTooltipVisible: boolean;
	readonly toggleTooltipVisibility: () => void;
	readonly onSelect: (index: number) => void;
}

const EDSelectView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const buttonContainer = concatDiverseClasses(classes['selectedOptionsVisible'], props.className);
	const tooltipContainer = concatDiverseClasses(classes['selectedOptionsInvisible'], props.className);

	return (
		<div className={classes['container']}>
			<button
				type="button"
				className={buttonContainer}
				style={{
					borderRadius: props.isTooltipVisible ? '10px 10px 0 0' : '10px',
				}}
			>
				<span className={classes['selectedOptionsVisible__text']}>
					{props.placeholder ?? props.optionsList[0]}
				</span>

				<div className={classes['moreOptionsButton']}>
					<EDSvg
						className={
							props.isTooltipVisible
								? classes['moreOptionsButton__arrowDown']
								: classes['moreOptionsButton__arrowRight']
						}
						name={props.isTooltipVisible ? 'arrowDown' : 'arrowRight'}
					/>
				</div>
			</button>
			{props.isTooltipVisible && (
				<div ref={props.tooltopRef} className={tooltipContainer}>
					{props.optionsList.map((option, index) => (
						<button
							key={index}
							className={classes['selectedOptionsInvisible__option']}
							type="button"
							onClick={() => props.onSelect(index)}
						>
							{option}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

EDSelectView.displayName = 'EDSelectView';
EDSelectView.defaultProps = {};

export default React.memo(EDSelectView);
