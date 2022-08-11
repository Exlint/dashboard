import React from 'react';
import { useTranslation } from 'react-i18next';
import { CSVLink } from 'react-csv';

import EDSvg from '@/ui/EDSvg';
import { concatClasses } from '@/utils/component';

import classes from './RightSide.module.scss';

interface IProps {
	readonly tokenState: string;
	readonly copyTokenState: boolean;
	readonly onCopyToken: () => void;
	readonly onCloseModal: () => void;
}

const RightSideView: React.FC<IProps> = (props) => {
	const { t } = useTranslation();

	const copyTokenClasses = props.copyTokenState
		? concatClasses(classes, 'idWrapper__icon', 'idWrapper__icon--disabled')
		: classes['idWrapper__icon'];

	return (
		<section className={classes['container']}>
			<div className={classes['header']}>
				<div className={classes['header__title']}>
					{t('tokenManagement.tokenManagementModal.secretTokenTitle')}
				</div>
				<div className={classes['header__description']}>
					{t('tokenManagement.tokenManagementModal.secretTokenSubTitle')}
				</div>
			</div>
			<div className={classes['innerWrapper']}>
				<div className={classes['copyWrapper']}>
					<div className={classes['copyWrapper__title']}>
						{t('tokenManagement.tokenManagementModal.copy')}
					</div>
					<div className={classes['idWrapper']}>
						<span className={classes['idWrapper__id']}>{props.tokenState}</span>
						<EDSvg
							name="tokenClientId"
							className={copyTokenClasses}
							onClick={props.onCopyToken}
						/>
					</div>
					{props.copyTokenState && (
						<div className={classes['copyWrapper__copied']}>
							{t('tokenManagement.tokenManagementModal.copied')}
						</div>
					)}
				</div>
				<div className={classes['downloadCsv']}>
					<div className={classes['downloadCsv__title']}>
						{t('tokenManagement.tokenManagementModal.downloadCsv')}
					</div>
					<CSVLink
						className={classes['downloadCsv__iconWrapper']}
						data={props.tokenState}
						filename="token.csv"
					>
						<EDSvg className={classes['downloadCsv__icon']} name="dwonloadCsv" />
					</CSVLink>
				</div>
			</div>
			<div className={classes['container__button']} onClick={props.onCloseModal}>
				{t('tokenManagement.tokenManagementModal.done')}
			</div>
		</section>
	);
};

RightSideView.displayName = 'RightSideView';
RightSideView.defaultProps = {};

export default React.memo(RightSideView);
