import React from 'react';
import ReactDOM from 'react-dom';

import EDBackdrop from '@/ui/EDBackdrop';

import LeftSide from './LeftSide';
import RightSide from './RightSide';

import classes from './TokenModal.module.scss';

interface IProps {
	readonly dispalyModalRightSide: boolean;
	readonly setDispalyModalRightSide: React.Dispatch<React.SetStateAction<boolean>>;
	readonly onBackdropClick: () => void;
}

const TokenModalView: React.FC<IProps> = (props) => {
	return (
		<>
			<EDBackdrop onBackdropClick={props.onBackdropClick} />
			{ReactDOM.createPortal(
				<div className={classes['mainWrapper']}>
					<div className={classes['secretCreation']}>
						<LeftSide
							setDispalyModalRightSide={props.setDispalyModalRightSide}
							dispalyModalRightSide={props.dispalyModalRightSide}
						/>
						<hr className={classes['secretCreation__divider']} />
						{props.dispalyModalRightSide && <RightSide onBackdropClick={props.onBackdropClick} />}
					</div>
				</div>,
				document.getElementById('overlay-root') as HTMLElement,
			)}
		</>
	);
};

TokenModalView.displayName = 'TokenModalView';
TokenModalView.defaultProps = {};

export default React.memo(TokenModalView);
