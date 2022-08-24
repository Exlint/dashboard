/* eslint-disable max-lines */
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';

import PolicySidebarBody from './PolicySidebarBody';

import classes from './PolicySidebar.module.scss';

interface IProps {
	readonly name: string;
	readonly createdAt: string;
	readonly library: string;
	readonly type: string;
	readonly category: string;
	readonly rules: string;
	readonly policyLabel: string;
	readonly groupLabel: string;
	readonly isModelOnView: boolean;
	readonly tooltipRef: React.RefObject<HTMLDivElement>;
	readonly isTooltipVisible: boolean;
	readonly toggleTooltipVisibility: () => void;
	readonly onOpenModal: () => void;
	readonly onCloseModal: () => void;
}

const PolicySidebarView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<aside className={classes['container']}>
			<section className={classes['headerWrapper']}>
				<EDSvg className={classes['headerWrapper__icon']} name="backToGroupLabel" />
				<div className={classes['headerWrapper__title']}>
					{t('policySidebar.header.title')}
					&nbsp;
					<span className={classes['headerWrapper__title--purple']}>
						<Trans>&lsquo;</Trans>
						{props.groupLabel}
						<Trans>&rsquo;</Trans>
					</span>
				</div>
			</section>
			<hr className={classes['divider']} />
			<PolicySidebarBody
				createdAt={props.createdAt}
				library={props.library}
				type={props.type}
				category={props.category}
				rules={props.rules}
				policyLabel={props.policyLabel}
				isModelOnView={props.isModelOnView}
				tooltipRef={props.tooltipRef}
				isTooltipVisible={props.isTooltipVisible}
				toggleTooltipVisibility={props.toggleTooltipVisibility}
				onOpenModal={props.onOpenModal}
				onCloseModal={props.onCloseModal}
			/>
		</aside>
	);
};

PolicySidebarView.displayName = 'PolicySidebarView';
PolicySidebarView.defaultProps = {};

export default React.memo(PolicySidebarView);
