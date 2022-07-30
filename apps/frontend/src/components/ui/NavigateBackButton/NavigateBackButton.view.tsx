import React from 'react';
import EDSvg from '@/ui/EDSvg';

import classes from './NavigateBackButton.module.scss';

interface IProps {
	readonly position: {
		readonly bottom: string;
		readonly right: string;
	};
	readonly onGoBack: () => void;
}

const NavigateBackButtonView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div
			className={classes['navigateBackButton']}
			style={{ bottom: props.position.bottom, right: props.position.right }}
		>
			<EDSvg className={classes['navigateBackButton__icon']} name="arrowLeft" />
			<button
				className={classes['navigateBackButton__text']}
				type="button"
				role="button"
				onClick={props.onGoBack}
			>
				Back
			</button>
		</div>
	);
};

NavigateBackButtonView.displayName = 'NavigateBackButtonView';
NavigateBackButtonView.defaultProps = {};

export default React.memo(NavigateBackButtonView);
