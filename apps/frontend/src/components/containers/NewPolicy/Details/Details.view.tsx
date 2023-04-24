import React from 'react';
import { useTranslation } from 'react-i18next';

import { concatClasses } from '@/utils/component';
import EDInputFieldAvailability from '@/ui/EDInputFieldAvailability';
import EDInputField from '@/ui/EDInputField';

import classes from './Details.module.scss';

interface IProps {
	readonly selectedComplianceLabel: string | null;
	readonly policyLabel: string | null;
	readonly isPolicyLabelAvailable: boolean | null;
	readonly policyDescription: string | null;
	readonly onPolicyLabelChange: (value: string) => void;
	readonly onPolicyDescriptionChange: (value: string) => void;
}

const DetailsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<section className={classes['container']}>
			<h3 className={classes['container__header']}>{t('newPolicy.formHeader')}</h3>
			<span className={classes['container__subHeader']}>{t('newPolicy.formSubHeader')}</span>

			<hr className={classes['container__divider']} />

			<table className={classes['labelTable']}>
				<thead>
					<tr>
						<th className={classes['labelTable__header']}>{t('newPolicy.compliance')}</th>
						<th
							className={concatClasses(
								classes,
								'labelTable__header',
								'labelTable__header--inputLabel',
							)}
						>
							{t('newPolicy.policyLabel')}
						</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>
							<span className={classes['complianceLabel']}>
								<span className={classes['complianceLabel__value']}>
									{props.selectedComplianceLabel}
								</span>
								<span className={classes['complianceLabel__postfix']}>&#47;</span>
							</span>
						</td>
						<td>
							<EDInputFieldAvailability
								value={props.policyLabel}
								maxLength={30}
								isAvailable={props.isPolicyLabelAvailable}
								onChange={props.onPolicyLabelChange}
							/>
						</td>
					</tr>
				</tbody>
			</table>

			<label className={classes['container__descriptionLabel']} htmlFor="policyDescriptionInput">
				{t('newPolicy.descriptionLabel')}
				&nbsp;
				<span
					className={concatClasses(
						classes,
						'container__descriptionLabel',
						'container__descriptionLabel--postfix',
					)}
				>
					{t('newPolicy.descriptionLabelPostfix')}
				</span>
			</label>
			<EDInputField value={props.policyDescription} onChange={props.onPolicyDescriptionChange} />

			<hr className={classes['container__divider']} />
		</section>
	);
};

DetailsView.displayName = 'DetailsView';
DetailsView.defaultProps = {};

export default React.memo(DetailsView);
