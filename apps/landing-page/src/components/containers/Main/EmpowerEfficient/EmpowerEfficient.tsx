import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import mixpanel from 'mixpanel-browser';

import EmpowerEfficientView from './EmpowerEfficient.view';

interface IProps {}

const EmpowerEfficient: React.FC<IProps> = () => {
	const { t } = useTranslation();
	const [isCommandCopiedState, seIsCommandCopiedState] = useState<boolean>(false);
	const [isCommandOnHoverState, seIsCommandOnOverState] = useState<boolean>(false);

	const onCopyCommand = async () => {
		seIsCommandCopiedState(() => true);
		seIsCommandOnOverState(() => false);
		mixpanel.track('Copied command button CLICKED / EmpowerEfficient');

		await navigator.clipboard.writeText(t('main.empowerEfficient.command.text'));

		setTimeout(() => seIsCommandCopiedState(() => false), 2000);
	};

	const onHoverCommand = (isHover: boolean) => {
		seIsCommandOnOverState(() => isHover);
	};

	const onDocsNavigate = () => {
		mixpanel.track('Navigate to docs button CLICKED / EmpowerEfficient');
		window.open('https://docs.exlint.io', '_blank');
	};

	const onGithubNavigate = () => {
		mixpanel.track('Github button CLICKED / Header');
		window.open('https://github.com/Exlint/cli', '_blank');
	};

	return (
		<EmpowerEfficientView
			isCommandCopied={isCommandCopiedState}
			isCommandOnHover={isCommandOnHoverState}
			onCopyCommand={onCopyCommand}
			onHoverCommand={onHoverCommand}
			onDocsNavigate={onDocsNavigate}
			onGithubNavigate={onGithubNavigate}
		/>
	);
};

EmpowerEfficient.displayName = 'EmpowerEfficient';
EmpowerEfficient.defaultProps = {};

export default React.memo(EmpowerEfficient);
