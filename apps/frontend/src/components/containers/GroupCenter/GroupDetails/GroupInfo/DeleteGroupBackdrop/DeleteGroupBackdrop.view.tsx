import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';

import classes from './DeleteGroupBackdrop.module.scss';

interface IProps {
	readonly onDeleteGroup: () => void;
	readonly tooltopRef: React.RefObject<HTMLDivElement>;
}

const DeleteGroupBackdropView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['innerMoreInfo']} ref={props.tooltopRef}>
			<button className={classes['innerButton']} type="button" onClick={props.onDeleteGroup}>
				<span className={classes['innerButton__text']}>
					{t('groupCenter.groupDetails.groupInfo.deleteGroup')}
				</span>
				<EDSvg className={classes['innerButton__icon']} name="deleteGroup" />
			</button>
		</div>
	);
};

DeleteGroupBackdropView.displayName = 'DeleteGroupBackdropView';
DeleteGroupBackdropView.defaultProps = {};

export default React.memo(DeleteGroupBackdropView);
