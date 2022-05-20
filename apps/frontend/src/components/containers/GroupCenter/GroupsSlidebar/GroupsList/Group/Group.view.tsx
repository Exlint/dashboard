import React from 'react';
import VSvg from './../../../../../ui/VSvg';
// import { Trans, useTranslation } from 'react-i18next';

import classes from './Group.module.scss';

interface IProps {
	readonly title: string;
	readonly id: number;
	readonly policies: number[];
	readonly key: number;
}

const GroupView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['group']} key={props.key}>
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
				<button className={classes['getInfoButton']} type="button">
					<VSvg className={classes['getInfoButton__icon']} name="arrowRight" />
				</button>
			</div>
		</div>
	);
};

GroupView.displayName = 'GroupView';
GroupView.defaultProps = {};

export default React.memo(GroupView);
