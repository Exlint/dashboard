/* eslint-disable max-lines */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import { concatClasses } from '@/utils/component';
import type { ILibraryData } from '@/interfaces/libraries';
import { librariesData } from '@/data/libraries-data';
import logosObject from '@/utils/libraries-logos';
import { LibraryType } from '@/models/library-type';
import { LibraryCategory } from '@/models/library-category';

import PolicySidebarModal from './PolicySidebarModal';

import classes from './PolicySidebar.module.scss';

interface IProps {
	readonly name: string;
	readonly createdAt: string;
	readonly policyId: string | undefined;
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

	let libraryType: LibraryType | undefined;
	let libraryCategory: LibraryCategory[] = [];

	const libraryNameInLowerCase = props.name
		? (props.name.toLocaleLowerCase() as Lowercase<ILibraryData['name']>)
		: null;

	if (libraryNameInLowerCase) {
		libraryType = librariesData[libraryNameInLowerCase].type[0];
		libraryCategory = librariesData[libraryNameInLowerCase].category;
	}

	return (
		<aside className={classes['container']}>
			<Link className={classes['headerWrapper']} to="/group-center">
				<EDSvg className={classes['headerWrapper__icon']} name="backToGroupLabel" />
				<div className={classes['headerWrapper__title']}>
					{t('policySidebar.header.title')}
					&nbsp;
					<span className={classes['headerWrapper__title--purple']}>
						<Trans>&lsquo;</Trans>
						{props.groupLabel ?? ''}
						<Trans>&rsquo;</Trans>
					</span>
				</div>
			</Link>
			<hr className={classes['divider']} />
			<section className={classes['body']}>
				<div className={classes['policyLabelWrapper']}>
					<span className={classes['policyLabelWrapper__text']}>{props.policyLabel ?? ''}</span>
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
									{t('policySidebar.tooltip.renamePolicy')}
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
									{t('policySidebar.tooltip.deletePolicy')}
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
					<PolicySidebarModal
						policyId={props.policyId}
						policyLabel={props.policyLabel ?? ''}
						onCloseModal={props.onCloseModal}
					/>
				)}
				<span className={classes['body__createdAt']}>
					{t('policySidebar.body.createdAt')}
					&nbsp;
					{props.createdAt ?? ''}
				</span>
				<div className={classes['policyDetailsWrpper']}>
					<div className={classes['policyDetailsInnerWrpper']}>
						<span className={classes['policyDetailsInnerWrpper__title']}>
							{t('policySidebar.body.details.library')}
						</span>
						<div className={classes['libraryContentWrapper']}>
							<img
								src={logosObject[libraryNameInLowerCase!] ?? null}
								alt="Eslint"
								className={classes['libraryContentWrapper__img']}
							/>
							<span className={classes['libraryContentWrapper__content']}>
								{props.name ?? ''}
							</span>
						</div>
					</div>
					<div className={classes['policyDetailsInnerWrpper']}>
						<span className={classes['policyDetailsInnerWrpper__title']}>
							{t('policySidebar.body.details.type')}
						</span>
						<span className={classes['policyDetailsInnerWrpper__content']}>
							{LibraryType[libraryType!] ?? ''}
						</span>
					</div>
					<div className={classes['policyDetailsInnerWrpper']}>
						<span className={classes['policyDetailsInnerWrpper__title']}>
							{t('policySidebar.body.details.category')}
						</span>
						{libraryCategory.length === 1 ? (
							<span className={classes['policyDetailsInnerWrpper__content']}>
								{LibraryCategory[libraryCategory[0]!] ?? ''}
							</span>
						) : (
							<span className={classes['policyDetailsInnerWrpper__content']}>
								{LibraryCategory[libraryCategory[0]!] ?? ''}
								<br />
								{LibraryCategory[libraryCategory[1]!] ?? ''}
							</span>
						)}
					</div>
				</div>
			</section>
		</aside>
	);
};

PolicySidebarView.displayName = 'PolicySidebarView';
PolicySidebarView.defaultProps = {};

export default React.memo(PolicySidebarView);
