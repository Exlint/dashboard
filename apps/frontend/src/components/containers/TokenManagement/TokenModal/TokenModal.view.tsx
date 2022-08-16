import React from 'react';
import ReactDOM from 'react-dom';

import EDBackdrop from '@/ui/EDBackdrop';

import LeftSide from './LeftSide';
import RightSide from './RightSide';

import classes from './TokenModal.module.scss';

interface IProps {
	readonly clientSecret: string;
	readonly dispalyRightSideModal: boolean;
	readonly setClientSecret: React.Dispatch<React.SetStateAction<string>>;
	readonly setDispalyRightSideModal: React.Dispatch<React.SetStateAction<boolean>>;
	readonly onCloseModal: () => void;
}

const TokenModalView: React.FC<IProps> = (props) => {
	return (
		<>
			<EDBackdrop onBackdropClick={props.onCloseModal} />
			{ReactDOM.createPortal(
				<section className={classes['container']}>
					<div className={classes['secretCreation']}>
						<LeftSide
							setClientSecret={props.setClientSecret}
							setDispalyRightSideModal={props.setDispalyRightSideModal}
							dispalyRightSideModal={props.dispalyRightSideModal}
						/>
						<hr className={classes['secretCreation__divider']} />
						{props.dispalyRightSideModal && (
							<RightSide clientSecret={props.clientSecret} onCloseModal={props.onCloseModal} />
						)}
					</div>
				</section>,
				document.getElementById('overlay-root') as HTMLElement,
			)}
		</>
	);
};

TokenModalView.displayName = 'TokenModalView';
TokenModalView.defaultProps = {};

export default React.memo(TokenModalView);
