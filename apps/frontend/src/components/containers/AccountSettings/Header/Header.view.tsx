import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import EDCopyTextBox from '@/ui/EDCopyTextBox';

import classes from './Header.module.scss';

interface IProps {
	readonly name: string;
	readonly clientId: string;
	readonly userCreationDate: string;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<span className={classes['routeDetails']}>
				{props.name}
				&nbsp;
				<Trans>&#47;</Trans>
				&nbsp;
				<span className={classes['routeDetails__route']}>
					{t('accountSettings.header.routeText')}
				</span>
			</span>
			<div className={classes['accountDetails']}>
				<span className={classes['accountDetails__rawText']}>
					{t('accountSettings.header.clientId')}
					<Trans>&#58;</Trans>
				</span>
				<EDCopyTextBox className={classes['clientIdContainer']} value={props.clientId} />
				<span className={classes['accountDetails__rawText']}>
					{t('accountSettings.header.userCreated')}
					<Trans>&#58;</Trans>
					&nbsp;
					{props.userCreationDate}
				</span>
			</div>
		</div>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
