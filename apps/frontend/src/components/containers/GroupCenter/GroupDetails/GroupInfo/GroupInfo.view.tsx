/* eslint-disable max-lines */
import React from 'react';
import { Route, useLocation } from 'react-router-dom';

import VSvg from '@/ui/VSvg';

// import { Trans, useTranslation } from 'react-i18next';
import { IGroup } from '@/interfaces/group';
import { ILibrary } from '@/interfaces/library';

import Policies from './Policies';
import NewPolicy from './Policies/NewPolicy';

import classes from './GroupInfo.module.scss';
import PolicyConfiguration from './Policies/PolicyConfiguration';

interface IProps {
	readonly selectedGroup: IGroup | null;
	readonly isNewPolicyClicked: boolean;
	readonly selectedLibrary: ILibrary | null;
	readonly policyLabelInput: string | null;
	readonly isLableOnEdit: boolean;
	readonly groupLable: string | null;
	readonly onUpdateLableChanges: () => void;
	readonly onCancelLableChanges: () => void;
	readonly onChangeGroupLable: (_: string) => void;
	readonly onLableOnEdit: () => void;
	readonly onPolicyLabelInputChanged: (input: string) => void;
	readonly onSelectedLibrary: (library: ILibrary) => void;
	readonly onCancelSelectedLibrary: () => void;
	readonly onCreateNewPolicy: () => void;
}

const GroupInfoView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const route = useLocation();

	let currentPage;

	if (route.pathname === '/groupCenter/group') {
		currentPage = 'group';
	} else if (route.pathname === '/groupCenter/group/newPolicy/policyConfiguration') {
		currentPage = 'policyConfiguration';
	}

	// const { t } = useTranslation();

	return (
		<div className={classes['groupInfo']}>
			{currentPage === 'group' && (
				<>
					<div className={classes['innerGroupInfo']}>
						<div className={classes['groupLableContainer']}>
							<input
								className={classes['groupLableContainer__lable']}
								value={props.groupLable ?? props.selectedGroup?.label}
								disabled={props.isLableOnEdit}
								onChange={() => props.onChangeGroupLable}
							/>
							{props.isLableOnEdit ? (
								<button
									type="button"
									className={classes['editLableButton']}
									onClick={props.onLableOnEdit}
								>
									<VSvg className={classes['editLableButton__icon']} name="editLable" />
								</button>
							) : (
								<div className={classes['updateLableButtonsContainer']}>
									<button
										className={classes['updateChangesButton']}
										type="button"
										onClick={props.onUpdateLableChanges}
									>
										<VSvg className={classes['updateChangesButton__icon']} name="vIcon" />
									</button>
									<button
										className={classes['cancelChangesButton']}
										type="button"
										onClick={props.onCancelLableChanges}
									>
										<VSvg
											className={classes['cancelChangesButton__icon']}
											name="cancelIcon"
										/>
									</button>
								</div>
							)}
						</div>
						<div className={classes['createdTime']}>
							<span className={classes['createdTime__text']}>Created in:</span>
							<div className={classes['createdTimeDate']}>
								<span className={classes['createdTime__text']}>
									{props.selectedGroup?.createdAt}
								</span>
							</div>
						</div>
						<div className={classes['uniqueIdContainer']}>
							<span className={classes['uniqueIdContainer__text']}>Unique ID:</span>
							<div className={classes['uniqueId']}>
								<span className={classes['uniqueId__id']}>{props.selectedGroup?.id}</span>
								<VSvg className={classes['uniqueId__icon']} name="uniqueId" />
							</div>
						</div>
						<button className={classes['moreInfoButton']} type="button">
							<VSvg className={classes['moreInfoButton__icon']} name="moreInfoIcon" />
						</button>
					</div>
					<Policies
						selectedGroup={props.selectedGroup}
						onCreateNewPolicy={props.onCreateNewPolicy}
					/>
				</>
			)}
			<Route path="/groupCenter/group/newPolicy">
				{currentPage !== 'policyConfiguration' && (
					<NewPolicy
						selectedGroup={props.selectedGroup}
						selectedLibrary={props.selectedLibrary}
						policyLabelInput={props.policyLabelInput}
						onPolicyLabelInputChanged={props.onPolicyLabelInputChanged}
						onSelectedLibrary={props.onSelectedLibrary}
						onCancelSelectedLibrary={props.onCancelSelectedLibrary}
					/>
				)}
			</Route>
			<Route path="/groupCenter/group/newPolicy/policyConfiguration">
				<PolicyConfiguration
					selectedLibrary={props.selectedLibrary}
					policyLabelInput={props.policyLabelInput}
				/>
			</Route>
		</div>
	);
};

GroupInfoView.displayName = 'GroupInfoView';
GroupInfoView.defaultProps = {};

export default React.memo(GroupInfoView);
