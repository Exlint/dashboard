import React from 'react';
import { Route } from 'react-router-dom';

import { IGroup } from '@/interfaces/group';
import { ILibrary } from '@/interfaces/library';

import GroupInfo from './GroupInfo';

import classes from './GroupDetails.module.scss';

interface IProps {
	readonly selectedGroup: IGroup | null;
	readonly selectedLibrary: ILibrary | null;
	readonly policyLabelInput: string | null;
	readonly onPolicyLabelInputChanged: (input: string) => void;
	readonly onSelectedLibrary: (library: ILibrary) => void;
	readonly onCancelSelectedLibrary: () => void;
}

const GroupDetailsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['groupDetails']}>
			<Route path="/groupCenter/group">
				{props.selectedGroup !== null && (
					<GroupInfo
						selectedGroup={props.selectedGroup}
						selectedLibrary={props.selectedLibrary}
						policyLabelInput={props.policyLabelInput}
						onPolicyLabelInputChanged={props.onPolicyLabelInputChanged}
						onSelectedLibrary={props.onSelectedLibrary}
						onCancelSelectedLibrary={props.onCancelSelectedLibrary}
					/>
				)}
			</Route>
		</section>
	);
};

GroupDetailsView.displayName = 'GroupDetailsView';
GroupDetailsView.defaultProps = {};

export default React.memo(GroupDetailsView);
