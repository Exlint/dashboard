import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import eslintLogo from '@/images/libraries/eslint.png';

import PolicySidebarModal from '../PolicySidebarModal';
import PolicySidebarTooltip from '../PolicySidebarTooltip';

import classes from './PolicySidebarBody.module.scss';

interface IProps {
	readonly createdAt: string;
	readonly library: string;
	readonly type: string;
	readonly category: string;
	readonly rules: string;
	readonly policyLabel: string;
	readonly isModelOnView: boolean;
	readonly tooltipRef: React.RefObject<HTMLDivElement>;
	readonly isTooltipVisible: boolean;
	readonly toggleTooltipVisibility: () => void;
	readonly onOpenModal: () => void;
	readonly onCloseModal: () => void;
}

const PolicySidebarBodyView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<section className={classes['container']}>
			<div className={classes['policyLabelWrapper']}>
				<span className={classes['policyLabelWrapper__text']}>{props.policyLabel}</span>
				<EDSvg
					className={classes['policyLabelWrapper__icon']}
					name="threeDots"
					onClick={props.toggleTooltipVisibility}
				/>
				{props.isTooltipVisible && (
					<PolicySidebarTooltip tooltipRef={props.tooltipRef} onOpenModal={props.onOpenModal} />
				)}
			</div>
			{props.isModelOnView && (
				<PolicySidebarModal policyLabel={props.policyLabel} onCloseModal={props.onCloseModal} />
			)}
			<span className={classes['container__createdAt']}>
				{t('policySidebar.body.createdAt')}
				&nbsp;
				{props.createdAt}
			</span>
			<div className={classes['policyDetailsWrpper']}>
				<div className={classes['policyDetailsInnerWrpper']}>
					<span className={classes['policyDetailsInnerWrpper__title']}>
						{t('policySidebar.body.details.library')}
					</span>
					<div className={classes['libraryContentWrapper']}>
						<img
							src={eslintLogo}
							alt="Eslint"
							className={classes['libraryContentWrapper__img']}
						/>
						<span className={classes['libraryContentWrapper__content']}>{props.library}</span>
					</div>
				</div>
				<div className={classes['policyDetailsInnerWrpper']}>
					<span className={classes['policyDetailsInnerWrpper__title']}>
						{t('policySidebar.body.details.type')}
					</span>
					<span className={classes['policyDetailsInnerWrpper__content']}>{props.type}</span>
				</div>
				<div className={classes['policyDetailsInnerWrpper']}>
					<span className={classes['policyDetailsInnerWrpper__title']}>
						{t('policySidebar.body.details.category')}
					</span>
					<span className={classes['policyDetailsInnerWrpper__content']}>{props.category}</span>
				</div>
				<div className={classes['policyDetailsInnerWrpper']}>
					<span className={classes['policyDetailsInnerWrpper__title']}>
						{t('policySidebar.body.details.rules')}
					</span>
					<span className={classes['policyDetailsInnerWrpper__content']}>{props.rules}</span>
				</div>
			</div>
		</section>
	);
};

PolicySidebarBodyView.displayName = 'PolicySidebarBodyView';
PolicySidebarBodyView.defaultProps = {};

export default React.memo(PolicySidebarBodyView);
