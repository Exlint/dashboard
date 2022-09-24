import React, { type FormEvent } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import EDInputFieldAvailability from '@/ui/EDInputFieldAvailability';
import EDInputField from '@/ui/EDInputField';
import EDAcceptButton from '@/ui/EDAcceptButton';

import classes from './NewGroup.module.scss';

interface IProps {
	readonly groupLabelInput: string | null;
	readonly groupDescriptionInput: string | null;
	readonly isGroupLabelValid: boolean;
	readonly isGroupLabelAvailable: boolean | null;
	readonly onGroupLabelInputChange: (value: string) => void;
	readonly onGroupDescriptionInputChange: (value: string) => void;
	readonly onCreateGroup: (e: FormEvent<HTMLFormElement>) => void;
}

const NewGroupView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<main className={classes['container']}>
			<header className={classes['header']}>
				<div className={classes['headerTitleContainer']}>
					<EDSvg className={classes['headerTitleContainer__icon']} name="group" />
					<h4 className={classes['headerTitleContainer__text']}>
						{t('groupCenter.newGroup.headerTitle')}
					</h4>
				</div>

				<div className={classes['tab']}>
					<EDSvg className={classes['tab__icon']} name="settings" />
					<span className={classes['tab__text']}>
						{t('groupCenter.newGroup.tabs.groupCreation')}
					</span>
					<div className={classes['tab__border']} />
				</div>
			</header>

			<form className={classes['createForm']} onSubmit={props.onCreateGroup}>
				<h3 className={classes['createForm__title']}>{t('groupCenter.newGroup.content.title')}</h3>
				<span className={classes['createForm__subTitle']}>
					{t('groupCenter.newGroup.content.subTitle')}
				</span>

				<hr className={classes['createForm__divider']} />

				<label className={classes['createForm__labelInputLabel']} htmlFor="newGroupLabelInput">
					{t('groupCenter.newGroup.content.groupLabelInputLabel')}
				</label>
				<EDInputFieldAvailability
					id="newGroupLabelInput"
					className={classes['createForm__labelInput']}
					value={props.groupLabelInput}
					placeholder={t('groupCenter.newGroup.content.groupLabelInputPlaceholder')}
					isAvailable={props.isGroupLabelAvailable}
					maxLength={30}
					onChange={props.onGroupLabelInputChange}
				/>

				<label className={classes['createFormDescriptionLabel']} htmlFor="newGroupDescriptionInput">
					<span className={classes['createFormDescriptionLabel__text']}>
						{t('groupCenter.newGroup.content.groupDescriptionInputLabelPrefix')}
						&nbsp;
					</span>
					<small className={classes['createFormDescriptionLabel__optional']}>
						<Trans>&#40;</Trans>
						{t('groupCenter.newGroup.content.groupDescriptionInputLabelPostfix')}
						<Trans>&#41;</Trans>
					</small>
				</label>
				<EDInputField
					id="newGroupDescriptionInput"
					value={props.groupDescriptionInput}
					onChange={props.onGroupDescriptionInputChange}
				/>

				<EDAcceptButton
					className={classes['createForm__submit']}
					type="submit"
					disabled={!props.isGroupLabelValid}
				>
					{t('groupCenter.newGroup.content.createGroupButton')}
				</EDAcceptButton>
			</form>
		</main>
	);
};

NewGroupView.displayName = 'NewGroupView';
NewGroupView.defaultProps = {};

export default React.memo(NewGroupView);
