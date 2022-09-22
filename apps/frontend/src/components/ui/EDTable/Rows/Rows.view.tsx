import React, { type ReactNode } from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

import { concatClasses } from '@/utils/component';
import EDSvg from '@/ui/EDSvg';

import classes from './Rows.module.scss';
import Pagination from './Pagination';

interface IProps {
	readonly data: ReactNode[][];
	readonly page: number;
	readonly totalItems: number;
	readonly dataLinks: string[];
}

const RowsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<>
			<div className={classes['data']}>
				{props.data.map((row, index) => (
					<Link key={index} className={classes['dataRow']} to={props.dataLinks[index] || ''}>
						<span className={concatClasses(classes, 'dataRow__item', 'dataRow__item--fixed')}>
							{10 * (props.page - 1) + index + 1}
							<Trans>&#8228;</Trans>
						</span>
						{row.map((item, innerIndex) => (
							<span key={`${index}-${innerIndex}`} className={classes['dataRow__item']}>
								{item}
							</span>
						))}
						<EDSvg className={classes['dataRow__linkItem']} name="strokeTableLinkArrowRight" />
					</Link>
				))}
			</div>

			<Pagination page={props.page} totalItems={props.totalItems} dataLength={props.data.length} />
		</>
	);
};

RowsView.displayName = 'RowsView';
RowsView.defaultProps = {};

export default React.memo(RowsView);
