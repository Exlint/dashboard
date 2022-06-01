import React from 'react';
import { Link } from 'react-router-dom';
import VSvg from '@/ui/VSvg';

import { IGroup } from '@/interfaces/group';

// import { Trans, useTranslation } from 'react-i18next';

import classes from './Group.module.scss';

interface IProps extends IGroup {
	readonly key: number;
	readonly selectedGroup: IGroup | null;
	readonly onSelectedGroup: (group: IGroup) => void;
}

const GroupView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div
			className={classes['group']}
			key={props.key}
			style={{
				backgroundColor: props.selectedGroup?.id === props.id ? 'rgba(217, 217, 217, 0.1)' : '#fff',
			}}
		>
			<div className={classes['innerGroup']}>
				<div className={classes['leftSideContainer']}>
					<h3 className={classes['leftSideContainer__title']}>{props.title}</h3>
					<div className={classes['uniqueIdContainer']}>
						<span className={classes['uniqueIdContainer__text']}>Unique ID:</span>
						<span className={classes['uniqueIdContainer__text']}>{props.id}</span>
						<VSvg className={classes['uniqueIdContainer__icon']} name="uniqueId" />
					</div>
					<div className={classes['policiesContainer']}>
						<span className={classes['policiesContainer__text']}>Policies:</span>
						{props.policies.map((policy, index) => {
							if (index < 4) {
								return (
									<span className={classes['policiesContainer__policy']} key={index}>
										{policy}
									</span>
								);
							}

							return;
						})}
					</div>
				</div>
				<Link to="/groupCenter/group" className={classes['getInfoButtonContainer']}>
					<button
						className={classes['getInfoButton']}
						type="button"
						onClick={() =>
							props.onSelectedGroup({
								title: props.title,
								id: props.id,
								policies: props.policies,
							})
						}
					>
						<VSvg className={classes['getInfoButton__icon']} name="arrowRight" />
					</button>
				</Link>
			</div>
		</div>
	);
};

GroupView.displayName = 'GroupView';
GroupView.defaultProps = {};

export default React.memo(GroupView);
