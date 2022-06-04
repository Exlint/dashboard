import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';
import VSvg from '@/ui/VSvg';

import classes from './NavigateBackButton.module.scss';

interface IProps {
	readonly onGoBack: () => void;
}

const NavigateBackButtonView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['navigateBackButton']}>
			<VSvg className={classes['navigateBackButton__icon']} name="arrowLeft" />
			<button className={classes['navigateBackButton__text']} type="button" onClick={props.onGoBack}>
				Back
			</button>
		</div>
	);
};

NavigateBackButtonView.displayName = 'NavigateBackButtonView';
NavigateBackButtonView.defaultProps = {};

export default React.memo(NavigateBackButtonView);
