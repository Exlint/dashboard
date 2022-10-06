import React, { type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import Nav from '@/layout/Nav';
import EDAcceptButton from '@/ui/EDAcceptButton';
import type { ILibraryName } from '@/interfaces/libraries';

import Details from './Details';
import LibrarySelection from './LibrarySelection';

import classes from './NewPolicy.module.scss';

interface IProps {
	readonly policyLabel: string | null;
	readonly policyDescription: string | null;
	readonly isPolicyLabelValid: boolean;
	readonly isPolicyLabelAvailable: boolean | null;
	readonly isSubmitEnabled: boolean;
	readonly selectedLibrary: ILibraryName | null;
	readonly onPolicyLabelChange: (value: string) => void;
	readonly onPolicyDescriptionChange: (value: string) => void;
	readonly onSetPolicyLabelValid: (value: boolean) => void;
	readonly onSetPolicyLabelAvailable: (value: boolean | null) => void;
	readonly onLibrarySelect: (library: ILibraryName | null) => void;
	readonly onCreatePolicy: (e: FormEvent<HTMLFormElement>) => void;
}

const NewPolicyView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<Nav />

			<form className={classes['form']} onSubmit={props.onCreatePolicy}>
				<Details
					policyLabel={props.policyLabel}
					policyDescription={props.policyDescription}
					isPolicyLabelAvailable={props.isPolicyLabelAvailable}
					onPolicyLabelChange={props.onPolicyLabelChange}
					onPolicyDescriptionChange={props.onPolicyDescriptionChange}
					onSetPolicyLabelValid={props.onSetPolicyLabelValid}
					onSetPolicyLabelAvailable={props.onSetPolicyLabelAvailable}
				/>

				<div className={classes['formFooter']}>
					<div className={classes['formFooterInner']}>
						<LibrarySelection
							selectedLibrary={props.selectedLibrary}
							onLibrarySelect={props.onLibrarySelect}
						/>

						<hr className={classes['formFooterInner__divider']} />

						<EDAcceptButton disabled={!props.isSubmitEnabled} type="submit">
							{t('newPolicy.formSubmit')}
						</EDAcceptButton>
					</div>
				</div>
			</form>
		</div>
	);
};

NewPolicyView.displayName = 'NewPolicyView';
NewPolicyView.defaultProps = {};

export default React.memo(NewPolicyView);
