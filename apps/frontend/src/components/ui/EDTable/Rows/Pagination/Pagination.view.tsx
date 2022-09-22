import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { concatClasses } from '@/utils/component';
import EDSvg from '@/ui/EDSvg';

import classes from './Pagination.module.scss';

interface IProps {
	readonly page: number;
	readonly totalItems: number;
	readonly dataLength: number;
	readonly onPaginateBackward: VoidFunction;
	readonly onPaginateForward: VoidFunction;
}

const PaginationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const itemsStartIndex = 10 * (props.page - 1) + 1;
	const itemsEndIndex = itemsStartIndex + props.dataLength - 1;
	const totalPages = Math.ceil(props.totalItems / 10);
	const canPaginateBackward = props.page > 1;
	const canPaginateForward = props.page < totalPages;

	return (
		<div className={classes['container']}>
			<span className={concatClasses(classes, 'container__text', 'container__text--total')}>
				{10 * (props.page - 1) + 1}
				&nbsp;
				<Trans>&#8211;</Trans>
				&nbsp;
				{itemsEndIndex}
				&nbsp;
				{t('table.of')}
				&nbsp;
				{props.totalItems}
				&nbsp;
				{t('table.items')}
			</span>
			<span className={classes['container__text']}>
				{props.page}
				&nbsp;
				{t('table.of')}
				&nbsp;
				{totalPages}
				&nbsp;
				{t('table.pages')}
			</span>
			<div
				className={concatClasses(
					classes,
					'paginationIcon',
					canPaginateBackward ? null : 'paginationIcon--disabled',
				)}
				onClick={props.onPaginateBackward}
			>
				<EDSvg
					className={concatClasses(
						classes,
						'paginationIcon__icon',
						'paginationIcon__icon--left',
						canPaginateBackward ? null : 'paginationIcon__icon--disabled',
					)}
					name="paginationArrowRight"
				/>
			</div>
			<div
				className={concatClasses(
					classes,
					'paginationIcon',
					canPaginateForward ? null : 'paginationIcon--disabled',
				)}
				onClick={props.onPaginateForward}
			>
				<EDSvg
					className={concatClasses(
						classes,
						'paginationIcon__icon',
						canPaginateForward ? null : 'paginationIcon__icon--disabled',
					)}
					name="paginationArrowRight"
				/>
			</div>
		</div>
	);
};

PaginationView.displayName = 'PaginationView';
PaginationView.defaultProps = {};

export default React.memo(PaginationView);
