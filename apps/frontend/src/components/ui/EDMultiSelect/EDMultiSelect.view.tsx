import React, { type RefObject } from 'react';

import { concatClasses, concatDiverseClasses } from '@/utils/component';
import EDSvg from '@/ui/EDSvg';
import type { IOption } from './interfaces/option';

import classes from './EDMultiSelect.module.scss';

interface IProps<T> {
	readonly selectedOptions: IOption<T>[];
	readonly wrapperClassName?: string;
	readonly optionsClassName?: string;
	readonly placeholder?: string;
	readonly className?: string;
	readonly selectRef: RefObject<HTMLDivElement>;
	readonly isSelectVisible: boolean;
	readonly options: IOption<T>[];
	readonly onSelect: (_: T) => void;
	readonly onRemove: (_: T) => void;
	readonly onAddOption: (_: IOption<T>) => void;
	readonly onRemoveOption: (_: IOption<T>) => void;
	readonly toggleSelectVisibility: VoidFunction;
}

const EDMultiSelectView = <T,>(props: React.PropsWithChildren<IProps<T>>) => {
	const selectedOptionClasses = concatDiverseClasses(
		concatClasses(
			classes,
			'selectedOptionContainer',
			props.isSelectVisible ? 'selectedOptionContainer--open' : null,
		),
		props.className,
	);

	const addOptionClickHandler = (value: IOption<T>) => {
		props.onSelect(value.value);
		props.onAddOption(value);
	};

	const removeOptionsClickHandler = (value: IOption<T>) => {
		props.onRemove(value.value);
		props.onRemoveOption(value);
	};

	return (
		<div
			ref={props.selectRef}
			className={concatDiverseClasses(classes['container'], props.wrapperClassName)}
		>
			<div className={selectedOptionClasses} onClick={props.toggleSelectVisibility}>
				<div className={classes['selectedOptionText']}>
					{props.selectedOptions.length === 0 && (
						<span className={classes['selectedOptionText__placeholder']}>
							{props.placeholder}
						</span>
					)}
					{props.selectedOptions.map((option, index) => (
						<div key={index} className={classes['selectedOptionBox']}>
							<span className={classes['selectedOptionBox__label']}>{option.label}</span>
							<div className={classes['rightSideContainer']}>
								<hr className={classes['rightSideContainer__divider']} />
								<button
									className={classes['removeButton']}
									type="button"
									onClick={() => removeOptionsClickHandler(option)}
								>
									<EDSvg className={classes['removeButton__icon']} name="xFill" />
								</button>
							</div>
						</div>
					))}
				</div>
				<EDSvg className={classes['selectedOptionContainer__icon']} name="strokeArrowDown" />
			</div>

			{props.isSelectVisible && (
				<div className={concatDiverseClasses(classes['optionsContainer'], props.optionsClassName)}>
					{props.options.map((option, index) => (
						<span
							key={index}
							className={classes['optionsContainer__option']}
							onClick={() => addOptionClickHandler(option)}
						>
							{option.label}
						</span>
					))}
				</div>
			)}
		</div>
	);
};

EDMultiSelectView.displayName = 'EDMultiSelectView';
EDMultiSelectView.defaultProps = {};

export default React.memo(EDMultiSelectView);
