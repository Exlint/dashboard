import React from 'react';
import { Link } from 'react-router-dom';
import { ILibrary } from '@/interfaces/library';
import VSvg from '@/ui/VSvg';
import { concatClasses } from '../../../../../../../../utils/component';

// import { Trans, useTranslation } from 'react-i18next';

import tempLogo from '../../../../../../../../assets/images/brandLogo.png';

import classes from './PolicySidebar.module.scss';

interface IProps {
	readonly selectedLibrary: ILibrary | null;

	readonly policyLabelInput: string | null;
}

const PolicySidebarView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<section className={classes['sidebar']}>
			<div className={classes['innerSidebar']}>
				<div className={classes['backToGroupContainer']}>
					<Link to="/groupCenter/group">
						<button className={classes['buttonContainer']} type="button">
							<VSvg name="arrowLeft" className={classes['buttonContainer__icon']} />
						</button>
					</Link>
					<span className={classes['backToGroupContainer__text']}>Back To</span>
					&nbsp;
					<span className={classes['backToGroupContainer__groupLabel']}>Group Label</span>
					&nbsp;
					<span className={classes['backToGroupContainer__text']}>Group</span>
				</div>
				<hr className={classes['innerSidebar__divider']} />
				<div className={classes['policyDetailsContainer']}>
					<div className={classes['policyLabelContainer']}>
						<h3 className={classes['policyLabelContainer__label']}>{props.policyLabelInput}</h3>
						<VSvg className={classes['policyLabelContainer__icon']} name="moreInfoIcon" />
					</div>
					<div className={classes['createdTimeContainer']}>
						<span
							className={concatClasses(
								classes,
								'createdTimeContainer__title',
								'createdTimeContainer__text',
							)}
						>
							Created in:
						</span>
						<span className={classes['createdTimeContainer__text']}>24</span>
						&nbsp;
						<span className={classes['createdTimeContainer__text']}>May</span>
						&nbsp;
						<span className={classes['createdTimeContainer__text']}>2022</span>
					</div>
					<div className={classes['libraryName']}>
						<span className={classes['libraryName__title']}>Library</span>
						<div className={classes['innerLibraryName']}>
							<img
								className={classes['innerLibraryName__logo']}
								src={tempLogo}
								alt="library logo"
							/>
							<span className={classes['innerLibraryName__props']}>
								{props.selectedLibrary?.title}
							</span>
							<button className={classes['innerLibraryName__changeButton']} type="button">
								Change
							</button>
						</div>
					</div>
					<div className={classes['libraryCategory']}>
						<span className={classes['libraryCategory__title']}>Type</span>
						<span className={classes['libraryCategory__props']}>
							{props.selectedLibrary?.type}
						</span>
					</div>

					<div className={classes['libraryCategory']}>
						<span className={classes['libraryCategory__title']}>Category</span>
						<span className={classes['libraryCategory__props']}>
							{props.selectedLibrary?.category}
						</span>
					</div>

					<div className={classes['libraryCategory']}>
						<span className={classes['libraryCategory__title']}>Rules</span>
						<span className={classes['libraryCategory__props']}>Manual</span>
					</div>
				</div>
			</div>
		</section>
	);
};

PolicySidebarView.displayName = 'PolicySidebarView';
PolicySidebarView.defaultProps = {};

export default React.memo(PolicySidebarView);
