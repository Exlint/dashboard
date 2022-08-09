import React from 'react';
import Table from 'rc-table';

import EDSvg from '@/ui/EDSvg';
import { concatClasses } from '@/utils/component';
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
	readonly isModelOnView: boolean;
	readonly clientIdState?: string;
	readonly copyClientIdState: boolean;
	readonly tokenLabelState?: string;
	readonly onChangeGroupLabel: (_: string) => void;
	readonly onCopyClientId: () => Promise<void>;
	readonly onOpenModal: () => void;
	readonly onCloseModal: () => void;
	readonly tokenLabelChangeHandler: (_: string) => void;
}

const TokenManagementView: React.FC<IProps> = (props) => {
	const copyClinetIdClasses = props.copyClientIdState
		? concatClasses(classes, 'idWrapper__icon', 'idWrapper__icon--disabled')
		: classes['idWrapper__icon'];

	return (
		<main className={classes['mainWrapper']}>
			<SettingsSidebar />
			<section className={classes['tokensDetalis']}>
				<div className={classes['clientIdWrapper']}>
					<span className={classes['clientIdWrapper__title']}>Client ID</span>
					<div className={classes['idWrapper']}>
						<span className={classes['idWrapper__id']}>{props.clientIdState}</span>
						<EDSvg
							name="tokenClientId"
							className={copyClinetIdClasses}
							onClick={props.onCopyClientId}
						/>
					</div>
					{props.copyClientIdState && <div className={classes['idWrapper__copied']}>Copied!</div>}
				</div>
				<div className={classes['secretsWrapper']}>
					<div className={classes['secretsHeader']}>
						<span className={classes['secretsHeader__title']}>Secrets</span>
						<div className={classes['buttonsWrapper']}>
							<button type="button" className={classes['revoke']}>
								<span className={classes['revoke__title']}>Revoke All</span>
								<EDSvg name="trashCan" className={classes['revoke__icon']} />
							</button>
							<button type="button" className={classes['create']} onClick={props.onOpenModal}>
								<span className={classes['create__title']}>Create Secret</span>
							</button>
							{props.isModelOnView && <TokenModal onCloseModal={props.onCloseModal} />}
						</div>
					</div>
					<Table
						className={classes['secretsWrapper__table']}
						columns={props.columns}
						data={props.data}
						emptyText="No Secrets!"
					/>
					<div className={classes['footer']}>
						<span className={classes['footer__text']}>Total: 3</span>
					</div>
				</div>
			</section>
		</main>
	);
};

TokenManagementView.displayName = 'TokenManagementView';
TokenManagementView.defaultProps = {};

export default React.memo(TokenManagementView);
