import React, { type ReactNode } from 'react';

import type icons from '@/assets/icons';

import EDTableView from './EDTable.view';

interface IProps {
	readonly header: string;
	readonly buttonText?: string;
	readonly columnsHeaders: string[];
	readonly data: ReactNode[][];
	readonly dataLinks: string[];
	readonly totalItems: number;
	readonly noItemsPlaceholder: ReactNode;
	readonly className?: string;
	readonly buttonIconName?: keyof typeof icons;
	readonly blur?: boolean;
	readonly onButtonClick?: VoidFunction;
}

const EDTable: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EDTableView
			className={props.className}
			header={props.header}
			buttonText={props.buttonText}
			buttonIconName={props.buttonIconName}
			columnsHeaders={props.columnsHeaders}
			data={props.data}
			totalItems={props.totalItems}
			dataLinks={props.dataLinks}
			noItemsPlaceholder={props.noItemsPlaceholder}
			blur={props.blur}
			onButtonClick={props.onButtonClick}
		/>
	);
};

EDTable.displayName = 'EDTable';
EDTable.defaultProps = {};

export default React.memo(EDTable);
