import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import ExternalAction from '@/layout/ExternalAction';

import classes from './CliAuth.module.scss';

interface IProps {
	readonly onAuthClick: VoidFunction;
}

const CliAuthView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<ExternalAction className={classes['container']}>
			<h2 className={classes['header']}>{t('cliAuth.header')}</h2>

			<span className={classes['commandText']}>
				{t('cliAuth.commandText.prefix')}
				&nbsp;
				<code className={classes['commandText__code']}>
					<Trans>exlint auth</Trans>
				</code>
				{t('cliAuth.commandText.postfix')}
			</span>

			<span className={classes['buttonInstruction']}>
				<Trans i18nKey="cliAuth.buttonInstruction" />
			</span>

			<button className={classes['authButton']} type="button" onClick={props.onAuthClick}>
				{t('cliAuth.buttonText')}
			</button>
		</ExternalAction>
	);
};

CliAuthView.displayName = 'CliAuthView';
CliAuthView.defaultProps = {};

export default React.memo(CliAuthView);
