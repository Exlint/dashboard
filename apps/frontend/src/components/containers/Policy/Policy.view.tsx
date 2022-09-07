import React from 'react';
import Table from 'rc-table';
import { Link } from 'react-router-dom';

import EDSvg from '@/ui/EDSvg';
import type { IPolicySidebar } from '@/interfaces/policy-sidebar';
import PolicySidebar from '@/layout/PolicySidebar';
import type { ITableColumns } from './interfaces/table-columns';
import type { ITableData } from './interfaces/table-data';

import classes from './Policy.module.scss';

interface IProps {
	readonly isModelOnView: boolean;
	readonly onOpenModal: () => void;
	readonly onCloseModal: () => void;
	readonly policiesTableColumns: ITableColumns[];
	readonly selectedPolicy: IPolicySidebar | null;
	readonly policiesTableData: ITableData[];
	readonly policyId: string | undefined;
}

const PolicyView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<PolicySidebar
				policyId={props.policyId}
				name={props.selectedPolicy?.libraryName ?? ''}
				createdAt={props.selectedPolicy?.createdAt ?? ''}
				policyLabel={props.selectedPolicy?.policyLabel ?? ''}
				groupLabel={props.selectedPolicy?.groupLabel ?? ''}
			/>
			<main className={classes['main']}>
				<div className={classes['navigate']}>
					<span className={classes['navigate__text']}>Group Label &gt;</span>
					<span className={classes['navigate__purpleText']}>&nbsp;Policy Label</span>
				</div>
				<section className={classes['mainWrapper']}>
					<div className={classes['leftSide']}>
						<div className={classes['leftSideContainer']}>
							<div className={classes['header']}>
								<span className={classes['header__text']}>File list</span>
								<Link
									to={`/policy-configuration/${props.policyId}/edit`}
									className={classes['header__button']}
								>
									<span className={classes['text']}>Edit</span>
									<EDSvg className={classes['icon']} name="downArrowIcon" />
								</Link>
							</div>
							<hr className={classes['divider']} />
							<div className={classes['body']}>
								<span className={classes['body__number']}>3</span>
								<span className={classes['body__text']}>Objects added to the file list</span>
							</div>
						</div>
						<div className={classes['leftSideContainer']}>
							<div className={classes['header']}>
								<span className={classes['header__text']}>Ignore list</span>
								<Link
									to={`/policy-configuration/${props.policyId}/edit`}
									className={classes['header__button']}
								>
									<span className={classes['text']}>Edit</span>
									<EDSvg className={classes['icon']} name="downArrowIcon" />
								</Link>
							</div>
							<hr className={classes['divider']} />
							<div className={classes['body']}>
								<span className={classes['body__number']}>3</span>
								<span className={classes['body__text']}>
									Objects added to the ignore list
								</span>
							</div>
						</div>
						<div className={classes['leftSideContainer']}>
							<div className={classes['header']}>
								<span className={classes['header__text']}>Policy Configuration</span>
								<Link
									to={`/policy-configuration/${props.policyId}/edit`}
									className={classes['header__button']}
								>
									<span className={classes['text']}>Edit</span>
									<EDSvg className={classes['icon']} name="downArrowIcon" />
								</Link>
							</div>
							<hr className={classes['divider']} />
							<div className={classes['body']}>
								<span className={classes['body__number']}>3</span>
								<span className={classes['body__text']}>Objects configured</span>
							</div>
						</div>
					</div>
					<div className={classes['rightSide']}>
						<span className={classes['tableHeader']}>Rules</span>
						<Table
							className={classes['tableContainer']}
							columns={props.policiesTableColumns}
							data={props.policiesTableData}
						/>
					</div>
				</section>
			</main>
		</div>
	);
};

PolicyView.displayName = 'PolicyView';
PolicyView.defaultProps = {};

export default React.memo(PolicyView);
