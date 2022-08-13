import React from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

import EDBackdrop from '@/ui/EDBackdrop';
import EDSvg from '@/ui/EDSvg';

import classes from './DeleteGroupBackdrop.module.scss';

interface IProps {
	readonly onCloseMoreInfo: () => void;
	readonly onDeleteGroup: () => void;
}

const DeleteGroupBackdropView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const modalRoot = document.getElementById('overlay-root') as HTMLElement;

	return (
		<>
			<EDBackdrop isTransparent onBackdropClick={props.onCloseMoreInfo} />
			{ReactDOM.createPortal(
				<div className={classes['innerMoreInfo']}>
					<button className={classes['deleteGroup']} type="button" onClick={props.onDeleteGroup}>
						<span className={classes['deleteGroup__text']}>
							{t('groupCenter.groupDetails.groupInfo.deleteGroup')}
						</span>
						<EDSvg className={classes['deleteGroup__icon']} name="deleteGroup" />
					</button>
				</div>,
				modalRoot,
			)}
		</>
	);
};

DeleteGroupBackdropView.displayName = 'DeleteGroupBackdropView';
DeleteGroupBackdropView.defaultProps = {};

export default React.memo(DeleteGroupBackdropView);
