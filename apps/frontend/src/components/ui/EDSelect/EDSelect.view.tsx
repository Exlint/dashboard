import React from 'react';

import { concatClasses, concatDiverseClasses } from '@/utils/component';
import EDSvg from '@/ui/EDSvg';

import classes from './EDSelect.module.scss';

interface IProps {
	readonly className?: string;
	readonly placeholder?: string;
	readonly options: string[];
	readonly selectedOptionIndex: number | null;
	readonly tooltopRef: React.RefObject<HTMLDivElement>;
	readonly isTooltipVisible: boolean;
	readonly toggleTooltipVisibility: () => void;
	readonly onOptionSelect: (index: number) => void;
}

const EDSelectView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const containerClasses = concatDiverseClasses(classes['container'], props.className);

	const buttonContainerClasses = concatClasses(
		classes,
		'buttonContainer',
		props.isTooltipVisible ? 'buttonContainer--tooltipIsVisible' : 'buttonContainer--tooltipIsInvisible',
	);

	const selectArrowIconClasses = concatClasses(
		classes,
		'buttonContainer__arrow',
		props.isTooltipVisible ? 'buttonContainer__arrow--tooltipIsVisible' : null,
	);

	const selectText =
		props.selectedOptionIndex !== null
			? props.options[props.selectedOptionIndex]
			: props.placeholder ?? props.options[0];

	return (
		<div className={containerClasses}>
			<button className={buttonContainerClasses} type="button" onClick={props.toggleTooltipVisibility}>
				<span className={classes['buttonContainer__text']}>{selectText}</span>

				<EDSvg className={selectArrowIconClasses} name="arrowRight" />
			</button>
			{props.isTooltipVisible && (
				<div ref={props.tooltopRef} className={classes['optionsContainer']}>
					{props.options.map((option, index) => (
						<button
							key={index}
							className={classes['optionsContainer__option']}
							type="button"
							onClick={() => props.onOptionSelect(index)}
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
