import React, { type RefObject } from 'react';
import { Trans } from 'react-i18next';

import { concatClasses, concatDiverseClasses } from '@/utils/component';

import EDSvg from '../EDSvg';

import classes from './EDSelect.module.scss';

interface IProps {
	readonly className?: string;
	readonly selectRef: RefObject<HTMLDivElement>;
	readonly isSelectVisible: boolean;
	readonly options: string[];
	readonly selectedIndex: number;
	readonly prefix: string;
	readonly onSelect: (index: number) => void;
	readonly toggleSelectVisibility: VoidFunction;
}

const EDSelectView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const selectedOption = props.options[props.selectedIndex]!;

	const selectedOptionClasses = concatClasses(
		classes,
		'selectedOptionContainer',
		props.isSelectVisible ? 'selectedOptionContainer--open' : null,
	);

	return (
		<div ref={props.selectRef} className={classes['container']}>
			<div
				className={concatDiverseClasses(selectedOptionClasses, props.className)}
				onClick={props.toggleSelectVisibility}
			>
				<div className={classes['selectedOptionText']}>
					<span className={classes['selectedOptionText__prefix']}>
						{props.prefix}
						<Trans>&#58;</Trans>
						&nbsp;
					</span>

					<span className={classes['selectedOptionText__selectedLabel']}>{selectedOption}</span>
				</div>
				<EDSvg className={classes['selectedOptionContainer__icon']} name="strokeArrowDown" />
			</div>

			{props.isSelectVisible && (
				<div className={classes['optionsContainer']}>
					{props.options.map((option, index) => (
						<span
							key={index}
							className={classes['optionsContainer__option']}
							onClick={() => props.onSelect(index)}
						>
							{option}
						</span>
					))}
				</div>
			)}
		</div>
	);
};

EDSelectView.displayName = 'EDSelectView';
EDSelectView.defaultProps = {};

export default React.memo(EDSelectView);
