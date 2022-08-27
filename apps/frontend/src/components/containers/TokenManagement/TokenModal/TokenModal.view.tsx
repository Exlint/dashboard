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
	readonly onDisplayModalRightSide: () => void;
	readonly onSecretLabelChange: (_: string) => void;
	readonly onClientSecretChange: (_: string) => void;
	readonly onCloseModal: () => void;
	readonly onRenderTable: () => void;
}

const TokenModalView: React.FC<IProps> = (props) => {
	return (
		<>
			<EDBackdrop onBackdropClick={props.onCloseModal} />
			{ReactDOM.createPortal(
				<section className={classes['container']}>
					<div className={classes['secretCreation']}>
						<LeftSide
							dispalyRightSideModal={props.dispalyRightSideModal}
							secretLabel={props.secretLabel}
							onDisplayModalRightSide={props.onDisplayModalRightSide}
							onSecretLabelChange={props.onSecretLabelChange}
							onClientSecretChange={props.onClientSecretChange}
						/>
						<hr className={classes['secretCreation__divider']} />
						{props.dispalyRightSideModal && (
							<RightSide
								clientSecret={props.clientSecret}
								secretLabel={props.secretLabel}
								onCloseModal={props.onCloseModal}
								onRenderTable={props.onRenderTable}
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
