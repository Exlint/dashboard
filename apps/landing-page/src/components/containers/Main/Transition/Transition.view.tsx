import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Trans } from 'react-i18next';

import { concatClasses } from '@/utils/component';

import classes from './Transition.module.scss';

interface IProps {
	readonly isVisible: boolean;
	readonly onViewPort: (_: boolean) => void;
}

const TransitionView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { ref, inView } = useInView();

	props.onViewPort(inView);

	const textClass = props.isVisible
		? concatClasses(classes, 'container__text', 'container__text--fadeIn')
		: classes['container__text'];

	return (
		<div className={classes['container']} ref={ref}>
			<span className={textClass}>
				<Trans i18nKey="main.transition.title" />
			</span>
		</div>
	);
};

TransitionView.displayName = 'TransitionView';
TransitionView.defaultProps = {};

export default React.memo(TransitionView);
