/* eslint-disable max-lines */
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import { concatClasses } from '@/utils/component';
import eslintLogo from '@/images/libraries/eslint.png';

import PolicySidebarModal from './PolicySidebarModal';

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
	readonly tooltopRef: React.RefObject<HTMLDivElement>;
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
			<section className={classes['body']}>
				<div className={classes['policyLabelWrapper']}>
					<span className={classes['policyLabelWrapper__text']}>{props.policyLabel}</span>
					<EDSvg
						className={classes['policyLabelWrapper__icon']}
						name="threeDots"
						onClick={props.toggleTooltipVisibility}
					/>
					{props.isTooltipVisible && (
						<div className={classes['tooltip']} ref={props.tooltopRef}>
							<button className={classes['innerWrapper']} type="button">
								<span
									className={concatClasses(
										classes,
										'innerWrapper__text',
										'innerWrapper__text--editText',
									)}
								>
									Rename Policy
								</span>
								<EDSvg
									className={concatClasses(
										classes,
										'innerWrapper__icon',
										'innerWrapper__icon--editIcon',
									)}
									name="editGroup"
								/>
							</button>
							<button
								className={classes['innerWrapper']}
								type="button"
								onClick={props.onOpenModal}
							>
								<span
									className={concatClasses(
										classes,
										'innerWrapper__text',
										'innerWrapper__text--deleteText',
									)}
								>
									Delete Policy
								</span>
								<EDSvg
									className={concatClasses(
										classes,
										'innerWrapper__icon',
										'innerWrapper__icon--deleteIcon',
									)}
									name="deleteGroup"
								/>
							</button>
						</div>
					)}
				</div>
				{props.isModelOnView && (
					<PolicySidebarModal policyLabel={props.policyLabel} onCloseModal={props.onCloseModal} />
				)}
				<span className={classes['body__createdAt']}>
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
		</aside>
	);
};

PolicySidebarView.displayName = 'PolicySidebarView';
PolicySidebarView.defaultProps = {};

export default React.memo(PolicySidebarView);
