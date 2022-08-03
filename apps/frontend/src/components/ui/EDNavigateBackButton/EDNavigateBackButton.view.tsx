import React from 'react';
import { useTranslation } from 'react-i18next';
import EDSvg from '@/ui/EDSvg';

import classes from './EDNavigateBackButton.module.scss';

interface IProps {
	readonly onGoBack: () => void;
}

const EDNavigateBackButtonView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<button className={classes['container']} type="button" role="button" onClick={props.onGoBack}>
			<EDSvg className={classes['container__icon']} name="arrowLeft" />
			<span className={classes['container__text']}>{t('navigateBackButton.back')}</span>
		</button>
	);
};

EDNavigateBackButtonView.displayName = 'EDNavigateBackButtonView';
EDNavigateBackButtonView.defaultProps = {};

export default React.memo(EDNavigateBackButtonView);
