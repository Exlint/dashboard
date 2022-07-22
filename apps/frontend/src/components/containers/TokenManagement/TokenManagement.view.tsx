import React from 'react';
import Table from 'rc-table';

import EDSvg from '@/ui/EDSvg';
import SettingsSidebar from '@/layout/SettingsSidebar';

import TokenModal from './TokenModal';

import classes from './TokenManagement.module.scss';

interface IProps {
	readonly data: {
		number: number;
		label: (string | JSX.Element)[];
		createdAt: string;
		expires: string;
		refreshSecret: JSX.Element;
		delete: JSX.Element;
		key: string;
	}[];
	readonly columns: { title: string; dataIndex: string; key: string; width: number }[];
	readonly modalState: boolean;
	readonly clientIdState?: string;
	readonly copyClientIdState: boolean;
	readonly tokenLabelState?: string;
	readonly onCopyClientId: () => Promise<NodeJS.Timeout>;
	readonly onBackdropClick: () => void;
	readonly tokenLabelChangeHandler: (_: string) => void;
}

const TokenManagementView: React.FC<IProps> = (props) => {
	return (
		<div className={classes['mainWrapper']}>
			<SettingsSidebar />
			<section className={classes['tokensDetalis']}>
				<div className={classes['clientIdWrapper']}>
					<span className={classes['clientIdWrapper__title']}>Client ID</span>
					<div className={classes['clientIdWrapper__idWrapper']}>
						<span className={classes['clientIdWrapper__idWrapper--id']}>
							{props.clientIdState}
						</span>
						<EDSvg
							name="tokenClientId"
							className={classes['clientIdWrapper__idWrapper--icon']}
							onClick={props.onCopyClientId}
						/>
					</div>
					{props.copyClientIdState && (
						<div className={classes['clientIdWrapper__idWrapper--copied']}>Copied!</div>
					)}
				</div>
				<div className={classes['secretsWrapper']}>
					<div className={classes['secretsHeader']}>
						<span className={classes['secretsHeader__title']}>Secrets</span>
						<div className={classes['buttonsWrapper']}>
							<button type="button" className={classes['buttonsWrapper__revoke']}>
								<span className={classes['buttonsWrapper__revoke--title']}>Revoke All</span>
								<EDSvg name="trashCan" className={classes['buttonsWrapper__revoke--icon']} />
							</button>
							<button
								type="button"
								className={classes['buttonsWrapper__create']}
								onClick={props.onBackdropClick}
							>
								<span className={classes['buttonsWrapper__create--title']}>
									Create Secret
								</span>
							</button>
							{props.modalState && <TokenModal onBackdropClick={props.onBackdropClick} />}
						</div>
					</div>
					<Table
						className={classes['secretsWrapper__table']}
						columns={props.columns}
						data={props.data}
						emptyText="No Secrets!"
					/>
					<div className={classes['secretsWrapper__footer']}>Total: 3</div>
				</div>
			</section>
		</div>
	);
};

TokenManagementView.displayName = 'TokenManagementView';
TokenManagementView.defaultProps = {};

export default React.memo(TokenManagementView);
