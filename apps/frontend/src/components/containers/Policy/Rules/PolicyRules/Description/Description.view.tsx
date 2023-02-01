import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactTextareaAutosize from 'react-textarea-autosize';
import type { PolicyLibrary } from '@prisma/client';
import type { ILibraryData } from '@exlint.io/common';

import EDSvg from '@/ui/EDSvg';
import logosObject from '@/utils/libraries-logos';

import classes from './Description.module.scss';

interface IProps {
	readonly descriptionInput: string | null;
	readonly isDescriptionOnEdit: boolean;
	readonly library: PolicyLibrary | null;
	readonly types: ILibraryData['types'] | null;
	readonly categories: ILibraryData['categories'] | null;
	readonly policyCreationDate: number | null;
	readonly onDescriptionInputChange: (value: string) => void;
	readonly onEditIconClick: VoidFunction;
	readonly onConfirmNewEditClick: VoidFunction;
}

const DescriptionView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	let creationDateFormatted: string | null = null;

	if (props.policyCreationDate) {
		creationDateFormatted = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' })
			.format(props.policyCreationDate)
			.replace(',', '');
	}

	const typesString = props.types?.join(', ');
	const categoriesString = props.categories?.join(', ');

	return (
		<aside className={classes['container']}>
			<div className={classes['descriptionContainer']}>
				<div className={classes['descriptionHeader']}>
					<h4 className={classes['descriptionHeader__text']}>
						{t('policy.rules.description.aboutHeader')}
					</h4>
					<EDSvg
						className={classes['descriptionHeader__icon']}
						name={props.isDescriptionOnEdit ? 'vCircle' : 'editStroke'}
						onClick={
							props.isDescriptionOnEdit ? props.onConfirmNewEditClick : props.onEditIconClick
						}
					/>
				</div>

				<ReactTextareaAutosize
					className={classes['descriptionContainer__textarea']}
					value={props.descriptionInput ?? ''}
					placeholder={t('groupCenter.policies.descriptionPlaceholder')}
					readOnly={!props.isDescriptionOnEdit}
					maxRows={15}
					onChange={({ currentTarget: { value } }) => props.onDescriptionInputChange(value)}
				/>
			</div>

			{props.library && (
				<div className={classes['libraryValue']}>
					<img
						className={classes['libraryValue__img']}
						src={logosObject[props.library.toLowerCase() as keyof typeof logosObject]}
						alt={props.library}
					/>
					<span className={classes['libraryValue__text']}>{props.library}</span>
				</div>
			)}

			<span className={classes['detailsText']}>
				{t('policy.rules.description.libraryType')}
				&nbsp;
				<b className={classes['detailsText__emphasized']}>{typesString}</b>
			</span>

			<span className={classes['detailsText']}>
				{t('policy.rules.description.libraryCategory')}
				&nbsp;
				<b className={classes['detailsText__emphasized']}>{categoriesString}</b>
			</span>

			<span className={classes['detailsText']}>
				{t('policy.rules.description.creation')}
				&nbsp;
				<b className={classes['detailsText__emphasized']}>{creationDateFormatted}</b>
			</span>
		</aside>
	);
};

DescriptionView.displayName = 'DescriptionView';
DescriptionView.defaultProps = {};

export default React.memo(DescriptionView);
