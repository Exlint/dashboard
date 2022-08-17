import React from 'react';
import ReactDOM from 'react-dom';

import EDBackdrop from '@/ui/EDBackdrop';

import LeftSide from './LeftSide';
import RightSide from './RightSide';

import classes from './TokenModal.module.scss';

interface IProps {
	readonly secretLabel: string | null;
	readonly clientSecret: string | null;
	readonly dispalyRightSideModal: boolean;
	readonly setDispalyRightSideModal: React.Dispatch<React.SetStateAction<boolean>>;
	readonly onSecretLabelChange: (_: string) => void;
	readonly onClientSecretChange: (_: string) => void;
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
							setDispalyRightSideModal={props.setDispalyRightSideModal}
							dispalyRightSideModal={props.dispalyRightSideModal}
							onSecretLabelChange={props.onSecretLabelChange}
							onClientSecretChange={props.onClientSecretChange}
						/>
						<hr className={classes['secretCreation__divider']} />
						{props.dispalyRightSideModal && (
							<RightSide
								clientSecret={props.clientSecret}
								secretLabel={props.secretLabel}
								onCloseModal={props.onCloseModal}
							/>
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
