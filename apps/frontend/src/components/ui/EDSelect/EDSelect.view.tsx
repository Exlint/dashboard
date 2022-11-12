import React, { type RefObject } from 'react';
import { Trans } from 'react-i18next';

import { concatClasses, concatDiverseClasses } from '@/utils/component';

import EDSvg from '../EDSvg';

import classes from './EDSelect.module.scss';

interface IProps {
	readonly wrapperClassName?: string;
	readonly optionsClassName?: string;
	readonly className?: string;
	readonly selectRef: RefObject<HTMLDivElement>;
	readonly isSelectVisible: boolean;
	readonly options: string[];
	readonly selectedIndex: number;
	readonly prefix?: string;
	readonly disabled?: boolean;
	readonly onSelect: (index: number) => void;
	readonly toggleSelectVisibility: VoidFunction;
}

const EDSelectView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const selectedOption = props.options[props.selectedIndex]!;
	const disabled = props.disabled ?? false;

	const selectedOptionClasses = concatDiverseClasses(
		concatClasses(
			classes,
			'selectedOptionContainer',
			props.isSelectVisible && !disabled ? 'selectedOptionContainer--open' : null,
		),
		props.className,
	);

	const selectOptionClickHandler = (index: number) => {
		props.onSelect(index);
		props.toggleSelectVisibility();
	};

	return (
		<div
			ref={props.selectRef}
			className={concatDiverseClasses(classes['container'], props.wrapperClassName)}
		>
			<div className={selectedOptionClasses} onClick={props.toggleSelectVisibility}>
				<div className={classes['selectedOptionText']}>
					{props.prefix && (
						<span className={classes['selectedOptionText__prefix']}>
							{props.prefix}
							<Trans>&#58;</Trans>
							&nbsp;
						</span>
					)}

					<span className={classes['selectedOptionText__selectedLabel']}>{selectedOption}</span>
				</div>
				<EDSvg className={classes['selectedOptionContainer__icon']} name="strokeArrowDown" />
			</div>

			{props.isSelectVisible && !disabled && (
				<div className={concatDiverseClasses(classes['optionsContainer'], props.optionsClassName)}>
					{props.options.map((option, index) => (
						<span
							key={index}
							className={classes['optionsContainer__option']}
							onClick={() => selectOptionClickHandler(index)}
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
