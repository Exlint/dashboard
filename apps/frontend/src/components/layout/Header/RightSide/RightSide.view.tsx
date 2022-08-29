import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import classes from './RightSide.module.scss';

interface IProps {
	readonly onExitButton: () => void;
}

const RightSideView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['rightSideContainer']}>
			<button type="button" className={classes['linkContainer__text']} onClick={props.onExitButton}>
				{t('header.rightSide.documentations')}
			</button>
			<EDSvg className={classes['linkContainer__icon']} name="exitDoor" />
		</div>
	);
};

RightSideView.displayName = 'RightSideView';
RightSideView.defaultProps = {};

export default React.memo(RightSideView);
