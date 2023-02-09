import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import mixpanel from 'mixpanel-browser';

import IntroView from './Intro.view';

interface IProps {}

const Intro: React.FC<IProps> = () => {
	const { t } = useTranslation();
	const [isCommandCopiedState, seIsCommandCopiedState] = useState<boolean>(false);
	const [isCommandOnHoverState, seIsCommandOnOverState] = useState<boolean>(false);
	const [viewWidthState, seViewWidthState] = useState<number | null>(null);

	const onCopyCommand = async () => {
		seIsCommandCopiedState(() => true);
		seIsCommandOnOverState(() => false);
		mixpanel.track('Copied command button CLICKED / Intro');

		await navigator.clipboard.writeText(t('main.intro.command.textCopy'));

		setTimeout(() => seIsCommandCopiedState(() => false), 2000);
	};

	const onHoverCommand = (isHover: boolean) => {
		seIsCommandOnOverState(() => isHover);
	};

	const onGetStartedClick = () => {
		mixpanel.track('Get Statred button CLICKED / Intro');
	};

	useEffect(() => {
		seViewWidthState(() => window.innerWidth);
		window.addEventListener('resize', () => seViewWidthState(() => window.innerWidth));

		return () => window.removeEventListener('resize', () => seViewWidthState(() => window.innerWidth));
	}, []);

	return (
		<IntroView
			isCommandCopied={isCommandCopiedState}
			isCommandOnHover={isCommandOnHoverState}
			viewWidth={viewWidthState}
			onCopyCommand={onCopyCommand}
			onHoverCommand={onHoverCommand}
			onGetStartedClick={onGetStartedClick}
		/>
	);
};

Intro.displayName = 'Intro';
Intro.defaultProps = {};

export default React.memo(Intro);
