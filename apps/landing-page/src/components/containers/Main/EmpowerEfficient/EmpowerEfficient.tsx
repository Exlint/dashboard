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

		await navigator.clipboard.writeText(t('main.empowerEfficient.command.textCopy'));

		setTimeout(() => seIsCommandCopiedState(() => false), 2000);
	};

	const onHoverCommand = (isHover: boolean) => {
		seIsCommandOnOverState(() => isHover);
	};

	const onGithubClickTrack = () => {
		mixpanel.track('Github button CLICKED / Header');
	};

	const onDocsClickTrack = () => {
		mixpanel.track('Navigate to docs button CLICKED / EmpowerEfficient');
	};

	return (
		<EmpowerEfficientView
			isCommandCopied={isCommandCopiedState}
			isCommandOnHover={isCommandOnHoverState}
			onCopyCommand={onCopyCommand}
			onHoverCommand={onHoverCommand}
			onGithubClickTrack={onGithubClickTrack}
			onDocsClickTrack={onDocsClickTrack}
		/>
	);
};

EmpowerEfficient.displayName = 'EmpowerEfficient';
EmpowerEfficient.defaultProps = {};

export default React.memo(EmpowerEfficient);
