import React, { type ReactNode } from 'react';

import { concatDiverseClasses } from '@/utils/component';
import type icons from '@/assets/icons';

import Rows from './Rows';
import Header from './Header';

import classes from './EDTable.module.scss';

interface IProps {
	readonly header: string;
	readonly buttonText: string;
	readonly columnsHeaders: string[];
	readonly data: ReactNode[][];
	readonly totalItems: number;
	readonly dataLinks: string[];
	readonly className?: string;
	readonly buttonIconName?: keyof typeof icons;
	readonly noItemsPlaceholder: ReactNode;
	readonly onButtonClick: VoidFunction;
}

const EDTableView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={concatDiverseClasses(classes['container'], props.className)}>
			<Header
				header={props.header}
				buttonText={props.buttonText}
				columnsHeaders={props.columnsHeaders}
				buttonIconName={props.buttonIconName}
				onButtonClick={props.onButtonClick}
			/>
			{props.totalItems > 0 ? (
				<Rows data={props.data} totalItems={props.totalItems} dataLinks={props.dataLinks} />
			) : (
				props.noItemsPlaceholder
			)}
		</div>
	);
};

EDTableView.displayName = 'EDTableView';
EDTableView.defaultProps = {};

export default React.memo(EDTableView);
