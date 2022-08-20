import React from 'react';

import { concatClasses } from '@/utils/component';
import { LibraryType } from '@/models/library-type';

import classes from './TypesButtons.module.scss';

interface IProps {
	readonly index: number;
	readonly selectedTypeIndex: number;
	readonly onSelectType: (_: number) => void;
}

const TypesButtonsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<button
			key={props.index}
			className={classes['typeButton']}
			type="button"
			onClick={() => props.onSelectType(props.index)}
		>
			<span
				className={concatClasses(
					classes,
					'container',
					props.selectedTypeIndex === props.index
						? 'typeButton--isSelected'
						: 'typeButton--notSelected',
				)}
			>
				{LibraryType[props.index]}
			</span>
		</button>
	);
};

TypesButtonsView.displayName = 'TypesButtonsView';
TypesButtonsView.defaultProps = {};

export default React.memo(TypesButtonsView);
