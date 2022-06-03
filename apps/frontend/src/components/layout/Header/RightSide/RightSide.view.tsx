import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';

import VSvg from '@/ui/VSvg';
import classes from './RightSide.module.scss';

interface IProps {
	readonly onExitButton: () => void;
}

const RightSideView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['rightSideContainer']}>
			<button type="button" className={classes['linkContainer__text']} onClick={props.onExitButton}>
				Documentation
			</button>
			<VSvg className={classes['linkContainer__icon']} name="exitDoorIcon" />
		</div>
	);
};

RightSideView.displayName = 'RightSideView';
RightSideView.defaultProps = {};

export default React.memo(RightSideView);
