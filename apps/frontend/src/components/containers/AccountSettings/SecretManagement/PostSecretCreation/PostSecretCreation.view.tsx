import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';

import classes from './PostSecretCreation.module.scss';

interface IProps {
	readonly createdSecretValue: string;
	readonly onDelete: VoidFunction;
	readonly onCopySecretValue: VoidFunction;
}

const PostSecretCreationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	let createdSecretValueText: string;

	if (props.createdSecretValue.length > 18) {
		const prefixText = props.createdSecretValue.substring(0, 12);
		const postfixText = props.createdSecretValue.slice(-6);

		createdSecretValueText = `${prefixText}...${postfixText}`;
	} else {
		createdSecretValueText = props.createdSecretValue;
	}

	return (
		<section className={classes['container']}>
			<span className={classes['container__disclaimer']}>
				{t('accountSettings.secretManagement.postSecretCreationDisclaimer')}
			</span>

			<div className={classes['createdSecretContainer']}>
				<div className={classes['createdSecretDetails']}>
					<EDSvg className={classes['createdSecretDetails__successIcon']} name="vStroke" />
					<span className={classes['createdSecretDetails__value']}>{createdSecretValueText}</span>
					<EDSvg
						className={classes['createdSecretDetails__copyIcon']}
						name="copy"
						onClick={props.onCopySecretValue}
					/>
				</div>
				<button
					className={classes['createdSecretContainer__deleteAction']}
					type="button"
					onClick={props.onDelete}
				>
					{t('accountSettings.secretManagement.deleteSecretAction')}
				</button>
			</div>
		</section>
	);
};

PostSecretCreationView.displayName = 'SecretsListView';
PostSecretCreationView.defaultProps = {};

export default React.memo(PostSecretCreationView);
