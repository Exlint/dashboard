import React from 'react';
import { Route, useLocation } from 'react-router-dom';
// import { Trans, useTranslation } from 'react-i18next';

import { IGroup } from '@/interfaces/group';
import { ILibrary } from '@/interfaces/library';

import GroupsSidebar from './GroupsSidebar';
import GroupDetails from './GroupDetails';

import classes from './GroupCenter.module.scss';
import PolicyConfiguration from './GroupDetails/GroupInfo/Policies/PolicyConfiguration';

interface IProps {
	readonly selectedGroup: IGroup | null;
	readonly selectedLibrary: ILibrary | null;
	readonly policyLabelInput: string | null;
	readonly groupsList: IGroup[] | [];
	readonly onPolicyLabelInputChanged: (input: string) => void;
	readonly onSelectedLibrary: (library: ILibrary) => void;
	readonly onCancelSelectedLibrary: () => void;
	readonly onSelectedGroup: (group: IGroup) => void;
	readonly onCreateNewGroup: () => void;
}

const GroupCenterView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();
	const route = useLocation();

	let currentPage;

	if (route.pathname.includes('/Policy')) {
		currentPage = 'configurations';
	} else if (route.pathname.includes('/manuel')) {
		currentPage = 'manual';
	}

	return (
		<section
			className={classes['groupCenterContainer']}
			style={{ overflow: currentPage !== 'manual' ? 'auto' : 'hidden' }}
		>
			{currentPage !== 'configurations' && (
				<div className={classes['innerGroupDetalis']}>
					<GroupsSidebar
						selectedGroup={props.selectedGroup}
						groupsList={props.groupsList}
						onCreateNewGroup={props.onCreateNewGroup}
						onSelectedGroup={props.onSelectedGroup}
					/>
					<GroupDetails
						selectedGroup={props.selectedGroup}
						selectedLibrary={props.selectedLibrary}
						policyLabelInput={props.policyLabelInput}
						onPolicyLabelInputChanged={props.onPolicyLabelInputChanged}
						onSelectedLibrary={props.onSelectedLibrary}
						onCancelSelectedLibrary={props.onCancelSelectedLibrary}
					/>
				</div>
			)}
			<Route path="/groupCenter/group/Policy">
				<PolicyConfiguration
					selectedLibrary={props.selectedLibrary}
					policyLabelInput={props.policyLabelInput}
				/>
			</Route>
		</section>
	);
};

GroupCenterView.displayName = 'GroupCenterView';
GroupCenterView.defaultProps = {};

export default React.memo(GroupCenterView);
