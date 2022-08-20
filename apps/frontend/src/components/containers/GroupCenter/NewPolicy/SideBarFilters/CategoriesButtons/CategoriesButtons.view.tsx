import React from 'react';

import { concatClasses } from '@/utils/component';
import { LibraryCategory } from '@/models/library-category';

import classes from './CategoriesButtons.module.scss';

interface IProps {
	readonly index: number;
	readonly selectedCategoryIndex: number;
	readonly onSelectCategory: (_: number) => void;
}

const CategoriesButtonsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<button
			key={props.index}
			className={classes['categoryButton']}
			type="button"
			onClick={() => props.onSelectCategory(props.index)}
		>
			<span
				className={concatClasses(
					classes,
					'container',
					props.selectedCategoryIndex === props.index
						? 'categoryButton--isSelected'
						: 'categoryButton--notSelected',
				)}
			>
				{LibraryCategory[props.index]}
			</span>
		</button>
	);
};

CategoriesButtonsView.displayName = 'CategoriesButtonsView';
CategoriesButtonsView.defaultProps = {};

export default React.memo(CategoriesButtonsView);
